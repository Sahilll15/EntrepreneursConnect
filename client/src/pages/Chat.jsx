import React from "react";
import RecentChat from "../components/Chat/RecentChat";
import Options from "../components/Chat/ChatHeader";

const Chat = () => {
  return (
    <div className="flex-grow bg-gray-100">
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-3/5"> 
          <Options />
          <RecentChat />
        </div>
      </div>
    </div>
  );
};

export default Chat;
