import React, { useState } from "react";

const ChatHeader = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isNewChatPopupVisible, setIsNewChatPopupVisible] = useState(false);
  const [isImportantMsgPopupVisible, setIsImportantMsgPopupVisible] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const openNewChatPopup = () => {
    setIsNewChatPopupVisible(true);
  };

  const closeNewChatPopup = () => {
    setIsNewChatPopupVisible(false);
  };

  const openImportantMsgPopup = () => {
    setIsImportantMsgPopupVisible(true);
  };

  const closeImportantMsgPopup = () => {
    setIsImportantMsgPopupVisible(false);
  };

  const handleSave = () => {
    // Add your logic here to save the form data
    closeForm();
  };

  const handleCancel = () => {
    closeForm();
  };

  return (
    <div className="relative">
      <div className="mx-auto bg-white shadow-md rounded-md p-4 mt-9">
        <h1 className="text-xl font-semibold mb-4">Chat Options</h1>
        <div className="flex space-x-4">
          {/* New Chat Option */}
          <a
            href="#"
            className="flex-1 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
            onClick={openNewChatPopup}
          >
            New Chat
          </a>
          {/* New Group Option */}
          <button
            className="flex-1 bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 transition duration-300"
            onClick={openForm}
          >
            Create Community
          </button>
          {/* Important Messages Option */}
          <a
            href="#"
            className="flex-1 bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 transition duration-300"
            onClick={openImportantMsgPopup}
          >
            Important Messages
          </a>
        </div>
      </div>

      {isNewChatPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="mx-auto p-4 bg-white shadow-md rounded-md">
            {/* New Chat Pop-up content */}
            <h2 className="text-lg font-semibold mb-4">New Chat Pop-up</h2>
            <p>This is the New Chat pop-up content.</p>
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mr-2"
              onClick={closeNewChatPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center w-full bg-black bg-opacity-50 z-50">
          <div className="mx-auto p-4 bg-white shadow-md rounded-md w-4/5">
            {/* Create Group Form content */}
            <h2 className="text-lg font-semibold mb-4">Create Community</h2>




            <form>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_text"
                id="GrpName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                GROUP NAME
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_text"
                id="floating_text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_text"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                BIO
              </label>
              <div class="mb-6">
                <br/>
                <div>
                  <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Type username to add" />
                  <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">User found</span> </p>
                </div>
              </div>
            </div>
           
          </form>





            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isImportantMsgPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="mx-auto p-4 bg-white shadow-md rounded-md">
            {/* Important Messages Pop-up content */}
            <h2 className="text-lg font-semibold mb-4">Important Messages Pop-up</h2>
            <p>This is the Important Messages pop-up content.</p>
            <button
              className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600"
              onClick={closeImportantMsgPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
