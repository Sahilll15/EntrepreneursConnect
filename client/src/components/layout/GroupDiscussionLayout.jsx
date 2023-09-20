import React from 'react';

const GroupDiscussionLayout = ({ children }) => {
  return (
    <div className="flex justify-center p-2">
      <div className="w-full md:w-2/3 lg:w-full/2 ml-20">
        {children}
      </div>
    </div>
  );
};
export default GroupDiscussionLayout;
