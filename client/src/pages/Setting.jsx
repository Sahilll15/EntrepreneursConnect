import React from "react";
import Sidebar from '../components/Sidebar'
import EditProfile from "../components/EditProfile";
import NewsLetter from "../components/NewsLetter";
import ResetPwd from "../components/ResetPwd";

const Setting = () => {
  return (
    <div>
        <div className="flex justify-center">
      <div className="w-full md:w-2/3 lg:w-2/4">

        <EditProfile />
        <NewsLetter />
        <ResetPwd />
      </div>
    </div>
     
    </div>
  );
};

export default Setting;
