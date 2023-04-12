import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BsSliders } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { getFormattedData, getReportQuery } from "utilities";
import useDebounce from "utilities/useDebounce";
import { ErrorNotify } from "components/notification";
import Select from "components/select";
import SearchBar from "components/searchBar/search";
import { getReports } from "pages/api/reports";
import { getFilters } from "pages/api/filter";
import { isSelectedInput } from "../../utilities";
import BlueButton from "../buttons/blueButton";
import { useTranslation } from "react-i18next";

const MobileFilters = ({
  publicationReports = [],
  nonPublicationReports = [],
  setSelectInputs,
  selectInputs,
  showAllReports,
  onResetFilter,
  setClearAll,
  isClearAll,
  isResetPage,
  isClear,
}) => {
  const [isOpen, setIsOpen] = useState("");
  const [search, setSearch] = useState(undefined);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [previousReports, setPreviousReports] = useState([]);
  const [isScrollLoader, setIsScrollLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [resourceType, setResourceType] = useState();
  const debouncedSearch = useDebounce(search, 500);
  const [sectorOption, setSectorOption] = useState([]);

  typeof window !== "undefined" &&
    window.addEventListener(
      "orientationchange",
      function () {
        // Announce the new orientation number
        if (window?.orientation === 90) {
          setIsFilter(false);
        }
      },
      false
    );

  // Get Filters API
  const { data: filtersData } = useQuery(["getFilters"], getFilters, {
    onError: (error) => {
      ErrorNotify(error?.response?.data?.error?.message);
    },
  });

  // All Filters
  let filters = {};
  if (filtersData?.data?.results) {
    filters = filtersData?.data?.results;
  }

  let query;
  // Get Reports API
  const onApply = () => {
    setIsFilter(!isFilter);
    setIsOpen("");
    query = getReportQuery(
      selectInputs,
      nonPublicationReports,
      publicationReports,
      page,
      debouncedSearch,
      showAllReports
    );
    refetch();
  };

  const {
    data: allReports,
    isFetching: isFetchingReports,
    refetch,
  } = useQuery(["getReports", query], () => getReports(query), {
    onError: (error) => {
      ErrorNotify(error?.response?.data?.error?.message);
    },
  });

  // Filter onChange
  const onChange = (e) => {
    setPage(1);
    setPreviousReports([]);
    const obj = { ...selectInputs };
    const revisedCountryList = obj[e.target.name];
    const alreadyPresent = revisedCountryList?.includes(
      e?.target?.id.toString()
    );
    const targetIndex = revisedCountryList?.indexOf(e?.target?.id);
    if (alreadyPresent) {
      revisedCountryList.splice(targetIndex, 1);
      obj[e.target.name] = revisedCountryList;
      return setSelectInputs(obj);
    }

    obj[e.target.name] = [...obj[e.target.name], e?.target?.id];
    setSelectInputs(obj);
  };

  useEffect(() => {
    if (optionSelected && page === 1) {
      setPreviousReports(allReports?.data?.data);
      typeof window !== "undefined" && window.scrollTo(0, 0);
    } else if (allReports?.data?.data?.length) {
      setPreviousReports([...allReports?.data?.data, ...previousReports]);
      typeof window !== "undefined" && window.scrollTo(0, 0);
    } else if (!isScrollLoader && !allReports?.data?.data?.length) {
      setPreviousReports([]);
    }
    setResourceType(localStorage.getItem("ResourceType"));
  }, [allReports, typeof window !== "undefined" && window]);

  const onSearch = (e) => {
    setSearch(e);
    setIsScrollLoader(false);
  };

  const onReset = () => {
    setClearAll(!isClearAll);
    onResetFilter();
    setPreviousReports([]);
    setIsOpen("");
    setSearch("");
  };

  const optionSelected = isSelectedInput(selectInputs);

  useEffect(() => {
    if (debouncedSearch?.length) {
      setPage(1);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    setPage(1);
  }, [isResetPage]);

  useEffect(() => {
    if (localStorage.getItem("ResourceType") === "SUSTAINABLE COOLING") {
      const sectorSustainable = filters?.sector?.filter((key) => {
        if (
          key?.Sector === "Agricultural cold chains" ||
          key?.Sector === "Healthcare and medical cold chains" ||
          key?.Sector === "Thermal comfort and safety"
        ) {
          return key;
        }
      });
      setSectorOption(sectorSustainable);
    } else if (localStorage.getItem("ResourceType") === "ENERGY EFFICIENCY") {
      const sectorEnergy = filters?.sector?.filter((key) => {
        if (
          key?.Sector !== "Agricultural cold chains" &&
          key?.Sector !== "Healthcare and medical cold chains" &&
          key?.Sector !== "Thermal comfort and safety"
        ) {
          return key;
        }
      });
      setSectorOption(sectorEnergy);
    }
  }, [filters]);

  useEffect(() => {
    onReset();
    query = getReportQuery(
      selectInputs,
      nonPublicationReports,
      publicationReports,
      page,
      debouncedSearch,
      showAllReports
    );
    refetch();
    setSearch("");
  }, [isClear]);
  const { t, i18n } = useTranslation();

  return (
    <>
      {isOpen ? (
        <div className="rightOverlay" onClick={() => setIsOpen("")} />
      ) : null}
      <div className={"right-wrap"}>
        <div className="flex mt-[30px] reports-inner-section">
          <div
            className="font-bold text-[16px] text-text pb-[10px] pl-[2px] tracking-[1px] flex mobile-show filter-button"
            onClick={() => setIsFilter(!isFilter)}
          >
            <BsSliders className="text-text mr-[5px]" />
            Filter
          </div>
          {isFilter && (
            <div
              className={"mobile-overlay mobile-show"}
              onClick={() => {
                setIsFilter(!isFilter);
                setIsOpen("");
              }}
            />
          )}
          <div
            className={`${
              isFilter
                ? "transform-filter-animation-show"
                : "transform-filter-animation-hide"
            } report-left-wrap relative w-[30%] mr-[16px] pl-[7px] pr-[7px]`}
            style={{ display: "block" }}
          >
            <h5 className="font-bold text-[16px] m-0 text-text pb-[15px] pl-[2px] tracking-[1px] flex justify-between textColor">
              Filters
              {optionSelected ? (
                <button
                  className={`bg-Secondary rounded-[69px] pl-[10px] pr-[10px] leading-5 text-center
      text-xsmall h-[30px] border-0	text-white outline-0	no-underline font-medium mt-[-6px] pt-[0px] resources-button button-animation mobile-hidden clear-filter-button`}
                  onClick={() => onReset()}
                >
                  Clear filters
                </button>
              ) : null}
              <IoClose
                className="text-text mr-[5px] mobile-show close-icon"
                onClick={() => setIsFilter(!isFilter)}
                style={{ top: 14 }}
              />
            </h5>
            <div className="innerFilter">
              {showAllReports && (
                <SearchBar
                  onChange={(e) => onSearch(e?.target?.value)}
                  value={search}
                />
              )}
              <Select
                title={t("SelectRegion")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.region)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.regions}
                name={"regions"}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title={t("SelectCountry")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.countries)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.countries}
                name={"countries"}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title={t("Segment")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.segment)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.segments}
                name={"segments"}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title={t("ResourceType")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.documentType)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.document_types}
                name={"document_types"}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              <Select
                title={t("Year")}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                options={getFormattedData(filters?.year)}
                onChange={(e) => onChange(e)}
                selected={selectInputs?.years}
                name={"years"}
                top={true}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
                isClearAll={isClearAll}
              />
              {resourceType && resourceType === "ELECTRICITY ACCESS" && (
                <Select
                  title={t("GenerationSource")}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  options={getFormattedData(filters?.generationSources)}
                  onChange={(e) => onChange(e)}
                  selected={selectInputs?.generation_sources}
                  name={"generation_sources"}
                  top={true}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  isClearAll={isClearAll}
                />
              )}
              {(resourceType === "SUSTAINABLE COOLING" ||
                resourceType === "ENERGY EFFICIENCY") && (
                <Select
                  title={`${
                    resourceType === "SUSTAINABLE COOLING"
                      ? t("CoolingSector")
                      : t("EnergyEfficiencySector")
                  }`}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  options={getFormattedData(sectorOption)}
                  onChange={(e) => onChange(e)}
                  selected={selectInputs?.sector}
                  name={"sector"}
                  top={true}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  isClearAll={isClearAll}
                />
              )}
              {resourceType === "CLEAN COOKING" && (
                <Select
                  title={t("Fuel")}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  options={getFormattedData(filters?.fuel)}
                  onChange={(e) => onChange(e)}
                  selected={selectInputs?.fuel}
                  name={"fuel"}
                  top={true}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                  isClearAll={isClearAll}
                />
              )}
              <div className="apply-wrap">
                <button
                  type="button"
                  onClick={() => {
                    if (optionSelected) {
                      onReset();
                    }
                  }}
                  className="mr-auto flex justify-center rounded-full h-[50px] xsm:w-full extrasmall:w-52 
                small:w-72 laptop:w-72 border border-gray-300 shadow-sm px-4 py-2 bg-white text-small font-medium 
                text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 items-center"
                >
                  {t("ClearFilters")}
                </button>
                <button
                  type="button"
                  onClick={() => onApply()}
                  className="mr-auto flex justify-center rounded-full h-[50px] xsm:w-full extrasmall:w-52 
                small:w-72 laptop:w-72 border border-gray-300 shadow-sm px-4 py-2 text-small font-medium BtnColor
                text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 items-center"
                >
                  {t("Apply")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFilters;
