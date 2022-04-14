import React, { useEffect, useMemo, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { useMutation, useQuery } from "react-query";
import { BsDownload, BsSliders } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { AiOutlineInfoCircle, AiOutlineMail } from "react-icons/ai";
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

const RightWrapPage = ({
  publicationReports = [],
  nonPublicationReports = [],
  setSelectInputs,
  selectInputs,
  showAllReports,
  onResetFilter,
  setClearAll,
  isClearAll,
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
  const debouncedSearch = useDebounce(search, 500);
  const csvLink = useRef();

  // Get Filters API
  const { data: filtersData } = useQuery(["getFilters"], getFilters, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  // All Filters
  let filters = {};
  if (filtersData?.data?.results) {
    filters = filtersData?.data?.results;
  }

  useEffect(() => {
    if(debouncedSearch?.length){
      setPage(1)
    }
  },[debouncedSearch])
  // Get Reports API
  const query = useMemo(() => {
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
        ErrorNotify(error.response.data.error.message);
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
  };
  const onDownload = () => {
    setCsvData("");
    const body = {
      data: {
        reports: downloadData?.map((i) => i?.id),
        searchTerm: search || "",
        filters: selectedFilters,
      },
    };
    mutate(body);
  };

  // Publication Reports
  const finalPublicationReports = publicationReports?.map((publishedReport) => {
    const report = allReports?.data?.data?.find(
      (i) => i.id === publishedReport.id
    );
    return report;
  });

  // on Publication Reports
  const finalNonPublicationReports = nonPublicationReports?.map(
    (nonPublishedReport) => {
      const report = allReports?.data?.data?.find(
        (i) => i.id === nonPublishedReport.id
      );
      return report;
    }
  );

  // Share email modal
  const toggleShareModal = () => {
    setShareModal(!isShareModal);
  };

  // Filter onChange
  const onChange = (e) => {
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
    if ((optionSelected && page === 1) || allReports?.data?.data?.length < 20) {
      setPreviousReports(allReports?.data?.data);
    } else if (allReports?.data?.data?.length && allReports?.data?.data?.length >= 20) {
      setPreviousReports([...allReports?.data?.data, ...previousReports]);
    } else if (!isScrollLoader && !allReports?.data?.data?.length) {
      setPreviousReports([]);
    }
  }, [allReports]);

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
  };

  const onScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 5;
    if (bottom && page < allReports?.data?.meta?.pagination?.pageCount) {
      setPage(page + 1);
      setPreviousReports([...reports]);
      setIsScrollLoader(true);
    }
  };

  const optionSelected = isSelectedInput(selectInputs);

  const finalReports = !showAllReports && [
    ...reports,
    ...finalPublicationReports,
  ];

  const downloadData = showAllReports ? allReports?.data?.data : finalReports;

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
        <div className="rightOverlay" onClick={() => setIsOpen()} />
      ) : null}
      <div className={"right-wrap reportRightWrap"}>
        {!showAllReports && (
          <div className="flex items-center pb-[10px]">
            <div className="flex items-center mr-[20px]">
              <img
                src="static/images/greenFile.svg"
                alt="card"
                width="90"
                height="90"
              />
            </div>
            <h5 className="font-bold text-[22px] m-0 text-text">
              Resources that match your input
            </h5>
          </div>
        )}
        <div className="flex mt-[30px] reports-inner-section">
          <div
            className="font-bold text-[16px] text-text pb-[10px] pl-[2px] tracking-[1px] flex mobile-show filter-button"
            onClick={() => setIsFilter(!isFilter)}
          >
            <BsSliders className="text-text mr-[5px]" />
            Filter
          </div>
          {isFilter && <div className={"mobile-overlay mobile-show"} onClick={() => setIsFilter(!isFilter)} />}
          <div
            className={
              `${isFilter ? "transform-filter-animation-show" : "transform-filter-animation-hide"} report-left-wrap relative w-[30%] mr-[16px] pl-[7px] pr-[7px]`
            }
          >
            <h5 className="font-bold text-[16px] m-0 text-text pb-[15px] pl-[2px] tracking-[1px] flex justify-between">
              Filters
              {optionSelected ? (
                <span
                  className="text-Primary cursor-pointer text-[14px] tracking-[0.4px] underline mobile-hidden"
                  onClick={() => onReset()}
                >
                  Clear filters
                </span>
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
                title="Select Region"
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.region)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.regions}
                name={"regions"}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title="Select Country"
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
                title="Segment"
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
                title="Resource Type"
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
                title="Year"
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.year)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.years}
                name={"years"}
                top={true}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title="Generation Source"
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
                  onClick={() => setIsFilter(!isFilter)}
                  style={{backgroundColor: '#FCB600', color: '#fff'}}
                />
              </div>
            </div>
          </div>

          <div
            className={"report-right-wrap w-[70%]"}
            onClick={() => setIsOpen()}
          >
            <h5 className="font-bold text-[16px] m-0 text-text pb-[15px] pl-[2px] tracking-[1px] flex justify-between resource-buttons">
              <p>Resources</p>
              <div className="flex resource-buttons-wrap">
                <button
                  className="bg-Secondary rounded-[69px] pl-[10px] pr-[10px] leading-5 text-center
        text-xsmall h-[40px] border-0	text-white outline-0	no-underline font-medium mt-[-20px] pt-[4px] resources-button button-animation"
                  onClick={() => onDownload()}
                >
                  <TooltipComponent
                    content="Click here to download the list of matching resources."
                    hideInfo={true}
                    top={true}
                  >
                    <div className="flex download-button-inner">
                      Download <BsDownload style={{ marginLeft: 7 }} />
                    </div>
                  </TooltipComponent>
                </button>
                <button
                  className="bg-Secondary rounded-[69px] pl-[10px] pr-[10px] leading-5
        text-xsmall h-[40px] border-0	text-white outline-0	no-underline font-medium ml-[10px] mt-[-20px] pt-[4px] resources-button button-animation"
                  onClick={toggleShareModal}
                >
                  <TooltipComponent
                    content="Click to receive a list matching resources via Email."
                    hideInfo={true}
                    top={true}
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
            <div className="rightInnerWrap" onScroll={(e) => onScroll(e)}>
              <div className="relative mr-[0px] w-[100%] inline-block">
                {isFetchingReports && !isScrollLoader ? (
                  <div className="flex items-center justify-center h-[100%]">
                    <Loader />
                  </div>
                ) : !reports?.length ||
                  (!allReports?.data?.data?.length && !showAllReports) ||
                  (!finalPublicationReports?.length &&
                    !finalNonPublicationReports?.length &&
                    !showAllReports) ? (
                  <div className="report-no-data">
                    <p>
                      <AiOutlineInfoCircle />
                      No Reports Found.
                    </p>
                    <a className="cursor-pointer" onClick={() => onReset()}>
                      Clear all filters
                    </a>
                  </div>
                ) : (
                  <>
                    {Boolean(finalPublicationReports.length) &&
                      finalPublicationReports?.map((i, index) => {
                        const name = i?.attributes.ReportName;
                        if (!name) return null;
                        const year =
                          i?.attributes?.AddFilters?.years?.data[0]?.attributes
                            ?.Year;
                        const country =
                          i?.attributes?.AddFilters?.countries?.data[0]
                            ?.attributes?.CountryName;
                        const findType =
                          i?.attributes?.AddFilters?.document_types?.data?.find(
                            (e) =>
                              selectedOptions?.includes(
                                e?.attributes?.DocumentType
                              )
                          );
                        const document_types =
                          findType?.attributes?.DocumentType ||
                          i?.attributes?.AddFilters?.document_types?.data[0]
                            ?.attributes?.DocumentType;
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
                            date={year || "2018"}
                            file={
                              flag?.image
                                ? `https://hatscripts.github.io/circle-flags/flags/${flag?.code?.toLocaleLowerCase()}.svg`
                                : "static/images/globe.png"
                            }
                            title={name}
                            key={index}
                            star={true}
                            url={url}
                            onClick={() => onReportClick(i?.id)}
                            isActive={activeCard === i?.id}
                            description={description}
                          />
                        );
                      })}
                    {Boolean(
                      finalPublicationReports[0]?.attributes?.ReportName
                    ) ? (
                      <>
                        <div
                          style={{
                            borderBottom:
                              "2.45084px solid rgba(134, 164, 176, 0.25)",
                          }}
                        />
                        <div
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
                        const findType =
                          i?.attributes?.AddFilters?.document_types?.data?.find(
                            (e) =>
                              selectedOptions?.includes(
                                e?.attributes?.DocumentType
                              )
                          );
                        const document_types =
                          findType?.attributes?.DocumentType ||
                          i?.attributes?.AddFilters?.document_types?.data[0]
                            ?.attributes?.DocumentType;
                        const publishingOrganizations =
                          i?.attributes?.AddFilters?.publishing_organizations
                            ?.data[0]?.attributes?.PublishingOrganization;
                        const url = i?.attributes?.URL;
                        const flag = Flags.find((e) => e?.name == country);
                        const description = i?.attributes?.Description;
                        return (
                          <Report
                            countryName={country || "Global"}
                            area={document_types || "North America "}
                            item={publishingOrganizations || "IRENA"}
                            date={year || "2018"}
                            file={
                              flag?.image
                                ? `https://hatscripts.github.io/circle-flags/flags/${flag?.code?.toLocaleLowerCase()}.svg`
                                : "static/images/globe.png"
                            }
                            title={name}
                            key={index}
                            url={url}
                            onClick={() => onReportClick(i?.id)}
                            isActive={activeCard === i?.id}
                            bigCard={showAllReports}
                            description={description}
                          />
                        );
                      })}
                  </>
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
