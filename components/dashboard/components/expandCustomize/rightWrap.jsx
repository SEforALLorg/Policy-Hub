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

import {
  RightWrap,
  CardHeader,
  ImgBox,
  CardTitle,
  ReportsWrap,
  ReportsLeftWrap,
  ReportsRightWrap,
  InnerSlideWrap,
  Nodata,
  Divider,
  LoaderWrapFull,
  BlankData,
  Overlay,
  RightTitle,
  InnerFilters,
  RightInnerWrap
} from "./styles";
import Loader from "components/loader";
import { AiOutlineInfoCircle } from "react-icons/ai";

import SearchBar from "../../../searchBar/search";

const RightWrapPage = ({
  publicationReports = [],
  nonPublicationReports = [],
  setSelectInputs,
  selectInputs,
  showAllReports,
}) => {
  const [isOpen, setIsOpen] = useState("");
  const [activeCard, setActiveCard] = useState({});
  const [search, setSearch] = useState(undefined);

  const { data: filtersData } = useQuery(["getFilters"], getFilters, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  let filters = {};
  if (filtersData?.data?.results) {
    filters = filtersData?.data?.results;
  }

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

  const onReportClick = (name) => {
    if (activeCard === name) {
      setActiveCard("");
    } else {
      setActiveCard(name);
    }
  };

  return (
    <>
      {isOpen ? <Overlay onClick={() => setIsOpen()} /> : null}
      <RightWrap className={"right-wrap"}>
        {!showAllReports && (
          <CardHeader>
            <ImgBox>
              <img src="static/images/greenFile.svg" alt="card" />
            </ImgBox>
            <CardTitle>Resources that match your input.</CardTitle>
          </CardHeader>
        )}
        <ReportsWrap>
          
          <ReportsLeftWrap className={"report-left-wrap"}>
            <RightTitle>Filters</RightTitle>
            <InnerFilters>
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
            />
            <Accordion
              title="Select Country"
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              options={getFormattedData(filters?.countries)}
              onChange={(e) => onChange(e)}
              selected={selectInputs?.countries}
              name={"countries"}
            />
            <Accordion
              title="Segment"
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              options={getFormattedData(filters?.segment)}
              onChange={(e) => onChange(e)}
              selected={selectInputs?.segments}
              name={"segments"}
            />
            <Accordion
              title="Resource Type"
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              options={getFormattedData(filters?.documentType)}
              onChange={(e) => onChange(e)}
              selected={selectInputs?.document_types}
              name={"document_types"}
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
            />
            <Accordion
              title="Co-Authors"
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              options={getFormattedData(filters?.coAuthor)}
              onChange={(e) => onChange(e)}
              selected={selectInputs?.co_authors}
              name={"co_authors"}
              top={true}
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
            />
            </InnerFilters>
          </ReportsLeftWrap>

          <ReportsRightWrap
            className={"report-right-wrap"}
            onClick={() => setIsOpen()}
          >
            <RightTitle>Resources</RightTitle>
            <RightInnerWrap>
            
            <InnerSlideWrap>
              {isFetchingReports ? (
                <LoaderWrapFull>
                  <Loader />
                </LoaderWrapFull>
              ) : !allReports?.data?.data?.length ||
                (!finalPublicationReports?.length &&
                  !finalNonPublicationReports?.length &&
                  !showAllReports) ? (
                <Nodata>
                  <p>
                    <AiOutlineInfoCircle />
                    No Reports Found.
                  </p>
                  <a href="/resources">View all reports</a>
                </Nodata>
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
                      const document_types =
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
                          file={flag?.image || "static/images/globe.png"}
                          title={name}
                          key={index}
                          star={true}
                          url={url}
                          onClick={() => onReportClick(name)}
                          isActive={activeCard === name}
                          description={description}
                        />
                      );
                    })}
                  {Boolean(
                    finalPublicationReports[0]?.attributes?.ReportName
                  ) ? (
                    <>
                      <Divider />
                      <Divider style={{ marginBottom: 18, marginTop: 3 }} />
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
                          file={flag?.image || "static/images/globe.png"}
                          title={name}
                          key={index}
                          url={url}
                          onClick={() => onReportClick(name)}
                          isActive={activeCard === name}
                          bigCard={showAllReports}
                          description={description}
                        />
                      );
                    })}
                </>
              )}
              {Boolean(reports?.length) && <BlankData />}
            </InnerSlideWrap>
            </RightInnerWrap>
          </ReportsRightWrap>
        </ReportsWrap>
      </RightWrap>
    </>
  );
};

export default RightWrapPage;
