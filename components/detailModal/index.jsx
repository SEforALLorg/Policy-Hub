import React, { useState } from "react";

const DetailModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formInput, setFormInput] = useState({
    Firstname: null,
    Lastname: "",
    Email: "",
    Phonenumber: "",
    Jobtitle: "",
    Organization: "",
    Country: "",
  });
  const [formError, setFormError] = useState({
    Firstname: false,
    Lastname: false,
    Email: false,
    Phonenumber: false,
    Jobtitle: false,
    Organization: false,
    Country: false,
  });

  const validation = () => {
    if (!formInput.Firstname) {
      setFormError({ ...formError, Firstname: true });
    } else {
      setFormError({ ...formError, Firstname: false });
    }
  };
  const onSubmitHandler = (e) => {
    validation();
    setIsOpen(false);
  };

  return (
    <>
      {/* <!-- Main modal --> */}
      {isOpen && (
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-md z-50 p-4 w-full md:inset-0 h-modal md:h-full flex items-center justify-center"
        >
          <div class="relative w-full rounded-lg max-w-2xl h-3/4">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full overflow-y-auto ">
              {/* <!-- Modal header --> */}
              <div class="flex justify-between items-start p-3 rounded-t">
                <h3 class="text-2xl font-semibold text-gray-700 dark:text-white">
                  Enter Details
                </h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white "
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
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
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <form class="w-full pl-4 pr-4">
                <div>
                  <label
                    class="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 "
                    id="inline-first-name"
                    type="text"
                    onChange={(e) => {
                      setFormInput({ ...formInput, Firstname: e.target.value });
                      setFormError({ ...formError, Firstname: false });
                    }}
                  />
                  {formError.Firstname && <span>Error</span>}
                </div>
                <div>
                  <label
                    class="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 "
                    id="inline-last-name"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-email"
                  >
                    Email
                  </label>
                  <input
                    class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 "
                    id="inline-email"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    class="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-phone-number"
                  >
                    Phone Number
                  </label>
                  <input
                    class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 "
                    id="inline-phone-number"
                    type="tel"
                  />
                </div>
                <div>
                  <label
                    class="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-job-title"
                  >
                    Job Title
                  </label>
                  <input
                    class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 "
                    id="inline-job-title"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-organization"
                  >
                    Organization
                  </label>
                  <input
                    class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 "
                    id="inline-organization"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="block text-gray-700 font-medium md:text-left mb-1 md:mb-0 pr-4"
                    for="inline-country"
                  >
                    Country
                  </label>
                  <input
                    class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 mb-2 hover:border-gray-500 "
                    id="inline-country"
                    type="text"
                  />
                </div>
              </form>
              {/* <!-- Modal footer --> */}
              <div class="flex items-center p-6 space-x-2 rounded-b">
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  onClick={onSubmitHandler}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                {/* <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  onClick={() => setIsOpen(false)}
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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
