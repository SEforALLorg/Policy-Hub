import { useState } from "react";
import { useMutation } from "react-query";

import Input from "../input";
import Loader from "components/loader";
import PrimaryButton from "components/buttons/primarybutton";
import { ErrorNotify, SuccessNotify } from "../notification";
import { sendReports } from "../../pages/api/reports";
import { useTranslation } from "react-i18next";

const ShareAttachment = ({
  submitForm,
  allReports,
  selectedFilters,
  showAllReports,
  searchTerm,
}) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
  });

  let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  const { mutate, isLoading } = useMutation(["sendReports"], sendReports, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
    onSuccess: (e) => {
      if (e?.data?.result?.msg) {
        SuccessNotify(e?.data?.result?.msg);
        setName("");
        setEmail("");
        submitForm();
      }
    },
  });

  const validateName = () => {
    if (!name.trim()) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      return false;
    } else {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
      return true;
    }
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return false;
    } else if (!regex.test(email)) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      return false;
    } else {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
      return true;
    }
  };

  const handleFormSubmit = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (isNameValid && isEmailValid) {
      const body = {
        data: {
          Name: name,
          Email: email,
          reports: showAllReports ? [] : allReports?.map((i) => i?.id),
          searchTerm: searchTerm || "",
          filters: selectedFilters,
        },
      };

      mutate(body);
    }
  };
  return (
    <>
      <div className="newsletter-input-fields w-full flex justify-center align-end flex-col m-auto xsm:px-4 xsm:py-0 laptop:p-0">
        <Input
          field={`${t("Name")}:`}
          placeholder={t("Enteryourname")}
          className="bg-white filterShadow rounded-lg border-none 
                           outline-none xsm:p-2 small:p-3 mobile:p-3 laptop:p-4  h-[50px] xsm:text-xsmall small:text-small text-lighttext font-normal leader-5 mobileMax:w-full mobileMax:w-72 mobile:w-72 laptop:w-72  mobile:ml-3"
          onChange={(e) => {
            setName(e.target.value);
            validateName();
          }}
          value={name}
          errorText={true}
          errorMessage={errorMessage?.name}
        />
        <Input
          field={`${t("Email")}:`}
          placeholder={t("EnteryourEmail")}
          className="bg-white filterShadow rounded-lg border-none 
                           outline-none xsm:p-2 small:p-3 mobile:p-3 mt-2 laptop:p-4  h-[50px] xsm:text-xsmall small:text-small text-lighttext font-normal leader-5 mobileMax:w-full small:w-72 mobile:w-72 laptop:w-72  mobile:ml-3"
          onChange={(e) => {
            setEmail(e.target.value);
            validateName();
          }}
          value={email}
          errorText={true}
          errorMessage={errorMessage?.email}
        />
        <div className="xsm:text-center text-white mt-10">
          <PrimaryButton
            title={isLoading ? <Loader /> : t("Submit")}
            className={`bg-Primary h-[40px] rounded-full text-center mobileMax:w-full tab:!w-[200px] px-10 font-medium text-small leading-normal hover:text-Secondary outline-none no-underline no-underline
                    border-2 border-transparent duration-500 hover:bg-white hover:border-2 hover:border-Secondary ease-linear transition-all shadow-sm`}
            onClick={() => handleFormSubmit()}
          />
        </div>
      </div>
    </>
  );
};

export default ShareAttachment;
