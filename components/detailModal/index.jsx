import { omit } from "lodash";
import React, { useState } from "react";
import { Flags } from "../../constant/flags";

const DetailModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formInput, setFormInput] = useState({});
  const [errors, setErrors] = useState({});
  // const [danger, setDanger] = useState(false);

  const onSubmitHandler = (event) => {
    if (event) event.preventDefault();
    if (
      Object.keys(errors).length === 0 &&
      Object.keys(formInput).length !== 0
    ) {
      alert("sumbitted");
      setIsOpen(false);
    } else {
      alert("There is an Error!");
    }
  };

  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;
    validate(event, name, val);
    setFormInput({
      ...formInput,
      [name]: val,
    });
  };
  const validate = (event, name, value) => {
    switch (name) {
      case "FirstName":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            FirstName: "FirstName atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "FirstName");
          setErrors(newObj);
        }
        break;
      case "LastName":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            LastName: "LastName atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "LastName");
          setErrors(newObj);
        }
        break;
      case "Email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            Email: "Enter a valid Email Address",
          });
        } else {
          let newObj = omit(errors, "Email");
          setErrors(newObj);
        }
      default:
        break;
    }
  };

  return (
    <>
      {/* <!-- Main modal --> */}
      {isOpen && (
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-md z-50 p-4 w-full md:inset-0 h-modal md:h-full flex items-center justify-center"
        >
          <div className="relative w-full rounded-lg max-w-2xl h-3/4">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full overflow-y-auto ">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-start p-3 rounded-t">
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                  Enter Details
                </h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white "
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
              </div>
              {/* <!-- Modal body --> */}
              <form className="w-full pl-4 pr-4">
                <div>
                  <label
                    className="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${errors.FirstName && "border-red-900"}`}
                    id="inline-first-name"
                    name="FirstName"
                    type="text"
                    onChange={handleChange}
                  />
                  {errors.FirstName && <h3>{errors.FirstName}</h3>}
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${errors.LastName && "border-red-900"}`}
                    id="inline-last-name"
                    name="LastName"
                    type="text"
                    onChange={handleChange}
                  />
                  {errors.LastName && <h3>{errors.LastName}</h3>}
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-email"
                  >
                    Email
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${errors.Email && "border-red-900"}`}
                    id="inline-email"
                    type="email"
                    name="Email"
                    onChange={handleChange}
                  />
                  {errors.Email && <h3>{errors.Email}</h3>}
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-phone-number"
                  >
                    Phone Number
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${errors.PhoneNumber && "border-red-900"}`}
                    id="inline-phone-number"
                    type="number"
                    name="PhoneNumber"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-job-title"
                  >
                    Job Title
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${errors.JobTitle && "border-red-900"}`}
                    id="inline-job-title"
                    type="text"
                    name="JobTitle"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-organization"
                  >
                    Organization
                  </label>
                  <input
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${errors.Organization && "border-red-900"}`}
                    id="inline-organization"
                    type="text"
                    name="Organization"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-country"
                  >
                    Country
                  </label>
                  {/* <input
                    className="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 "
                    id="inline-country"
                    type="text"
                    name="Country"
                    onChange={handleChange}
                  /> */}
                  <select
                    className={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 ${errors.Country && "border-red-900"}`}
                    id="inline-country"
                    name="Country"
                    onChange={handleChange}
                  >
                  {
                    Flags.map((key)=>{console.log()
                      return (
                        <option value={key.code}>{key.name}{ key.emoji }</option>
                      )
                    })
                  }
                  </select>
                </div>
              </form>
              {/* <!-- Modal footer --> */}
              <div className="flex justify-center p-6 space-x-2 rounded-b">
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  onClick={onSubmitHandler}
                  className="bg-Secondary text-white bg-[#f7b602] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                {/* <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;
