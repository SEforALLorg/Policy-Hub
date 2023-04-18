import React, { useEffect, useMemo, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { useMutation, useQuery } from "react-query";
import { BsDownload } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { getFormattedData, getReportQuery } from "utilities";
import useDebounce from "utilities/useDebounce";
import { Flags } from "constant/flags";
import { ErrorNotify } from "components/notification";
import Select from "components/select";
import Report from "components/cards/reportCard";
import Loader from "components/loader";
import SearchBar from "components/searchBar/search";
import SharePublicationModal from "components/sharePublicationModal";
import TooltipComponent from "components/tooltip";
import { getReports, downloadReports } from "pages/api/reports";
import { getFilters } from "pages/api/filter";
import { isSelectedInput } from "../../utilities";
import BlueButton from "../buttons/blueButton";
import { RiSearch2Line } from "react-icons/ri";
import MobileFilters from "../mobileFilters";
import { useTranslation } from "react-i18next";
import { changingRightWrapLogo } from "../../constant/changinglogo";
import { Tooltip } from "react-tooltip";
import {
  CLEANCOOKING,
  ELECTRICITYACCESS,
  ENERGYEFFICIENCY,
  SUSTAINABLECOOLING,
} from "../../constant";

const RightWrapPage = ({
  publicationReports = [],
  nonPublicationReports = [],
  setSelectInputs,
  selectInputs,
  showAllReports,
  onResetFilter,
  setClearAll,
  isClearAll,
  isResetPage,
}) => {
  const [isOpen, setIsOpen] = useState("");
  const [activeCard, setActiveCard] = useState({});
  const [search, setSearch] = useState(undefined);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isShareModal, setShareModal] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [previousReports, setPreviousReports] = useState([]);
  const [isScrollLoader, setIsScrollLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [csvData, setCsvData] = useState("");
  const [sectorOptionEnerygy, setSectorOptionEnergy] = useState([]);
  const [sectorOptionCooling, setSectorOptionCooling] = useState([]);
  const [browseResource, setBrowseResource] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [resourceType, setResourceType] = useState();
  const [isLoader, setIsLoader] = useState(false);
  const debouncedSearch = useDebounce(search, 500);
  const csvLink = useRef();
  const { t } = useTranslation();

  typeof window !== "undefined" &&
    window.addEventListener(
      "orientationchange",
      function () {
        // Announce the new orientation number
        if (window?.orientation === 90) {
          setIsFilter(false);
        }
      },
      false
    );

  // Get Filters API
  const { data: filtersData } = useQuery(["getFilters"], getFilters, {
    onError: (error) => {
      ErrorNotify(error?.response?.data?.error?.message);
    },
  });

  // All Filters
  let filters = {};
  if (filtersData?.data?.results) {
    filters = filtersData?.data?.results;
  }

  // Get Reports API
  const query = useMemo(() => {
    // if (typeof window !== "undefined" && window?.innerWidth < 990) return;
    return getReportQuery(
      selectInputs,
      nonPublicationReports,
      publicationReports,
      page,
      debouncedSearch,
      showAllReports
    );
  }, [selectInputs, nonPublicationReports, publicationReports]);

  const { data: allReports, isFetching: isFetchingReports } = useQuery(
    ["getReports", query],
    () => getReports(query),
    {
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );

  // Download Csv
  const { mutate } = useMutation(["downloadReports"], downloadReports, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
    onSuccess: (e) => {
      const csvData = e?.data?.result?.csv;
      if (csvData) {
        setCsvData(csvData);
        setIsLoader(false);
        csvLink.current.link.click();
      }
    },
  });

  // Download CSV
  const selectedFilters = {
    countries: selectInputs?.countries,
    regions: selectInputs?.regions,
    segments: selectInputs?.segments,
    document_types: selectInputs?.document_types,
    years: selectInputs?.years,
    generation_sources: selectInputs?.generation_sources,
    sector: selectInputs?.sector,
    fuel: selectInputs?.fuel,
  };
  const onDownload = () => {
    const filters = Object.values(selectedFilters).filter((key) => {
      if (key.length > 0) return true;
    });
    setCsvData("");
    const body = {
      data: {
        reports: filters?.length === 0 ? [] : downloadData?.map((i) => i?.id),
        searchTerm: search || "",
        filters: selectedFilters,
      },
    };
    mutate(body);
    setIsLoader(true);
  };

  // Publication Reports
  const finalPublicationReports = publicationReports?.map((publishedReport) => {
    const report = allReports?.data?.data?.find(
      (i) => i.id === publishedReport.id
    );
    const isPublishing =
      report?.attributes?.AddFilters?.publishing_organizations?.data?.[0]
        ?.attributes?.PublishingOrganization === "SEforALL";
    return { ...report, publishing: isPublishing };
  });

  // on Publication Reports
  const finalNonPublicationReports = nonPublicationReports
    ?.map((nonPublishedReport) => {
      const report = allReports?.data?.data?.find(
        (i) => i.id === nonPublishedReport.id
      );
      return report;
    })
    ?.filter((item) => item !== undefined);

  // Share email modal
  const toggleShareModal = () => {
    setShareModal(!isShareModal);
  };

  // Filter onChange
  const onChange = (e) => {
    setPage(1);
    setPreviousReports([]);
    const obj = { ...selectInputs };
    const revisedCountryList = obj[e.target.name];
    const alreadyPresent = revisedCountryList?.includes(
      e?.target?.id.toString()
    );
    const targetIndex = revisedCountryList?.indexOf(e?.target?.id);
    if (alreadyPresent) {
      revisedCountryList.splice(targetIndex, 1);
      obj[e.target.name] = revisedCountryList;
      return setSelectInputs(obj);
    }

    obj[e.target.name] = [...obj[e.target.name], e?.target?.id];
    setSelectInputs(obj);
  };

  useEffect(() => {
    if (optionSelected && page === 1) {
      setPreviousReports(allReports?.data?.data || []);
      window !== "undefined" &&
        document.getElementById("rightWrap").scrollTo(0, 0);
    } else if (allReports?.data?.data?.length) {
      setPreviousReports(
        [...(previousReports || []), ...allReports?.data?.data] || []
      );
      browseResource
        ? ""
        : window !== "undefined" &&
          document.getElementById("rightWrap").scrollTo(0, 0);
    } else if (!isScrollLoader && !allReports?.data?.data?.length) {
      setPreviousReports([]);
    }
    setResourceType(localStorage.getItem("ResourceType"));
    if (window.location.pathname.includes("allresources")) {
      setBrowseResource(true);
    }
  }, [allReports, typeof window !== "undefined" && window]);

  const reports = showAllReports ? previousReports : finalNonPublicationReports;

  const onSearch = (e) => {
    setSearch(e);
    setIsScrollLoader(false);
  };

  const onReportClick = (id) => {
    if (activeCard === id) {
      setActiveCard("");
    } else {
      setActiveCard(id);
    }
  };

  const onReset = () => {
    setClearAll(!isClearAll);
    onResetFilter();
    setPreviousReports([]);
    setIsOpen("");
    setIsClear(!isClear);
    setSearch("");
  };

  const onScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50;
    if (
      bottom &&
      page < allReports?.data?.meta?.pagination?.pageCount &&
      showAllReports
    ) {
      setPage(page + 1);
      setIsScrollLoader(true);
    }
  };

  const onApply = () => {
    setIsFilter(!isFilter);
    setIsOpen("");
  };

  const optionSelected = isSelectedInput(selectInputs);

  useEffect(() => {
    if (debouncedSearch?.length) {
      setPage(1);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    setPage(1);
  }, [isResetPage]);

  useEffect(() => {
    const filtersArray = [
      "Agricultural cold chains",
      "Healthcare and medical cold chains",
      "Thermal comfort and safety",
    ];
    if (
      browseResource ||
      localStorage.getItem("ResourceType") === SUSTAINABLECOOLING
    ) {
      const sectorSustainable = filters?.sector?.filter((key) => {
        if (filtersArray?.includes(key?.Sector)) {
          return key;
        }
      });
      setSectorOptionCooling(sectorSustainable);
    }
    if (
      browseResource ||
      localStorage.getItem("ResourceType") === ENERGYEFFICIENCY
    ) {
      const sectorEnergy = filters?.sector?.filter((key) => {
        if (!filtersArray?.includes(key?.Sector)) {
          return key;
        }
      });
      setSectorOptionEnergy(sectorEnergy);
    }
  }, [filters, browseResource]);

  const sortedYear = filters?.year
    ?.map((year) => {
      let yearObj = { ...year, label: year?.Year };
      return yearObj;
    })
    .sort((a, b) => {
      return b.Year - a.Year;
    });

  const finalReports = !showAllReports && [
    ...reports,
    ...finalPublicationReports,
  ];

  const downloadData = showAllReports ? allReports?.data?.data : finalReports;
  const isFinalPublicationReports = finalPublicationReports
    ?.map((item) => item?.id)
    ?.filter((item) => item !== undefined)?.length;
  const disableButtons = isFinalPublicationReports
    ? false
    : !reports?.length ||
      (!allReports?.data?.data?.length && !showAllReports) ||
      (!finalPublicationReports?.length &&
        !finalNonPublicationReports?.length &&
        !showAllReports);

  return (
    <>
      <CSVLink
        data={csvData}
        filename="reports.csv"
        className="hidden"
        ref={csvLink}
        target="_blank"
      />
      {isOpen ? (
        <div className="rightOverlay" onClick={() => setIsOpen("")} />
      ) : null}
      <div className={"right-wrap reportRightWrap"}>
        {!showAllReports && (
          <div className="flex items-center pb-[10px]">
            <div className="flex items-center mr-[20px]">
              {changingRightWrapLogo.map((key, index) => {
                if (
                  localStorage.getItem("ResourceType") === Object.keys(key)?.[0]
                ) {
                  return (
                    <img
                      src={Object.values(key)?.[0]}
                      alt="card"
                      width="70px"
                      height="70px"
                      key={index}
                    />
                  );
                }
              })}
            </div>
            <h5 className="font-bold text-[22px] m-0 text-text textColor">
              {t("ResourcesInput")}
            </h5>
          </div>
        )}
        <div className="flex mt-[30px] reports-inner-section">
          <div className="mobile-show">
            <MobileFilters
              publicationReports={publicationReports}
              nonPublicationReports={nonPublicationReports}
              setSelectInputs={setSelectInputs}
              selectInputs={selectInputs}
              showAllReports={showAllReports}
              onResetFilter={onResetFilter}
              setClearAll={setClearAll}
              isClearAll={isClearAll}
              isResetPage={isResetPage}
              isClear={isClear}
              browseResource
            />
          </div>
          {isFilter && (
            <div
              className={"mobile-overlay mobile-show"}
              onClick={() => {
                setIsFilter(!isFilter);
                setIsOpen("");
              }}
            />
          )}
          <div
            className={`${
              isFilter
                ? "transform-filter-animation-show"
                : "transform-filter-animation-hide"
            } report-left-wrap relative w-[30%] mr-[16px] pl-[7px] pr-[7px] ${
              !optionSelected && `mt-[6px]`
            }`}
          >
            <h5
              className="font-bold text-[16px] text-text pb-[5px] pl-[2px] tracking-[1px] flex justify-between textColor items-center mt-[-5px]"
              style={{ paddingBottom: optionSelected ? "5px" : "9px" }}
            >
              {t("Filters")}
              {optionSelected ? (
                <button
                  className={`bg-Secondary rounded-[69px] pl-[10px] pr-[10px] leading-5 text-center
      text-xsmall h-[30px] border-0	text-white outline-0	no-underline font-medium pt-[0px] resources-button button-animation mobile-hidden clear-filter-button`}
                  onClick={() => onReset()}
                >
                  {t("Clear Filters")}
                </button>
              ) : null}
              <IoClose
                className="text-text mr-[5px] mobile-show close-icon"
                onClick={() => setIsFilter(!isFilter)}
                style={{ top: 14 }}
              />
            </h5>
            <div className="innerFilter">
              {showAllReports && (
                <SearchBar
                  onChange={(e) => onSearch(e?.target?.value)}
                  value={search}
                />
              )}
              <Select
                title={t("SelectCountry")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.countries)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.countries}
                name={"countries"}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title={t("Segment")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.segment)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.segments}
                name={"segments"}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title={t("ResourceType")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.documentType)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.document_types}
                name={"document_types"}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title={t("Year")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={sortedYear}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.years}
                name={"years"}
                top={true}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              {(resourceType === ELECTRICITYACCESS || browseResource) && (
                <Select
                  title={t("GenerationSource")}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  options={getFormattedData(filters?.generationSources)}
                  onChange={(e) => onChange(e)}
                  selected={selectInputs?.generation_sources}
                  name={"generation_sources"}
                  top={true}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  isClearAll={isClearAll}
                />
              )}
              {(resourceType === ENERGYEFFICIENCY || browseResource) && (
                <div className="filterTooltipWrap">
                  <Select
                    title={t("EnergyEfficiencySector")}
                    resourceType={ENERGYEFFICIENCY}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    options={getFormattedData(sectorOptionEnerygy)}
                    onChange={(e) => onChange(e)}
                    selected={selectInputs?.sector}
                    name={"sector"}
                    top={true}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                    isClearAll={isClearAll}
                  />
                  {resourceType === ENERGYEFFICIENCY && (
                    <Tooltip
                      className="energyToolTip"
                      anchorSelect={`.filterTooltipWrap`}
                      clickable={false}
                      place="top"
                    >
                      {t("EnergyEfficiencySector")}
                    </Tooltip>
                  )}
                </div>
              )}
              {(resourceType === SUSTAINABLECOOLING || browseResource) && (
                <Select
                  title={t("CoolingSector")}
                  resourceType={SUSTAINABLECOOLING}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  options={getFormattedData(sectorOptionCooling)}
                  onChange={(e) => onChange(e)}
                  selected={selectInputs?.sector}
                  name={"sector"}
                  top={true}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  isClearAll={isClearAll}
                />
              )}
              {(resourceType === CLEANCOOKING || browseResource) && (
                <Select
                  title={t("Fuel")}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  options={getFormattedData(filters?.fuel)}
                  onChange={(e) => onChange(e)}
                  selected={selectInputs?.fuel}
                  name={"fuel"}
                  top={true}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  isClearAll={isClearAll}
                />
              )}

              <div className="apply-wrap">
                <button
                  type="button"
                  onClick={() => {
                    if (optionSelected) {
                      onReset();
                    }
                  }}
                  className="mr-auto flex justify-center rounded-full h-[50px] xsm:w-full extrasmall:w-52 
                small:w-72 laptop:w-72 border border-gray-300 shadow-sm px-4 py-2 bg-white text-small font-medium 
                text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 items-center"
                >
                  Clear Filters
                </button>
                <BlueButton
                  title="Apply"
                  onClick={() => onApply()}
                  style={{
                    backgroundColor: "#FCB600",
                    color: "#fff",
                    opacity: optionSelected ? 1 : 0.5,
                  }}
                  disabled={optionSelected}
                />
              </div>
            </div>
          </div>

          <div
            className={"report-right-wrap w-[70%]"}
            onClick={() => setIsOpen()}
          >
            <h5 className="font-bold text-[16px] m-0 text-text pb-[8px] pl-[2px] tracking-[1px] flex justify-between resource-buttons textColor">
              <p className="m-0">{t("Resources")}</p>
              <div className="flex resource-buttons-wrap">
                <button
                  className={`bg-Secondary rounded-[69px] pl-[10px] pr-[10px] leading-5 text-center
        text-xsmall h-[40px] border-0	text-white outline-0	no-underline font-medium mt-[-20px] pt-[4px] resourcesButtonColor hover:opacity-[0.8] resources-button`}
                  onClick={() => onDownload()}
                  disabled={disableButtons}
                  style={{ opacity: disableButtons ? 0.5 : '', width: 108 }}
                >
                  {!isLoader ? (
                    <TooltipComponent
                      content={t("clicktodownload")}
                      hideInfo={true}
                      top={true}
                      hideContent={disableButtons}
                      id={"download"}
                      style={{marginTop: -7}}
                    >
                      <div className="flex justify-center download-button-inner">
                        {t("Download")} <BsDownload style={{ marginLeft: 7 }} />
                      </div>
                    </TooltipComponent>
                  ) : (
                    <div className="flex items-center justify-center h-[100%]">
                      <Loader />
                    </div>
                  )}
                </button>
                <button
                  className={`hover:opacity-[0.8] bg-Secondary rounded-[69px] pl-[10px] pr-[10px] leading-5
        text-xsmall h-[40px] border-0	text-white outline-0	no-underline font-medium ml-[10px] mt-[-20px] pt-[4px] resourcesButtonColor resources-button`}
                  onClick={toggleShareModal}
                  disabled={disableButtons}
                  style={{ opacity: disableButtons ? 0.5 : '' }}
                >
                  <TooltipComponent
                    content={t("clicktoreceive")}
                    hideInfo={true}
                    top={true}
                    hideContent={disableButtons}
                    id={"email"}
                    style={{marginTop: -7}}
                  >
                    <div className="flex">
                      {" "}
                      Email <AiOutlineMail style={{ marginLeft: 7 }} />
                    </div>
                  </TooltipComponent>
                </button>
              </div>
              {isShareModal ? (
                <SharePublicationModal
                  toggle={toggleShareModal}
                  allReports={downloadData}
                  selectedFilters={selectedFilters}
                  showAllReports={showAllReports}
                  searchTerm={search}
                />
              ) : null}
            </h5>
            <div
              id="rightWrap"
              className="rightInnerWrap"
              onScroll={(e) => onScroll(e)}
            >
              <div className="relative mr-[0px] w-[100%] inline-block">
                {isFetchingReports && !isScrollLoader ? (
                  <div className="flex items-center justify-center h-[100%]">
                    <Loader />
                  </div>
                ) : isFinalPublicationReports ||
                  Boolean(reports?.length) ||
                  (allReports?.data?.data?.length && showAllReports) ||
                  (finalPublicationReports?.length &&
                    finalNonPublicationReports?.length &&
                    showAllReports) ? (
                  <>
                    {Boolean(finalPublicationReports?.length) &&
                      finalPublicationReports
                        ?.sort((a, b) => b?.publishing - a?.publishing)
                        .map((i, index) => {
                          const name = i?.attributes?.ReportName;
                          if (!name) return null;
                          const year =
                            i?.attributes?.AddFilters?.years?.data[0]
                              ?.attributes?.Year;
                          const country =
                            i?.attributes?.AddFilters?.countries?.data[0]
                              ?.attributes?.CountryName;
                          const document_types =
                            i?.attributes?.AddFilters?.document_types?.data;
                          const publishingOrganizations =
                            i?.attributes?.AddFilters?.publishing_organizations
                              ?.data[0]?.attributes?.PublishingOrganization;
                          const url = i?.attributes?.URL;
                          const flag = Flags.find((e) => e?.name == country);
                          const description = i?.attributes?.Description;

                          return (
                            <Report
                              countryName={country || "Global"}
                              area={document_types}
                              item={publishingOrganizations || "IRENA"}
                              date={year}
                              file={
                                flag?.image
                                  ? `https://hatscripts.github.io/circle-flags/flags/${flag?.code?.toLocaleLowerCase()}.svg`
                                  : "../../static/images/globe.png"
                              }
                              title={name}
                              key={index}
                              star={true}
                              url={url}
                              onClick={() => onReportClick(i?.id)}
                              isActive={activeCard === i?.id}
                              description={description}
                              selectedRes={resourceType}
                            />
                          );
                        })}
                    {Boolean(
                      finalPublicationReports[0]?.attributes?.ReportName
                    ) ? (
                      <>
                        <div
                          className="LineColor"
                          style={{
                            borderBottom:
                              "2.45084px solid rgba(134, 164, 176, 0.25)",
                          }}
                        />
                        <div
                          className="LineColor"
                          style={{
                            marginBottom: 18,
                            marginTop: 3,
                            borderBottom:
                              "2.45084px solid rgba(134, 164, 176, 0.25)",
                          }}
                        />
                      </>
                    ) : null}
                    {Boolean(reports?.length) &&
                      reports?.map((i, index) => {
                        const name = i?.attributes?.ReportName;
                        if (!name) return null;
                        const year =
                          i?.attributes?.AddFilters?.years?.data[0]?.attributes
                            ?.Year;
                        const country =
                          i?.attributes?.AddFilters?.countries?.data[0]
                            ?.attributes?.CountryName;
                        const document_types =
                          i?.attributes?.AddFilters?.document_types?.data;
                        const publishingOrganizations =
                          i?.attributes?.AddFilters?.publishing_organizations
                            ?.data[0]?.attributes?.PublishingOrganization;
                        const url = i?.attributes?.URL;
                        const flag = Flags.find((e) => e?.name == country);
                        const description = i?.attributes?.Description;
                        return (
                          <Report
                            countryName={country}
                            area={document_types}
                            item={publishingOrganizations || "IRENA"}
                            date={year}
                            file={
                              flag?.image
                                ? `https://hatscripts.github.io/circle-flags/flags/${flag?.code?.toLocaleLowerCase()}.svg`
                                : "../../static/images/globe.png"
                            }
                            title={name}
                            key={index}
                            url={url}
                            onClick={() => onReportClick(i?.id)}
                            isActive={activeCard === i?.id}
                            bigCard={showAllReports}
                            description={description}
                            selectedRes={resourceType}
                          />
                        );
                      })}
                  </>
                ) : (
                  <div className="report-no-data">
                    <p>
                      <RiSearch2Line />
                      {t("NoReportsFound")}
                    </p>
                    <a
                      className="cursor-pointer hover:underline"
                      onClick={() => onReset()}
                    >
                      Clear all filters
                    </a>
                  </div>
                )}
                {isFetchingReports && isScrollLoader ? (
                  <div className="flex items-center justify-center">
                    <Loader />
                  </div>
                ) : null}
                {Boolean(reports?.length) && <div style={{ height: 1 }} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightWrapPage;
