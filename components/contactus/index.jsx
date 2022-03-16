import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useMutation } from "react-query";
import { MdEmail } from "react-icons/md";
import Address from "../cards/component/addressCard";
import { ErrorNotify, SuccessNotify } from "components/notification";
import Checkbox from "../checkbox/index";
import Form from "../form";
import PrimaryButton from "../buttons/component/primaryBtn/primarybutton";
import { postNewsletters } from "../../pages/api/reports";

const ContactBox = () => {
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
    <div className="bg-white rounded-lg	 overflow-hidden shadow-md">
      <div className="xsm:pl-[25px] xsm:py-6 extrasmall:p-6 mobile:p-6 laptop:p-10 bg-white flex justify-center xsm:justify-start small:justify-center xsm:flex-wrap extrasmall:flex-nowrap">
        <div className="flex items-center xsm:w-full laptop:w-2/5 xsm:justify-start 	">
          <FaPhoneAlt className="xsm:text-xmd laptop:text-basic text-Primary mr-4" />
          <div>
            <p className="font-normal small:tiny  laptop:text-medium leading-[26px]  text-lighttext m-0">
              Phone:
            </p>
            <p className="font-bold  xsm:text-xsmall laptop:text-[25px]  leading-[26px] text-darktext m-0">
              +43 676 846 727 200
            </p>
          </div>
        </div>
        <div className="flex items-center xsm:w-full laptop:w-2/5 xsm:justify-start  xsm:mt-5 extrasmall:mt-0">
          <MdEmail className="text-basic text-Primary mr-4" />
          <div>
            <p className="font-normal small:tiny  laptop:text-medium  leading-[26px]  text-lighttext m-0">
              Email:
            </p>
            <p className="font-bold xsm:text-xsmall laptop:text-[25px]  leading-[26px] text-darktext m-0">
              Info@SEforALL.org
            </p>
          </div>
        </div>
      </div>
      <div className="bg-lightBg pt-4 pb-10 m-auto">
        <div className="flex m-auto justify-between w-4/5 xsm:flex-wrap laptop:flex-nowrap">
          <Address
            className={"bg-white p-4 w-full	rounded-lg m-[5px] cursor-pointer addressCard transition-all duration-200"}
            heading={"Vienna Office"}
            title={
              <>
                Andromeda Tower 15th floor <br />
                Donau City Strasse 6<br />
                1220, Vienna Austria
              </>
            }
          />
          <Address
            className={"bg-white p-4 w-full	rounded-lg m-[5px] cursor-pointer addressCard transition-all duration-200"}
            heading={"Washington, DC Office"}
            title={
              <>
                1750 Pennsylvania Avenue NW <br />
                Suite 300 <br />
                Washington, DC 20006 USA
              </>
            }
          />
          <Address
            className={"bg-white p-4 w-full	rounded-lg m-[5px] cursor-pointer addressCard transition-all duration-200"}
            heading={"New York Office"}
            title={"420 5th Ave New York, NY 10018 USA"}
          />
        </div>
      </div>
      <div className="flex items-end xsm:justify-center small:justify-center laptop:justify-between xsm:px-2 small:px-5 mobile:px-[60] laptop:px-[60px] py-4 xsm:flex-wrap laptop:flex-nowrap">
        <div className="  xsm:w-11/12 large:w-full ">
          <p className="text-lighttext font-normal xsm:text-xsmall small:text-small xsm:leading-5 small:leading-6  m-0">
            For any media requests, please contact:{" "}
            <span
              className="text-darktext font-bold underline cursor-pointer text-Primary"
              onClick={() => window.open("mailto:Media@SEforALL.org")}
            >
              Media@SEforALL.org
            </span>
          </p>
          <p className="laptop:pt-10 laptop:pb-[60px] xsm:pt-3 xsm:pb-6 text-lighttext font-normal xsm:text-xsmall small:text-small xsm:leading-5 small:leading-6  m-0">
            Keep up-to-speed with what's happening at SEforALL and across the
            sustainable energy movement. We'll send you our monthly update, plus
            special news and event invites.
          </p>
          <div className="mb-[22px]">
            <Checkbox label={"Subscribe to our Newsletter"} />
          </div>
        </div>
        <div className="w-full flex justify-center align-end flex-col m-auto xsm:px-4 xsm:py-0 extrasmall:p-6 laptop:p-0">
          <Form
            field={"Name"}
            placeholder={"Enter your name"}
            className="bg-white filterShadow rounded-lg border-none 
                           outline-none xsm:p-2 small:p-3 mobile:p-3 laptop:p-4  h-[50px] xsm:text-xsmall small:text-small text-lighttext font-normal leader-5 xsm:w-full small:w-72 mobile:w-72 laptop:w-72 "
            onChange={(e) => setName(e?.target?.value)}
            value={name}
          />
          <Form
            field={"E-mail"}
            placeholder={"Enter your email"}
            className="bg-white filterShadow rounded-lg border-none 
                           outline-none xsm:p-2 small:p-3 mobile:p-3 laptop:p-4  h-[50px] xsm:text-xsmall small:text-small text-lighttext font-normal leader-5 xsm:w-full small:w-72 mobile:w-72 laptop:w-72 "
            onChange={(e) => setEmail(e?.target?.value)}
            value={email}
          />
          <div className="mt-2.5 xsm:text-center  small:ml-auto mobile:ml-auto laptop:ml-auto text-white">
            <PrimaryButton
              title={"submit"}
              className={`bg-Primary xsm:w-full extrasmall:w-52 small:w-72 laptop:w-72 rounded-full h-[50px] text-center font-bold text-small leading-5 uppercase  hover:text-Primary outline-none no-underline no-underline
                    border-2 border-transparent duration-500 hover:bg-white hover:border-2 hover:border-Primary ease-linear transition-all`}
              disabled={!name || !email}
              onClick={() => onSubmit()}
              style={{
                opacity: !name || !email ? 0.5 : 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
