import React from "react";
import Sidebar from '../../components/layout/Sidebar'
import EditProfile from "../../components/Profile/EditProfile";
import NewsLetter from "../../components/Profile/NewsLetter";
import ResetPwd from "../../components/Profile/ResetPwd";
import MainLayout from "../../components/layout/MainLayout";

const Setting = () => {
  return (
    <div>
      <MainLayout>
      <EditProfile />
        <NewsLetter />
        <ResetPwd />
      </MainLayout>

    
    
     
    </div>
  );
};

export default Setting;
