import { useState } from "react";
import { useMutation } from "react-query";

import Input from "../input";
import Loader from 'components/loader'
import PrimaryButton from "components/buttons/primarybutton";
import { ErrorNotify, SuccessNotify } from "../notification";
import { sendReports } from "../../pages/api/reports";

const ShareAttachment = ({
  submitForm,
  allReports,
  selectedFilters,
  showAllReports,
  searchTerm,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  const handleFormSubmit = () => {
    const body = {
      data: {
        Name: name,
        Email: email,
        reports: showAllReports ? null : allReports?.map((i) => i?.id),
        searchTerm : searchTerm || '',
        filters: selectedFilters,
      },
    };
    mutate(body);
  };

  return (
    <>
      <div className="newsletter-input-fields w-full flex justify-center align-end flex-col m-auto xsm:px-4 xsm:py-0 extrasmall:p-6 laptop:p-0">
        <Input
          field={"Name"}
          placeholder={"Enter your name"}
          className="bg-white filterShadow rounded-lg border-none 
                           outline-none xsm:p-2 small:p-3 mobile:p-3 laptop:p-4  h-[50px] xsm:text-xsmall small:text-small text-lighttext font-normal leader-5 xsm:w-full small:w-72 mobile:w-72 laptop:w-72 "
          onChange={(e) => setName(e?.target?.value)}
          value={name}
        />
        <Input
          field={"E-mail"}
          placeholder={"Enter your E-mail"}
          className="bg-white filterShadow rounded-lg border-none 
                           outline-none xsm:p-2 small:p-3 mobile:p-3 laptop:p-4  h-[50px] xsm:text-xsmall small:text-small text-lighttext font-normal leader-5 xsm:w-full small:w-72 mobile:w-72 laptop:w-72 "
          onChange={(e) => setEmail(e?.target?.value)}
          value={email}
        />

        <div className="mt-2.5 xsm:text-center  small:ml-auto mobile:ml-auto laptop:ml-auto text-white">
          <PrimaryButton
            title={isLoading ? <Loader /> : "submit"}
            className={`bg-Primary xsm:w-full extrasmall:w-52 small:w-72 laptop:w-72 rounded-full h-[50px] text-center font-bold text-small leading-5 uppercase  hover:text-Primary outline-none no-underline no-underline
                    border-2 border-transparent duration-500 hover:bg-white hover:border-2 hover:border-Primary ease-linear transition-all`}
            disabled={!name || !email}
            onClick={() => handleFormSubmit()}
            style={{
              opacity: !name || !email ? 0.5 : 1,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ShareAttachment;
