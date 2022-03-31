import { useState, useEffect } from "react";
import { decode } from "html-entities";
import { useMutation } from "react-query";

import Input from "../input";
import PrimaryButton from "components/buttons/primarybutton";
import Loader from "../loader";
import Checkbox from "../checkbox";
import { ErrorNotify, SuccessNotify } from "../notification";
import { postNewsletters } from "../../pages/api/reports";

const NewsletterForm = ({
  status,
  message,
  onValidated,
  newsletterCheckbox,
  submitForm,
}) => {
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isCheck, setIsCheck] = useState(true);

  const { mutate } = useMutation(["postNewsletters"], postNewsletters, {
    onError: (error) => {
      //   ErrorNotify(error.response.data.error.message);
    },
    onSuccess: (e) => {
      setName("");
      setEmail("");
      if (!isCheck) {
        SuccessNotify("Your info has been submitted successfully");
        submitForm();
      }
    },
  });

  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const payload = {
      data: {
        Name: name,
        Email: email,
      },
    };
    mutate(payload);

    if (!isCheck) return;

    const isFormValidated = onValidated({ EMAIL: email, FNAME: name });

    // On success return true
    return name && email && email.indexOf("@") > -1 && isFormValidated;
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  useEffect(() => {
    if (status === "success" && status !== "error" && !error) {
      SuccessNotify(decode(message));
      submitForm();
    } else {
      ErrorNotify(error || getMessage(message));
    }
  }, [status]);

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
        {newsletterCheckbox && (
          <div className="flex items-center justify-end mt-[20px]">
            <Checkbox
              label="Subscribe to our Newsletter"
              checked={isCheck}
              onClick={() => setIsCheck(!isCheck)}
            />
          </div>
        )}

        <div className="mt-2.5 xsm:text-center  small:ml-auto mobile:ml-auto laptop:ml-auto text-white">
          <PrimaryButton
            title={status === "sending" ? <Loader /> : "submit"}
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

export default NewsletterForm;
