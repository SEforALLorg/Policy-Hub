import React, { useState } from "react";
import RightWrapPage from "components/dashboard/rightWrap";
import { useTranslation } from "react-i18next";
import Link from "next/link";

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
      <div className="all-reports-header relative">
        <h4 className="font-bold text-[45px] uppercase mb-[0px] text-text center-content">
          {t("BrowseResource")}
        </h4>
        <Link href='/resources'>
          <svg
            aria-hidden="true"
            className="header-common-closeIcon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
        <p className="not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-2 mt-[10px] center-content">
          {t("ExploreOurDatabase")}
        </p>
      </div>
      <RightWrapPage
        browseResource = {true}
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
