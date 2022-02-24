import React from "react";
import Accordion from "../../../accordion/accordion";
import Filter from "../../../cardFilter/Filter";

import {
  RightWrap,
  CardHeader,
  ImgBox,
  CardTitle,
  ReportsWrap,
  ReportsLeftWrap,
  ReportsRightWrap
} from "./styles";

const RightWrapPage = () => {
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
          <Accordion title="Select Country" />
          <Accordion title="Select Region" />
          <Accordion title="Segment" />
          <Accordion title="Resource type" />
          <Accordion title="Year" />
          <Accordion title="Generation source" />
        </ReportsLeftWrap>
        <ReportsRightWrap>
          <Filter />
          <Filter />
          <Filter />
          <Filter />
        </ReportsRightWrap>
      </ReportsWrap>
    </RightWrap>
  );
};

export default RightWrapPage;
