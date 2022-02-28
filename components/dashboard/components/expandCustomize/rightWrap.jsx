import React, { useState } from "react";
import { useQuery } from 'react-query'
import {
  getCountries,
  getGenerationSources,
  getYears,
  getRegions,
  getSegments,
  getDocumentTypes
} from "pages/api/filter";
import { getReports } from "pages/api/reports";
import Accordion from "../../../accordion/accordion";
import Filter from "../../../cards/component/filtercard/Filter";
import { ErrorNotify } from 'components/notification'

import {
  RightWrap,
  CardHeader,
  ImgBox,
  CardTitle,
  ReportsWrap,
  ReportsLeftWrap,
  ReportsRightWrap,
  InnerSlideWrap,
} from "./styles";
import { getFormattedData } from "utilities";


const RightWrapPage = ({ reports, isNext }) => {
  const left = 447 * isNext;
  const [isOpen, setIsOpen] = useState("");

  const {
    data: countriesData,
  } = useQuery(['getCountries'], getCountries, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    }
  })

  const {
    data: generationSourcesData,
  } = useQuery(['getGenerationSources'], getGenerationSources, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    }
  })

  const {
    data: yearsData,
  } = useQuery(['getYears'], getYears, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    }
  })

  const {
    data: regionsData,
  } = useQuery(['getRegions'], getRegions, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    }
  })

  const {
    data: segmentsData,
  } = useQuery(['getSegments'], getSegments, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    }
  })

  const {
    data: documentTypesData,
  } = useQuery(['getDocumentTypes'], getDocumentTypes, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    }
  })

  const {
    data: allReports,
  } = useQuery(['getReports'], getReports, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    }
  })

  console.log(allReports, 'allReports');

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
          {reports?.map((item, index) => (
            <InnerSlideWrap style={{ marginLeft: index === 0 ? -left : "" }} key={index}>
              {
                allReports?.data?.data?.map((i) => {
                  const name = i.attributes.ReportName
                  const year = i?.attributes?.AddFilters?.years?.data[0]?.attributes?.year
                  return (
                    <Filter
                      countryname={"USA"}
                      area={"North America "}
                      item={" IRENA"}
                      date={year}
                      file={"static/images/USAflag.svg"}
                      title={name}
                    />
                  )
                })
              }
            </InnerSlideWrap>
          ))}
        </ReportsRightWrap>
      </ReportsWrap>
    </RightWrap>
  );
};

export default RightWrapPage;
