import React from "react";

const Lend = () => {
  return (
    <div className="flex justify-center bg-white dark:bg-gray-800">
      <div className="w-full md:w-2/3 lg:w-2/4 mt-9">
        <section className="bg-white dark:bg-gray-800">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
              alt="dashboard image"
            />
            <img
              className="w-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Let's create a community and ideas that brings us together.
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Entrepreneur Connect helps you connect with friends and
                communities of people who share your interests. Connecting with
                your Professional as well as discovering new entrepreneurs is
                easy with features like Communtiy.
              </p>
              <p className="text-white">
                Lets Donate and help new entrepreneurs make their empire{" "}
              </p>
            </div>
          </div>
        </section>

        <div>
          <center>
            <p className="text-white">This will appear in grid format</p>
          </center>
          <br/>
        </div>
        <section>
          <div>
            <div className="shadow-lg rounded-xl w-72 md:w-96 p-4 bg-white relative overflow-hidden">
              <div className="flex items-center border-b-2 mb-2 py-2">
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  alt="User avatar"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                />
                <div className="pl-3">
                  <div className="font-medium">Entrepreneur Name here</div>
                  <div className="text-gray-600 text-sm">Comapny name here</div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-gray-800 text-sm font-medium mb-2">
                  Working On:
                </p>
                <p className="text-gray-800 text-xl font-medium mb-2">
                  Improve infrastructure of company and make new factories
                </p>
                <p className="text-blue-600 text-xs font-medium mb-2">
                  Due: 10 november 2023
                </p>
              </div>
              <div className="flex items-center justify-between my-2">
                <p className="text-gray-400 text-sm">4000/6000 Recieved</p>
              </div>

              <div className="w-full h-2 bg-blue-200 rounded-full">
                <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
              </div>
              <center>
              <button className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Donate 
              </button>
              </center>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Lend;
