import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useMutation } from "react-query";
import { ErrorNotify, SuccessNotify } from "components/notification";
import { postNewsletters } from "../../pages/api/reports";
import PrimaryButton from "components/buttons/primarybutton";
import Checkbox from "components/checkbox";

const SharePublicationModal = ({ toggle }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isCheckbox, setCheckbox] = useState(true);

  const { data, mutate } = useMutation(["postNewsletters"], postNewsletters, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
    onSuccess: (e) => {
      setName("");
      setEmail("");
      SuccessNotify("Your info has been submitted successfully");
      toggle();
    },
  });

  const onSubmit = () => {
    const payload = {
      data: {
        Name: name,
        Email: email,
      },
    };
    mutate(payload);
  };
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={toggle}
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <MdClose
              size={30}
              className="absolute right-[15px] top-[15px] cursor-pointer"
              color={"#bbb"}
              onClick={toggle}
            />
            <div className="flex items-center justify-between inputFullWrap">
              <div className="inputWrap w-[100%] pr-[10px]">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-[100%]"
                  onChange={(e) => setName(e?.target?.value)}
                  value={name}
                />
              </div>
              <div className="inputWrap w-[100%]">
                <p>E-mail</p>
                <input
                  type="text"
                  placeholder="Enter your E-mail"
                  className="w-[100%]"
                  onChange={(e) => setEmail(e?.target?.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-[28px]">
              <Checkbox
                label="Subscribe to our Newsletter"
                onClick={() => setCheckbox(!isCheckbox)}
                checked={isCheckbox}
              />
            </div>
            <div className="complete-buttonWrap">
              <PrimaryButton
                title="Submit"
                onClick={() => onSubmit()}
                style={{ opacity: !name || !email ? 0.4 : 1 }}
                disabled={!name || !email}
                className="text-small bg-Primary xsm:w-full extrasmall:w-52 small:w-72 laptop:w-72 rounded-full h-[50px] text-center font-medium  leading-5  text-white outline-none no-underline no-underline
                    border-2 border-transparent duration-500 hover:text-Primary hover:bg-Primary hover:border-2 hover:border-Primary ease-linear transition-all"
              />
              <button
                type="button"
                onClick={toggle}
                className="mt-0 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-small font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePublicationModal;
