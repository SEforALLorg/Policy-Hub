import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import StartButton from "components/buttons/startButton";

import OtherToolsCard from "./components/otherTools";
import { useTranslation } from "react-i18next";
import { filterResources } from "../../pages/api/resources";
import { ErrorNotify } from "components/notification";
import { getResourcesQuery } from "../../utilities";
import Loader from "../loader";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const Feature = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState();
  const [query, setQuery] = useState();
  const [filterType, setFilterType] = useState("");
  const [expanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };
  const { data: filteredCards, refetch } = useQuery(
    ["filterResources", query],
    () => filterResources(query),
    {
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );
  const setData = () => {
    const mainData = filteredCards?.data?.data;
    const filterData =
      mainData?.filter((item) => item?.id === 12 || item?.id === 11) || [];
    const finalIds = filterData?.map((item) => item?.id);
    const finalData =
      mainData
        ?.filter((item) => !finalIds?.includes(item?.id))
        .sort((a, b) =>
          a?.attributes?.Title?.localeCompare(b?.attributes?.Title)
        ) || [];
    return [...filterData, ...finalData];
  };

  const allResources = setData();

  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query]);

  const filterData = (type) => {
    const query = getResourcesQuery(type?.id);
    setQuery(query);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLang(localStorage.getItem("lang"));
    }
  }, []);

  const dropDownData = [
    {
      label: t("AllPlatforms"),
      id: "",
    },
    {
      label: "Electricity Access",
      id: 1,
    },
    {
      label: "Clean Cooking",
      id: 2,
    },
    {
      label: "Energy Efficency",
      id: 3,
    },
    {
      label: "Sustainable Cooling",
      id: 4,
    },
  ];
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="bg-white drop-shadow-dropShadow feature-wrap p-[2.5rem] all_platform_table pb-[0px]">
        <div className="xsm:px-4 mobile:px-[0px] relative">
          <div className="flex pb-[0px] my-0 w-full xsm:flex-wrap large:flex-nowrap resources-card">
            <div className="w-full">
              <h3
                className="font-bold text-[35px] leading-10 mb-[20px] text-darktext 
                            uppercase center-content resources-heading"
              >
                {t("Resources")}
              </h3>
              <p className="center-content not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-3 text-justify">
                {t("AllOfTheKnowledge")} <b>{t("Downloadthefiltered")}</b>
                {t("Havethem")}
                <b>{t("ViaEmail")}</b>
              </p>
              <p className="center-content not-italic font-normal xsm:text-xsmall small:text-tiny xsm:leading-4 small:leading-[25.3px] xsm:leading-[15.3px] xsm:leading-[22.3px] laptop:leading-[25.3px] text-lighttext mb-base mb-2 mt-[10px] text-justify">
                {t("ExploreOurDatabase")}
              </p>
            </div>
          </div>
          <div className="text-center mt-4 resources-button">
            <StartButton
              title={t("BrowseResource")}
              onClick={() => window.open(`/${lang}/allresources`, "_self")}
              className={`medium:pt-[20px] mt-[20px]`}
            />
          </div>
        </div>
      </div>
      <div className="pt-[35px] pb-[60px] bg-white tools-wrap px-[2.5rem] all_platform_table mt-[-1px]">
        <div className="xsm:px-4 mobile:px-[0px] resources-cards-wrap">
          <div>
            <div className="flex items-center justify-between mt-[28px] mb-[20px] headerContainer">
              <h2
                className="font-bold leading-10 text-[35px] text-darktext 
              uppercase m-[0px] video-title center-content"
              >
                {t("OtherUsefulPlatforms")}
              </h2>
              <UncontrolledDropdown
                setActiveFromChild
                className={`bg-Primary cursor-pointer rounded-[60px] text-normal border-2 border-transparent outline-0 text-Primary py-[3px] px-2 xsm:text-xsmall laptop:text-xsmall ${"hover:bg-Primary hover:text-white ease-linear"} card-tool-button allBtn`}
              >
                <DropdownToggle
                  style={{ color: "white" }}
                  className="DropdownToggle flex justify-between items-center no-underline"
                  tag="a"
                  role="button"
                  caret
                  aria-expanded={expanded}
                  onClick={toggleDropdown}
                >
                  <p
                    style={{ marginBottom: "0" }}
                    className="text-normal text-Primary xsm:text-xsmall laptop:text-xsmall rounded-[60px] text-normal border-2 border-transparent outline-0 py-[0px] px-[0px] ease-linear transition-all duration-500 mb-[5px] mr-[5px] card-tool-button"
                  >
                    {t(filterType?.replace(' ', '')) || t("AllPlatforms")}
                  </p>
                </DropdownToggle>
                <DropdownMenu style={{ marginRight: -8, marginTop: 7 }}>
                  {dropDownData?.map((resource, index) => {
                    const isActive = resource?.label === t(filterType);
                    return (
                      <DropdownItem
                        onClick={() => {
                          filterData({
                            id: resource?.id,
                          });
                          setFilterType(resource?.label);
                        }}
                        key={resource?.label}
                        style={{
                          backgroundColor: isActive
                            ? "var(--theme-secondary)"
                            : "",
                          color: isActive ? "#fff" : "",
                        }}
                      >
                        {t(resource?.label?.replace(' ', ''))}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="cardWrap">
              {allResources?.length ? (
                allResources?.map((resource) => {
                  return (
                    <OtherToolsCard
                      filterData={(e) => {
                        setFilterType(
                          dropDownData?.find((item) => item?.id === e?.id)
                            ?.label
                        );
                        filterData(e);
                      }}
                      resourceType={resource?.attributes?.resources?.data}
                      title={resource?.attributes?.Title}
                      link={resource?.attributes?.Link}
                      description={resource?.attributes?.Description}
                      key={resource?.attributes?.Title}
                    />
                  );
                })
              ) : (
                <div className="flex items-center flex-col h-full w-full justify-center">
                  <Loader height={80} width={80} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
