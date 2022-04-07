import React, { useState } from "react";
import { useMutation } from "react-query";

import { ErrorNotify, SuccessNotify } from "components/notification";
import { postNewsletters } from "../../pages/api/reports";
import NewsletterSubscribe from "../newsletterForm";

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
      <h5 className="font-bold text-[30px] text-center capitalize text-text process-text">
        Process completed!
      </h5>
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
      <p className="font-normal text-[14px] text-center text-text mt-[30px] share-your-text">
        Share your contact information for future updates.
      </p>
      <div className="flex items-center justify-center inputFullWrap">
      <NewsletterSubscribe newsletterCheckbox={true} />
      </div>
    </div>
  );
};

export default CompletedSteps;
