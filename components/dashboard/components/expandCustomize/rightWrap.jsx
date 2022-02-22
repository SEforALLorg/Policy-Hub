import React from "react";
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
} from "./styles";

const RightWrapPage = () => {
  return (
    <RightWrap>
      <CardHeader style={{ justifyContent: "center" }}>
        <ImgBox>
          <img src="static/images/greenFile.svg" alt="card" />
        </ImgBox>
        <CardTitle>Resources that match your input.</CardTitle>
      </CardHeader>
      <ReportsWrap>
        <ReportsLeftWrap>
          <Accordion title="Select Country" />
          <Accordion title="Select Region" />
          <Accordion title="Segment" />
          <Accordion title="Resource type" />
          <Accordion title="Year" />
          <Accordion title="Generation source" />
        </ReportsLeftWrap>
        <ReportsRightWrap>
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
        </ReportsRightWrap>
      </ReportsWrap>
    </RightWrap>
  );
};

export default RightWrapPage;
