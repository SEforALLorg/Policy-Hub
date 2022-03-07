import React, { useState } from "react";
import RightWrapPage from "../dashboard/components/expandCustomize/rightWrap";
import { Full, Header, Heading, SubHeading } from "./styles";

const ALLReports = () => {
  const [selectInputs, setSelectInputs] = useState({
    countries: [],
    regions: [],
    segments: [],
    document_types: [],
    years: [],
    generation_sources: [],
  });
  return (
    <Full>
      <Header>
        <Heading>Browse all resources</Heading>
        <SubHeading>Explore our resource database </SubHeading>
      </Header>
      <RightWrapPage
        showAllReports
        selectInputs={selectInputs}
        setSelectInputs={setSelectInputs}
      />
    </Full>
  );
};

export default ALLReports;
