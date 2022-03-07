import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import qs from "qs";
import { ErrorNotify } from "components/notification";
import Accordion from "components/accordion/accordion";
import Report from "components/cards/component/filtercard/Filter";
import { getReports } from "../../../../pages/api/reports";
import {
  getCountries,
  getGenerationSources,
  getYears,
  getRegions,
  getSegments,
  getDocumentTypes,
} from "pages/api/filter";

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
  const { data: countriesData } = useQuery(["getCountries"], getCountries, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: generationSourcesData } = useQuery(
    ["getGenerationSources"],
    getGenerationSources,
    {
      onError: (error) => {
        ErrorNotify(error.response.data.error.message);
      },
    }
  );

  const { data: yearsData } = useQuery(["getYears"], getYears, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: regionsData } = useQuery(["getRegions"], getRegions, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: segmentsData } = useQuery(["getSegments"], getSegments, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
  });

  const { data: documentTypesData } = useQuery(
    ["getDocumentTypes"],
    getDocumentTypes,
    {
      onError: (error) => {
        ErrorNotify(error.response.data.error.message);
      },
    }
  );
  const query = useMemo(() => {
    return qs.stringify({
      filters: {
        id: {
          $in: [...nonPublicationReports, ...publicationReports].map(
            (i) => i?.id
          ),
        },
        ReportName: {
          $eq: search,
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

  return (
    <RightWrap className={"right-wrap"}>
      {!showAllReports && (
        <CardHeader style={{ justifyContent: "center" }}>
          <ImgBox>
            <img src="static/images/greenFile.svg" alt="card" />
          </ImgBox>
          <CardTitle>Resources that match your input</CardTitle>
        </CardHeader>
      )}
      <ReportsWrap>
        <ReportsLeftWrap className={"report-left-wrap"}>
          {showAllReports && (
            <SearchBar
              onChange={(e) => onSearch(e?.target?.value)}
              value={search}
            />
          )}
          <Accordion
            title="Select Country"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(countriesData?.data?.data)}
            onChange={(e) => onChange(e)}
            selected={selectInputs?.countries}
            name={"countries"}
          />
          <Accordion
            title="Select Region"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(regionsData?.data?.data)}
            onChange={(e) => onChange(e)}
            selected={selectInputs?.regions}
            name={"regions"}
          />
          <Accordion
            title="Segment"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(segmentsData?.data?.data)}
            onChange={(e) => onChange(e)}
            selected={selectInputs?.segments}
            name={"segments"}
          />
          <Accordion
            title="Resource type"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(documentTypesData?.data?.data)}
            onChange={(e) => onChange(e)}
            selected={selectInputs?.document_types}
            name={"document_types"}
          />
          <Accordion
            title="Year"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(yearsData?.data?.data)}
            onChange={(e) => onChange(e)}
            selected={selectInputs?.years}
            name={"years"}
          />
          <Accordion
            title="Generation source"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(generationSourcesData?.data?.data)}
            onChange={(e) => onChange(e)}
            selected={selectInputs?.generation_sources}
            name={"generation_sources"}
          />
        </ReportsLeftWrap>

        <ReportsRightWrap className={"report-right-wrap"}>
          <InnerSlideWrap>
            {isFetchingReports ? (
              <Loader />
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
                      i?.attributes?.AddFilters?.countries?.data[0]?.attributes
                        ?.CountryName;
                    const area =
                      i?.attributes?.AddFilters?.regions?.data[0]?.attributes
                        ?.RegionName;
                    const publishingOrganizations =
                      i?.attributes?.AddFilters?.publishing_organizations
                        ?.data[0]?.attributes?.PublishingOrganization;
                    const url = i?.attributes?.URL;
                    const flag = Flags.find((e) => e?.name == country);

                    return (
                      <Report
                        countryName={country}
                        area={area || "North America "}
                        item={publishingOrganizations || "IRENA"}
                        date={year || "2018"}
                        file={flag?.image || "static/images/USAflag.svg"}
                        title={name}
                        key={index}
                        star={true}
                        url={url}
                        onClick={() => setActiveCard(name)}
                        isActive={activeCard === name}
                      />
                    );
                  })}
                {Boolean(finalPublicationReports[0]?.attributes?.ReportName) ? (
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
                      i?.attributes?.AddFilters?.countries?.data[0]?.attributes
                        ?.CountryName;
                    const area =
                      i?.attributes?.AddFilters?.regions?.data[0]?.attributes
                        ?.RegionName;
                    const publishingOrganizations =
                      i?.attributes?.AddFilters?.publishing_organizations
                        ?.data[0]?.attributes?.PublishingOrganization;
                    const url = i?.attributes?.URL;
                    const flag = Flags.find((e) => e?.name == country);

                    return (
                      <Report
                        countryName={country}
                        area={area || "North America "}
                        item={publishingOrganizations || "IRENA"}
                        date={year || "2018"}
                        file={flag?.image || "static/images/USAflag.svg"}
                        title={name}
                        key={index}
                        url={url}
                        onClick={() => setActiveCard(name)}
                        isActive={activeCard === name}
                      />
                    );
                  })}
              </>
            )}
          </InnerSlideWrap>
        </ReportsRightWrap>
      </ReportsWrap>
    </RightWrap>
  );
};

export default RightWrapPage;
