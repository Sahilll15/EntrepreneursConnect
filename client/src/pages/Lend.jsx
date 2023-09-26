import React, { useState } from "react";

const Lend = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
    <div className="text-center text-sm  md:text-xs lg:text-xl">Want to Raise funds ? Use Entrepreneurs Connect platform to scale your startup, 
    <button className="bg-blue-500 ml-3 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded" onClick={() => setShowModal(true)} style={{display:"inline"}}> APPLY NOW ! </button>
    {showModal && (
      <div className="modal fixed inset-0 z-50 flex p-2  items-center justify-center">
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="bg-white p-2 rounded-lg shadow-lg z-10 w-1/2 " style={{ maxHeight: '800px', overflowY: 'auto', top: '80%' }}>
         <h2 className="text-xl  text-center mb-2">Request A fundraiser!</h2>
         
         <form >
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="groupName"
                  id="GrpName"
                  
                  className="block py-2.5 px-0 w-full  text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute left-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  REASON FOR FUNDRAISING
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="bio"
                  id="floating_text"
                  
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_text"
                  className="peer-focus:font-medium absolute text-sm left-0 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  AMOUNT
                </label>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mr-2"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </form>
          
        </div>
      </div>
    )}
    </div>

    <div className="flex justify-center bg-white h-screen dark:bg-gray-800">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
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

        
        </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Lend;
