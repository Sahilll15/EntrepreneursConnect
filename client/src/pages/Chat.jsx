import React from "react";
import RecentChat from "../components/Chat/RecentChat";
import Options from "../components/Chat/options";

const Chat = () => {
  return (
    <div>
      <div className="flex justify-center bg-gray-800">
        <div className="w-full md:w-2/3 lg:w-2/3 bg-gray-800">
            <Options />
          <RecentChat />
        </div>
      </div>
    </div>
  );
};

export default Chat;
