import React, { useState } from "react";
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
  const left = 447 * isNext
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
          {reports?.map((item, index) => (
            <InnerSlideWrap style={{ marginLeft: index === 0 ? -left : '' }}>
              <Filter />
              <Filter />
              <Filter />
              <Filter />
            </InnerSlideWrap>
          ))}
        </ReportsRightWrap>
      </ReportsWrap>
    </RightWrap>
  );
};

export default RightWrapPage;
