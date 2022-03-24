import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import qs from "qs";
import { ErrorNotify } from "components/notification";
import Accordion from "components/accordion/accordion";
import Report from "components/cards/component/filtercard/Filter";
import { getReports } from "../../../../pages/api/reports";
import { getFilters } from "pages/api/filter";

import { getFormattedData } from "utilities";
import { Flags } from "../../../../constant/flags";
import Loader from "components/loader";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

import SearchBar from "../../../searchBar/search";
import SharePublicationModal from "../../../sharePublicationModal";
import TooltipComponent from "../../../tooltip";

const RightWrapPage = ({
  publicationReports = [],
  nonPublicationReports = [],
  setSelectInputs,
  selectInputs,
  showAllReports,
  onResetFilter,
}) => {
  const [isOpen, setIsOpen] = useState("");
  const [activeCard, setActiveCard] = useState({});
  const [search, setSearch] = useState(undefined);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isShareModal, setShareModal] = useState(false);
  const [isClearAll, setClearAll] = useState(false);

  const { data: filtersData } = useQuery(["getFilters"], getFilters, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  let filters = {};
  if (filtersData?.data?.results) {
    filters = filtersData?.data?.results;
  }

  const toggleShareModal = () => {
    setShareModal(!isShareModal);
  };

  const query = useMemo(() => {
    return qs.stringify({
      filters: {
        id: {
          $in: [...nonPublicationReports, ...publicationReports].map(
            (i) => i?.id
          ),
        },
        ReportName: {
          $containsi: search,
        },
        AddFilters: {
          countries: {
            id: {
              $in: selectInputs?.countries,
            },
          },
          regions: {
            id: {
              $in: selectInputs?.regions,
            },
          },
          segments: {
            id: {
              $in: selectInputs?.segments,
            },
          },
          document_types: {
            id: {
              $in: selectInputs?.document_types,
            },
          },
          years: {
            id: {
              $in: selectInputs?.years,
            },
          },
          generation_sources: {
            id: {
              $in: selectInputs?.generation_sources,
            },
          },
        },
      },
    });
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

  const finalPublicationReports = publicationReports?.map((publishedReport) => {
    const report = allReports?.data?.data?.find(
      (i) => i.id === publishedReport.id
    );
    return report;
  });

  const finalNonPublicationReports = nonPublicationReports?.map(
    (nonPublishedReport) => {
      const report = allReports?.data?.data?.find(
        (i) => i.id === nonPublishedReport.id
      );
      return report;
    }
  );
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

  const reports = showAllReports
    ? allReports?.data?.data
    : finalNonPublicationReports;

  const onSearch = (e) => {
    setSearch(e);
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
  };

  const optionSelected =
    selectInputs?.regions?.length ||
    selectInputs?.countries?.length ||
    selectInputs?.segments?.length ||
    selectInputs?.document_types?.length ||
    selectInputs?.years?.length ||
    selectInputs?.generation_sources?.length;

  return (
    <>
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
            className={
              "report-left-wrap relative w-[30%] mr-[16px] pl-[7px] pr-[7px]"
            }
          >
            <h5 className="font-bold text-[16px] m-0 text-text pb-[15px] pl-[2px] tracking-[1px]">
              Filters
              {optionSelected ? (
                <span
                  className="text-Primary cursor-pointer text-[14px] tracking-[0.4px] underline"
                  onClick={() => onReset()}
                >
                  Clear filters
                </span>
              ) : null}
            </h5>
            <div className="innerFilter">
              {showAllReports && (
                <SearchBar
                  onChange={(e) => onSearch(e?.target?.value)}
                  value={search}
                />
              )}
              <Accordion
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
              <Accordion
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
              <Accordion
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
              <Accordion
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
              <Accordion
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
              <Accordion
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
              {/* <Accordion
                title="Co-Authors"
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.coAuthor)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.co_authors}
                name={"co_authors"}
                top={true}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
              <Accordion
                title="Publishing Organizations"
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.publishingOrganization)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.publishing_organizations}
                name={"publishing_organizations"}
                top={true}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              /> */}
            </div>
          </div>

          <div
            className={"report-right-wrap w-[70%]"}
            onClick={() => setIsOpen()}
          >
            <h5 className="font-bold text-[16px] m-0 text-text pb-[15px] pl-[2px] tracking-[1px] flex">
              Resources
              {!showAllReports && (
                <>
                  <button
                    className="bg-Secondary rounded-[69px] pl-[10px] pr-[10px] leading-5 text-center
        text-xsmall h-[40px] border-0	text-white outline-0	no-underline font-medium ml-auto mt-[-20px] pt-[4px]"
                  >
                    <TooltipComponent
                      content="At any step, you can download your report."
                      hideInfo={true}
                      top={true}
                    >
                      Download
                    </TooltipComponent>
                  </button>
                  <button
                    className="bg-Secondary rounded-[69px] pl-[10px] pr-[10px] leading-5
        text-xsmall h-[40px] border-0	text-white outline-0	no-underline font-medium ml-[10px] mt-[-20px] pt-[4px]"
                    onClick={toggleShareModal}
                  >
                    <TooltipComponent
                      content="At any step, you can get reports via email."
                      hideInfo={true}
                      top={true}
                    >
                      Email
                    </TooltipComponent>
                  </button>
                </>
              )}
              {isShareModal ? (
                <SharePublicationModal toggle={toggleShareModal} />
              ) : null}
            </h5>
            <div className="rightInnerWrap">
              <div className="relative mr-[0px] w-[100%] inline-block">
                {isFetchingReports ? (
                  <div className="flex items-center justify-center h-[100%]">
                    <Loader />
                  </div>
                ) : !allReports?.data?.data?.length ||
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
