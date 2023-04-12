import React from "react";
import { useTranslation } from "react-i18next";
import { MdClose } from "react-icons/md";
import ShareAttachment from "../shareAttachment";

const SharePublicationModal = ({
  toggle,
  allReports,
  selectedFilters,
  showAllReports,
  searchTerm,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
        <div
          className="fixed inset-0 bg-gray bg-opacity-60 transition-opacity z-[-1]"
          aria-hidden="true"
          onClick={toggle}
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full public-share-modal">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <MdClose
              size={30}
              className="absolute right-[15px] top-[15px] cursor-pointer"
              color={"#bbb"}
              onClick={toggle}
            />
            <div className="flex items-center justify-between inputFullWrap">
              <ShareAttachment
                submitForm={() => toggle()}
                allReports={allReports}
                selectedFilters={selectedFilters}
                showAllReports={showAllReports}
                searchTerm={searchTerm}
              />
            </div>
            <div className="complete-buttonWrap">
              <button
                type="button"
                onClick={toggle}
                className="ml-auto mr-auto flex justify-center rounded-full h-[50px] xsm:w-full extrasmall:w-52 
                small:w-72 laptop:w-72 border border-gray-300 shadow-sm px-4 py-2 bg-white text-small font-medium 
                text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 items-center"
              >
                {t("Cancel")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePublicationModal;
