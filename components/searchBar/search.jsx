import React from "react";
import { useTranslation } from "react-i18next";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({ onChange, value }) => {
  const {t} = useTranslation();
  return (
    <div className='mb-[16px] '>
      <div className="search-input-wrap">
        <input
          className="pt-[2px]"
          type="text"
          value={value}
          placeholder={t("Search")}
          onChange={onChange}
        />
        <div className="absolute top-[14px] right-[20px]">
          <RiSearch2Line color="#13A2BC" size={20} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
