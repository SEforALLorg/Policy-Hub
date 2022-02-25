import React, { useState } from "react";
import Filter from "../../components/cards/component/filtercard/Filter";
import { availableOptions } from "../../constant/options";
import Accordion from "../accordion/accordion";
import SearchBar from "../searchBar/search";
import {
  Full,
  Header,
  Heading,
  SubHeading,
  ReportWrap,
  Cards,
  Inner,
  FilterCard,
  BorderWrap,
  Border,
} from "./styles";
const ResouceStep = () => {
  const list = [
    {
      label: "Select Country",
      options: availableOptions.country,
      showLine: true,
    },
    {
      label: "Select Region",
      options: availableOptions.region,
      showLine: true,
    },
    { label: "Segment", options: availableOptions.segment, showLine: false },
    {
      label: "Resource type",
      options: availableOptions.resource,
      showLine: false,
    },
    { label: "year", options: availableOptions.year, showLine: false },
    {
      label: "Generation source",
      options: availableOptions.source,
      showLine: false,
    },
    {
      label: "Publishing Organization",
      options: availableOptions.organization,
      showLine: false,
    },
    { label: "Co-Authors", options: availableOptions.authors, showLine: false },
  ];
  const [isOpen, setIsOpen] = useState("");
  return (
    <Full>
      <Header>
        <Heading>Browse all resources</Heading>
        <SubHeading>Explore our resource database </SubHeading>
      </Header>
      <Inner>
        <ReportWrap>
          <Cards>
            <SearchBar />
            {list.map((item) => {
              return (
                <Accordion
                  title={item.label}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  options={item.options}
                />
              );
            })}
          </Cards>
          <FilterCard>
            <Filter
              style={{ height: 66, width: 66 }}
              mainImg={"static/images/videoicon.svg"}
              title={
                "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
              }
              file={"static/images/USAflag.svg"}
              countryname={"USA"}
              area={"North America "}
              item={" IRENA"}
              date={"2017"}
            />
            <Filter
              style={{ height: 66, width: 66 }}
              mainImg={"static/images/greenfile.svg"}
              title={
                "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
              }
              file={"static/images/USAflag.svg"}
              countryname={"USA"}
              area={"North America "}
              item={" IRENA"}
              date={"2017"}
            />
            <BorderWrap>
              <Border></Border>
              <Border></Border>
            </BorderWrap>
            <Filter
              style={{ height: 66, width: 66 }}
              mainImg={"static/images/yellowfile.svg"}
              title={
                "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
              }
              file={"static/images/USAflag.svg"}
              countryname={"USA"}
              area={"North America "}
              item={" IRENA"}
              date={"2017"}
            />
          </FilterCard>
        </ReportWrap>
      </Inner>
    </Full>
  );
};

export default ResouceStep;
