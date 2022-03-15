import React, { useState } from "react";
import { useMutation } from "react-query";

import { ErrorNotify, SuccessNotify } from "components/notification";
import { postNewsletters } from "../../pages/api/reports";
import PrimaryButton from "../buttons/component/primaryBtn/primarybutton";
import Checkbox from "../checkbox";
import {
  Wrapper,
  Restart,
  Title,
  Description,
  FlexContainer,
  InputWrap,
  ButtonWrap,
} from "./styles";

const CompletedSteps = ({ onRestart }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const { data, mutate } = useMutation(["postNewsletters"], postNewsletters, {
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
    <Wrapper>
      <Title>Process completed!</Title>
      <Description>
        The following reports match your specific case.{" "}
      </Description>
      <FlexContainer>
        <Restart onClick={onRestart}>
          <img src="static/images/restart.svg" alt="" />
          <p>Restart</p>
        </Restart>
        <Restart onClick={() => window.open("/resources", "_self")}>
          <img src="static/images/file.svg" alt="" />
          <p>View all resources</p>
        </Restart>
      </FlexContainer>
      <Description style={{ marginTop: 30 }}>
        Share your contact information for future updates.
      </Description>
      <FlexContainer>
        <InputWrap>
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e?.target?.value)}
            value={name}
          />
        </InputWrap>
        <InputWrap>
          <p>E-mail</p>
          <input
            type="text"
            placeholder="Enter your E-mail"
            onChange={(e) => setEmail(e?.target?.value)}
            value={email}
          />
        </InputWrap>
      </FlexContainer>
      <FlexContainer style={{ marginTop: 20 }}>
        <Checkbox label="Subscribe to our Newsletter" />
      </FlexContainer>
      <ButtonWrap disabled={!name || !email}>
        <PrimaryButton
          title="Submit"
          onClick={() => onSubmit()}
          disabled={!name || !email}
          className="bg-Primary xsm:w-full extrasmall:w-52 small:w-72 laptop:w-72 rounded-full h-[50px] text-center font-normal text-small leading-5 uppercase  text-white outline-none no-underline no-underline
                    border-2 border-transparent duration-500 hover:text-Primary hover:bg-Primary hover:border-2 hover:border-Primary ease-linear transition-all"
        />
      </ButtonWrap>
    </Wrapper>
  );
};

export default CompletedSteps;
