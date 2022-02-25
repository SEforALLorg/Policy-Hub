import React, { useState } from "react";
import { availableOptions } from "../../../../constant/options";
import Accordion from "../../../accordion/accordion";
import Filter from "../../../cards/component/filtercard/Filter";

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

const RightWrapPage = ({ reports, isNext }) => {
  const left = 447 * isNext;
  const [isOpen, setIsOpen] = useState("");
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
            options={availableOptions.country}
          />
          <Accordion
            title="Select Region"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={availableOptions.region}
          />
          <Accordion
            title="Segment"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={availableOptions.segment}
          />
          <Accordion
            title="Resource type"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={availableOptions.resource}
          />
          <Accordion
            title="Year"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={availableOptions.year}
          />
          <Accordion
            title="Generation source"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            options={availableOptions.source}
          />
        </ReportsLeftWrap>
        <ReportsRightWrap>
          {reports?.map((item, index) => (
            <InnerSlideWrap style={{ marginLeft: index === 0 ? -left : "" }}>
              <Filter
                countryname={"USA"}
                area={"North America "}
                item={" IRENA"}
                date={"2017"}
                file={"static/images/USAflag.svg"}
                title={
                  "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
                }
              />
              <Filter
                countryname={"USA"}
                area={"North America "}
                item={" IRENA"}
                date={"2017"}
                file={"static/images/USAflag.svg"}
                title={
                  "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
                }
              />
              <Filter
                countryname={"USA"}
                area={"North America "}
                item={" IRENA"}
                date={"2017"}
                file={"static/images/USAflag.svg"}
                title={
                  "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
                }
              />
              <Filter
                countryname={"USA"}
                area={"North America "}
                item={" IRENA"}
                date={"2017"}
                file={"static/images/USAflag.svg"}
                title={
                  "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
                }
              />
              <Filter
                countryname={"USA"}
                area={"North America "}
                item={" IRENA"}
                date={"2017"}
                file={"static/images/USAflag.svg"}
                title={
                  "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
                }
              />
              <Filter
                countryname={"USA"}
                area={"North America "}
                item={" IRENA"}
                date={"2017"}
                file={"static/images/USAflag.svg"}
                title={
                  "A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"
                }
              />
            </InnerSlideWrap>
          ))}
        </ReportsRightWrap>
      </ReportsWrap>
    </RightWrap>
  );
};

export default RightWrapPage;
