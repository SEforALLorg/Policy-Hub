import React, { useState } from "react";
import Accordion from "components/accordion/accordion";
import Report from "components/cards/component/filtercard/Filter";

import { getFormattedData } from "utilities";

import {
  RightWrap,
  CardHeader,
  ImgBox,
  CardTitle,
  ReportsWrap,
  ReportsLeftWrap,
  ReportsRightWrap,
  InnerSlideWrap,
  Nodata
} from "./styles";
import Loader from "components/loader";

const RightWrapPage = ({
  countriesData,
  regionsData,
  segmentsData,
  documentTypesData,
  yearsData,
  generationSourcesData,
  allReports,
  publicationReports,
  nonPublicationReports,
  isFetchingReports
}) => {
  const [isOpen, setIsOpen] = useState("");
  const [selectCountry, setSelectCountry] = useState([]);

  const onCountryChange = (e) => {
    const revisedCountryList = [...selectCountry]
    const alreadyPresent =  revisedCountryList.includes(e?.target?.id.toString());
    const targetIndex = revisedCountryList.indexOf(e?.target?.id);
    if(alreadyPresent){
      revisedCountryList.splice(targetIndex, 1);
      console.log(revisedCountryList, 'revisedCountryList',targetIndex)
      return setSelectCountry(revisedCountryList);
    }
    setSelectCountry([e?.target?.id, ...selectCountry])
  }
  
  return (
    <RightWrap>
      <CardHeader style={{ justifyContent: "center" }}>
        <ImgBox>
          <img src="static/images/greenFile.svg" alt="card" />
        </ImgBox>
        <CardTitle>Resources that match your input</CardTitle>
      </CardHeader>
      <ReportsWrap>
        <ReportsLeftWrap>
          <Accordion
            title="Select Country"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(countriesData?.data?.data)}
            onChange={(e) => onCountryChange(e)}
            selected={selectCountry}
          />
          <Accordion
            title="Select Region"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(regionsData?.data?.data)}
          />
          <Accordion
            title="Segment"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(segmentsData?.data?.data)}
          />
          <Accordion
            title="Resource type"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(documentTypesData?.data?.data)}
          />
          <Accordion
            title="Year"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(yearsData?.data?.data)}
          />
          <Accordion
            title="Generation source"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={getFormattedData(generationSourcesData?.data?.data)}
          />
        </ReportsLeftWrap>

        <ReportsRightWrap>
          <InnerSlideWrap>
            {isFetchingReports ? <Loader /> : !publicationReports?.length && !nonPublicationReports?.length ? <Nodata>
              No Reports Found
            </Nodata> : allReports?.data?.data?.map((i, index) => {
              const name = i.attributes.ReportName;
              const year =
                i?.attributes?.AddFilters?.years?.data[0]?.attributes?.Year;
              const country =
                i?.attributes?.AddFilters?.countries?.data[0]?.attributes
                  ?.CountryName;
              const area =
                i?.attributes?.AddFilters?.regions?.data[0]?.attributes
                  ?.RegionName;
              const publishingOrganizations =
                i?.attributes?.AddFilters?.publishing_organizations?.data[0]
                  ?.attributes?.PublishingOrganization;
              return (
                <Report
                  countryName={country || "USA"}
                  area={area || "North America "}
                  item={publishingOrganizations || "IRENA"}
                  date={year || "2018"}
                  file={"static/images/USAflag.svg"}
                  title={name}
                  key={index}
                  star={index > 1}
                />
              );
            })}
          </InnerSlideWrap>
        </ReportsRightWrap>
      </ReportsWrap>
    </RightWrap>
  );
};

export default RightWrapPage;
