import React, { useState } from "react";
import RightWrapPage from "components/dashboard/rightWrap";
import { useTranslation } from "react-i18next";

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
    sector:[],
    fuel:[],
  });
  const [isClearAll, setClearAll] = useState(false);
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
      sector:[],
      fuel:[],
    });
    setClearAll(!isClearAll);
  };
  const { t } = useTranslation();
  return (
    <div className="all-reports">
      <div className="all-reports-header">
        <h4 className="font-bold text-[45px] uppercase mb-[0px] text-text center-content">
          {t("BrowseResource")}
        </h4>
        <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-2 mt-[10px] center-content">
          {t("ExploreOurDatabase")}
        </p>
      </div>
      <RightWrapPage
        showAllReports
        selectInputs={selectInputs}
        setSelectInputs={setSelectInputs}
        onResetFilter={onResetFilter}
        setClearAll={setClearAll}
        isClearAll={isClearAll}
      />
    </div>
  );
};

export default ALLReports;
