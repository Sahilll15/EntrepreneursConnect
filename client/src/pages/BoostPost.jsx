import React from "react";
import BoostPageLayout from "../components/layout/BoostPageLayout";
const BoostPage = () => {
  return (

    <BoostPageLayout >
      <div className="bg-white mt-1" >
        <section className="" >
          <div className="container px-6 py-8 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold  ">
                  Simple, transparent pricing
                </h2>
                <p className="mt-4 ">
                  Select how Powerfull you want to boost your post
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200  border-2 ml-1">
                <p className="text-lg font-medium ">
                  Recommend
                </p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $19{" "}
                  <span className="text-base font-normal ">
                    / post
                  </span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>
                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 ">
                      Post Suggestions on main page
                    </span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>
              <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg  hover:bg-gray-200 border-2 ml-1 " >
                <p className="text-lg font-medium ">
                  Base
                </p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $39{" "}
                  <span className="text-base font-normal ">
                    / Post
                  </span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>
                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 ">
                      Post Suggestions on main page
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 ">
                      One Promotional Mail
                    </span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>
              <div className="px-6 py-4 transition-colors duration-200 transform  rounded-lg hover:bg-gray-200 border-2 ml-1">
                <p className="text-lg font-medium ">Popular</p>
                <h4 className="mt-2 text-4xl font-semibold ">
                  $99{" "}
                  <span className="text-base font-normal ">
                    / Post
                  </span>
                </h4>
                <p className="mt-4 ">
                  For most businesses that want to optimaize web queries.
                </p>
                <div className="mt-8 space-y-8">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 ">
                      Multiple Promotional Posts on main page
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 ">
                      3 email Promotions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 ">
                      Featured Profile
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 ">Blue tick</span>
                  </div>
                </div>
                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div><p className="ml-9 text-red bg-red-200">First user selects a plan then modal will pop up to select a post he wants to boost</p></div>

    </BoostPageLayout>
  );
};

export default BoostPage;
