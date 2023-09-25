import React from "react";

const EditProfileSkeleton = () => {
  return (
    <div>
      <div className="h-full mt-9">
        <div className="border-b-2 block md:flex">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            

            <div className="w-full p-8 mx-2 flex justify-center">
              <div className="max-w-xs w-32 h-32 bg-gray-300 animate-pulse"></div>
            </div>

            <span className="text-gray-600">Your Bio</span>

            <div className="my-4">
              <div className="w-full p-4 border rounded-lg h-20 bg-gray-300 animate-pulse"></div>
            </div>
            <div>
              
            </div>
          </div>
          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div className="rounded shadow p-6">
              <form>
                <div className="pb-6">
                  <label
                    htmlFor="username"
                    className="font-semibold text-gray-700 block pb-1 w-32 h-6 bg-gray-300 animate-pulse"
                  >
                    Name
                  </label>
                  <div className="flex">
                    <div className="border-1 text-slate-400 rounded-r px-4 py-2 w-full bg-gray-300 animate-pulse"></div>
                  </div>
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-700 block pb-1 w-32 h-6 bg-gray-300 animate-pulse"
                  >
                    Email
                  </label>
                  <div className="border-1 text-slate-400 rounded-r px-4 py-2 w-full bg-gray-300 animate-pulse"></div>
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="Company"
                    className="font-semibold text-gray-700 block pb-1 w-32 h-6 bg-gray-300 animate-pulse"
                  >
                    Company Name
                  </label>
                  <div className="border-1 text-slate-400 rounded-r px-4 py-2 w-full bg-gray-300 animate-pulse"></div>
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="Place"
                    className="font-semibold text-gray-700 block pb-1 w-32 h-6 bg-gray-300 animate-pulse"
                  >
                    Place
                  </label>
                  <div className="border-1 text-slate-400 rounded-r px-4 py-2 w-full bg-gray-300 animate-pulse"></div>
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    className="inline-block bg-green-500 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    SAVE CHANGES
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileSkeleton;
