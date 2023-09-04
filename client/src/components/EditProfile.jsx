import React from "react";

const EditProfile = () => {
  return (
    <div>
      <div className="h-full mt-9">
        <div className="border-b-2 block md:flex">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div className="flex justify-between">
              <span className="text-xl font-semibold block">Admin Profile</span>
              <a
                href="#"
                className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
              >
                Edit
              </a>
            </div>

            <div className="w-full p-8 mx-2 flex justify-center">
              <img
                id="showImage"
                className="max-w-xs w-32 items-center border"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                alt
              />
            </div>

            <span className="text-gray-600">Your Bio</span>

            <div className="my-4">
              <textarea
                id="content"
                name="content"
                className="w-full p-4 border rounded-lg h-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Tell us About YourSelf"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                class="inline-block bg-red-500 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                DELETE ACCOUNT
              </button>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div className="rounded  shadow p-6">
              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold  text-gray-700 block pb-1"
                >
                  Name
                </label>
                <div className="flex">
                  <input
                    
                    id="username"
                    className="border-1 text-slate-400 rounded-r px-4 py-2 w-full"
                    type="text"
                    defaultValue="Jane Name"
                  />
                </div>
              </div>

              <div className="pb-4">
                <label
                  htmlFor="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Email
                </label>
                <input
                  
                  id="email"
                  className="border-1 text-slate-400 rounded-r px-4 py-2 w-full"
                  type="email"
                  defaultValue="example@example.com"
                />
              </div>

              <div className="pb-4">
                <label
                  htmlFor="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Company Name
                </label>
                <input
                  
                  id="Company"
                  className="border-1 text-slate-400 rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue="Content Stack"
                />
              </div>

              <div className="pb-4">
                <label
                  htmlFor="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Place
                </label>
                <input
                  
                  id="Company"
                  className="border-1 text-slate-400 rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue="Mumbai, India"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
