import React, { useEffect } from "react";
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
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".public-share-modal")) {
        toggle();
      }
    };
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [toggle]);

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
        <div
          className="fixed inset-0 bg-black/[0.6] bg-opacity-60 transition-opacity z-[-1]"
          aria-hidden="true"
          onClick={toggle}
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="email-modal relative flex items-center h-full w-full bg-white mobile:min-w-[600px] mobile:min-h-[350px] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full public-share-modal">
          <div className="bg-white mobile:p-5 laptop:p-8 py-4 px-3 w-full h-full">
            <h2 className="text-center mb-10 font-bold mobile:text-medium text-tiny uppercase textColor">{t("shareAttachments")}</h2>
            <MdClose
              size={30}
              className="absolute right-[8px] top-[8px] cursor-pointer w-10 p-1 h-10 rounded-full text-gray-400 hover:bg-[#ececec82]"
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
                className="ml-auto mr-auto flex justify-center rounded-full mobileMax:w-full tab:!w-[200px] px-10 h-[40px] font-bold xsm:w-full 
              hover:border-2 hover:border-[#bdbcbc] ease-linear transition-all shadow-sm px-4 py-2 text-small leading-normal font-medium !bg-[#bdbcbc]
                text-text hover:!bg-white focus:outline-none sm:mt-0 items-center"
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
