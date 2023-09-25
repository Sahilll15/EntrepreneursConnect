import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createCommunity,
  getCommunity,
} from "../../redux/community/CommunityAcitions";

const ChatHeader = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isNewChatPopupVisible, setIsNewChatPopupVisible] = useState(false);
  const [isImportantMsgPopupVisible, setIsImportantMsgPopupVisible] =
    useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    groupName: "",
    bio: "",
  });

  const { groupName, bio } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(formData);
    await dispatch(createCommunity(formData));
    await dispatch(getCommunity());

    closeForm();
  };

  const handleCancel = () => {
    closeForm();
  };

  return (
    <div className="relative">
      <div className="mx-auto bg-white shadow-md rounded-md p-2 mt-5">
         <h1 className="text-base font-semibold mb-4 text-center">Your Communities</h1>
        {/* <div className="flex space-x-4">
          

          <button
            className="flex-1 bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 transition duration-300"
            onClick={openForm}
          >
            Create Community
          </button>
        </div> */}
      </div>

      <div class="fixed bottom-32 right-8 z-80">
        <button
          title="Add New"
          onClick={openForm}
          class="group cursor-pointer hover:rotate-90  active:scale-100 duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70px"
            height="70px"
            viewBox="0 0 24 24"
            class="stroke-slate-200 fill-blue-800 group-active:fill-blue-600 duration-200"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke-width=""
            ></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>
        </button>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center w-full bg-black bg-opacity-50 z-50">
          <div className="mx-auto p-4 bg-white shadow-md rounded-md w-4/5">
            <h2 className="text-lg font-semibold mb-4">Create Community</h2>

            <form onSubmit={handleSave}>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="groupName"
                  id="GrpName"
                  value={groupName}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  peer"
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
                  name="bio"
                  id="floating_text"
                  value={bio}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none  peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_text"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  BIO
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
                onClick={handleCancel}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default ChatHeader;
