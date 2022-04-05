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
        <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-2 mt-[10px]">
          Explore our database for tools and knowledge that will support you in
          developing policy and regulatory frameworks for sustainable energy.
          These resources are recommended by stakeholders across the energy
          sector. Additional resources related to clean cooking, sustainable
          cooling and energy efficiency are coming soon.
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
