import React from "react";

const RecentChat = () => {
  return (
    <div className="h-screen w-full mr-9">
      

      <div className="max-w-screen mx-auto flex space-x-4">
        {/* Recent Chats Section (Left Side) */}
        <div className="w-1/3 h-full bg-white shadow-md rounded-md p-4  mt-4">
          <h1 className="text-xl font-semibold mb-9">Recent Chats</h1>
          <div className="space-y-4">
            {/* Chat Messages (Replace with your data) */}
            <div className="border p-3 rounded-lg shadow-md ">
              <div className="flex items-center space-x-2">
                <img
                  src="user1.jpg"
                  alt="User 1"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">Aditya</span>
              </div>
              <p className="text-gray-700 mt-2">Hello! How can I help you today?</p>
            </div>
            <div className="border p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <img
                  src="user2.jpg"
                  alt="User 2"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">Rehman</span>
              </div>
              <p className="text-gray-700 mt-2">
                I'm doing great! How about you?
              </p>
            </div>
            {/* Add more chat messages here */}
          </div>
        </div>
        {/* Conversation Section (Right Side) */}



        <div className="w-screen bg-white shadow-md rounded-md p-4 mt-4">
          <h1 className="text-xl font-semibold mb-4">
            Aditya Shah
          </h1>
          <div className="space-y-4">
            {/* Conversation Messages (Replace with your data) */}
            <div className="border p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <img
                  src="user1.jpg"
                  alt="User 1"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">Sahil</span>
              </div>
              <p className="text-gray-700 mt-2">Hi there!</p>
            </div>
            <div className="border p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <img
                  src="user2.jpg"
                  alt="User 2"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">Aditya</span>
              </div>
              <p className="text-gray-700 mt-2">
                Hello! How can I help you today?
              </p>
            </div>
            {/* Add more conversation messages here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentChat;
