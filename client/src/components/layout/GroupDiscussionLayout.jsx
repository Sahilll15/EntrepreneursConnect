
import React from "react";


const GroupDiscussionLayout = ({ children }) => {
  return (
    <div className="flex justify-center p-2 bg-gray-200">
      <div className="md:w-2/3 md:ml-40 w-full">
        {children}
      </div>
    </div>
  );
};

export default GroupDiscussionLayout;