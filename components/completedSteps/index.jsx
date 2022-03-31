import React, { useState } from "react";
import { useMutation } from "react-query";

import { ErrorNotify, SuccessNotify } from "components/notification";
import { postNewsletters } from "../../pages/api/reports";
import PrimaryButton from "components/buttons/primarybutton";
import Checkbox from "components/checkbox";

const CompletedSteps = ({ onRestart }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const { mutate } = useMutation(["postNewsletters"], postNewsletters, {
    onError: (error) => {
      ErrorNotify(error.response.data.error.message);
    },
    onSuccess: (e) => {
      setName("");
      setEmail("");
      SuccessNotify("Your info has been submitted successfully");
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
    <div className="completeWrap">
      <h5 className="font-bold text-[30px] text-center capitalize text-text">
        Process completed!
      </h5>
      <p className="font-normal text-[14px] text-center text-text">
        The following reports match your specific case.{" "}
      </p>
      <div className="flex items-center justify-center">
        <div className="restartWrap" onClick={onRestart}>
          <img src="static/images/restart.svg" alt="" />
          <p>Restart</p>
        </div>
        <div
          className="restartWrap"
          onClick={() => window.open("/allresources", "_self")}
        >
          <img src="static/images/file.svg" alt="" />
          <p>View all resources</p>
        </div>
      </div>
      <p className="font-normal text-[14px] text-center text-text mt-[30px]">
        Share your contact information for future updates.
      </p>
      <div className="flex items-center justify-center inputFullWrap">
        <div className="inputWrap">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e?.target?.value)}
            value={name}
          />
        </div>
        <div className="inputWrap">
          <p>E-mail</p>
          <input
            type="text"
            placeholder="Enter your E-mail"
            onChange={(e) => setEmail(e?.target?.value)}
            value={email}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-[20px]">
        <Checkbox label="Subscribe to our Newsletter" />
      </div>
      <div
        className="complete-buttonWrap"
        style={{ opacity: !name || !email ? 0.4 : 1 }}
      >
        <PrimaryButton
          title="Submit"
          onClick={() => onSubmit()}
          disabled={!name || !email}
          className="bg-Primary xsm:w-full extrasmall:w-52 small:w-72 laptop:w-72 rounded-full h-[50px] text-center font-normal text-small leading-5 uppercase  text-white outline-none no-underline no-underline
                    border-2 border-transparent duration-500 hover:text-Primary hover:bg-Primary hover:border-2 hover:border-Primary ease-linear transition-all"
        />
      </div>
    </div>
  );
};

export default CompletedSteps;
