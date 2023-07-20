import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Flags } from "../../constant/flags";
import { postUserDetails } from "../../pages/api/reports";
import { userRepeated } from "../../utilities";

const DetailModal = ({ firstHit }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    FullName: "",
    Email: "",
    JobTitle: "",
    Organization: "",
  });
  const [errors, setErrors] = useState();
  const [danger, setDanger] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState();
  const [expanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const UserModal = localStorage.getItem("UserModal");
    if (UserModal === null) {
      setIsOpen(true);
    } else if (UserModal) {
      setIsOpen(false);
    }
  }, []);

  const onSubmitHandler = async (event) => {
    if (event) event.preventDefault();
    if (!buttonDisable && !loading) {
      setLoading(true);
      let ip = localStorage.getItem("ip");
      let date = new Date();
      localStorage.setItem("currentDate", date);
      let journey = {
        [date]: [firstHit],
      };
      let data = {
        ...formInput,
        Country: country?.name,
        IPAddress: ip ? ip : "",
      };
      let payload = {
        data: {
          ...data,
          Journey: journey,
        },
      };
      const response = await postUserDetails(payload);
      if (response.status === 200) {
        let count = response?.data?.data?.VisitCount;
        let userId = response?.data?.data?.id;
        localStorage.setItem("UserId", userId);
        localStorage.setItem("count", count);
        localStorage.setItem("userInfo", JSON.stringify(response?.data?.data));
        localStorage.setItem("UserModal", false);
        toast.success(t("SuccessfullySubmitted"), {
          position: toast.POSITION.TOP_CENTER,
        });
        setIsOpen(false);
        setLoading(false);
        let existingJourney = response?.data?.data?.Journey;
        if (response?.data?.data?.userExist) {
          let data = {
            data: {
              Journey: { ...existingJourney, ...journey },
              VisitCount: (count && ++count) || 1,
            },
          };
          userRepeated(data);
        }
      } else {
        toast.error(t("Error"), { position: toast.POSITION.TOP_CENTER });
      }
    } else {
      setDanger(true);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let val = event.target.value;
    const formError = validation(event, name, val);
    setErrors(formError);
    setFormInput({ ...formInput, [name]: val });
  };

  useEffect(() => {
    const result =
      formInput?.Email &&
      formInput?.FullName &&
      formInput?.JobTitle &&
      formInput?.Organization;
    if (result) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formInput]);

  return (
    <>
      <Head>
        <script defer async src="/tailwindcss.js"></script>
      </Head>
      {/* <!-- Main modal --> */}
      {isOpen && (
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          style={{ backgroundColor: "#00000080" }}
          className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-md z-50 p-4 w-full md:inset-0 h-modal md:h-full flex items-center justify-center"
        >
          <div className="relative w-full rounded-lg max-w-lg h-auto">
            {/* <!-- Modal content --> */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                localStorage.setItem("UserModal", false);
              }}
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-[50%] text-sm p-2 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white absolute top-[-12px] right-[-10px] bg-white z-10 "
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
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
              <span className="sr-only">Close modal</span>
            </button>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full w-full overflow-y-auto ">
              {/* <!-- Modal header --> */}
              <div className="p-3 rounded-t bg-white w-full">
                <h3 className="text-2xl font-semibold text-gray-700 text-cyan-800">
                  {t("UserSurvey")}
                </h3>
                <p className="w-full py-2 pb-0 px-0 text-black-700 leading-tight text-sm">
                  {t("PleaseEnterFollowingDetails")}
                  <br />
                  <b>{t("Note")}:</b> {t("YourPersonalData")}
                </p>
              </div>
              {/* <!-- Modal body --> */}
              <form className="w-full pl-4 pr-4" onSubmit={onSubmitHandler}>
                <div>
                  <label
                    className="block text-cyan-800 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-first-name"
                  >
                    {t("FullName")}
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${
                      danger && !formInput?.FirstName && "border-red-900"
                    }`}
                    id="inline-first-name"
                    name="FullName"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-cyan-800 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-email"
                  >
                    {t("Email")}
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${
                      danger && !formInput?.Email && "border-red-900"
                    }`}
                    id="inline-email"
                    type="email"
                    name="Email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-cyan-800 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-job-title"
                  >
                    {t("JobTitle")}
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${
                      danger && !formInput?.JobTitle && "border-red-900"
                    }`}
                    id="inline-job-title"
                    type="text"
                    name="JobTitle"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-cyan-800 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-organization"
                  >
                    {t("Organization")}
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${
                      danger && !formInput?.Organization && "border-red-900"
                    }`}
                    id="inline-organization"
                    type="text"
                    name="Organization"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-cyan-800 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-country"
                  >
                    {t("Country")}
                  </label>
                  <UncontrolledDropdown
                    setActiveFromChild
                    className={`country-drop-down cursor-pointer bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500`}
                  >
                    <DropdownToggle
                      style={{ color: "white" }}
                      className="flex justify-between items-center no-underline"
                      tag="a"
                      role="button"
                      caret
                      aria-expanded={expanded}
                      onClick={toggleDropdown}
                    >
                      <p
                        style={{ marginBottom: "0" }}
                        className="flex align-center text-normal text-black xsm:text-xsmall laptop:text-xsmall rounded-[60px] text-normal border-2 border-transparent outline-0 py-[0px] px-[0px] ease-linear transition-all duration-500 mb-[5px] mr-[5px] card-tool-button"
                      >
                        {country?.name || t("SelectCountry")}
                        {country?.image ? (
                          <img
                            src={country?.image}
                            alt="flag"
                            width={20}
                            height={20}
                            className="pl-[2px]"
                          />
                        ) : (
                          ""
                        )}
                      </p>
                    </DropdownToggle>
                    <DropdownMenu
                      style={{
                        marginLeft: -8,
                        marginBottom: 13,
                        width: "100%",
                        height: 300,
                        overflow: "auto",
                        left: 0,
                      }}
                    >
                      {Flags.map((key) => {
                        if (!key?.name || !key?.image) return;
                        return (
                          <DropdownItem
                            onClick={() => {
                              setCountry(key);
                            }}
                            key={key?.name}
                            className="flex align-center"
                          >
                            {key?.name}
                            {key?.image ? (
                              <img
                                src={key?.image}
                                alt="flag"
                                width={20}
                                height={20}
                                className="pl-[2px]"
                              />
                            ) : (
                              ""
                            )}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex justify-center p-6 space-x-2 rounded-b">
                  <button
                    data-modal-toggle="defaultModal"
                    type="submit"
                    disabled={buttonDisable}
                    style={{ opacity: buttonDisable && 0.7 }}
                    className="bg-Secondary text-white bg-[#f7b602] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    {t("Submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default DetailModal;
