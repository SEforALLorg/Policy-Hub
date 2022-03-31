import React, { useState } from "react";
import RightWrapPage from "components/dashboard/rightWrap";

const ALLReports = () => {
  const [selectInputs, setSelectInputs] = useState({
    countries: [],
    regions: [],
    segments: [],
    document_types: [],
    years: [],
    generation_sources: [],
    co_authors: [],
    publishing_organizations: [],
  });
  const onResetFilter = () => {
    setSelectInputs({
      countries: [],
      regions: [],
      segments: [],
      document_types: [],
      years: [],
      generation_sources: [],
      co_authors: [],
      publishing_organizations: [],
    });
  };
  return (
    <div className="all-reports">
      <div className="all-reports-header">
        <h4 className="font-bold text-[45px] uppercase mb-[0px] text-text">
          Browse all resources
        </h4>
        <p className="font-normal text-[25px] m-0 text-lighttext">
          Explore our resource database{" "}
        </p>
      </div>
      <RightWrapPage
        showAllReports
        selectInputs={selectInputs}
        setSelectInputs={setSelectInputs}
        onResetFilter={onResetFilter}
      />
    </div>
  );
};

export default ALLReports;
