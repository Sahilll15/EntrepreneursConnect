import React from "react";
import EditProfile from "../../components/Profile/EditProfile";
import NewsLetter from "../../components/Profile/NewsLetter";
import ResetPwd from "../../components/Profile/ResetPwd";
import MainLayout from "../../components/layout/MainLayout";
import BoostPageLayout from "../../components/layout/BoostPageLayout";

const Setting = () => {
  return (
    <div>
      <BoostPageLayout>
        <div className="p-2">
          <EditProfile />
          <NewsLetter />
          <ResetPwd />
        </div>
      </BoostPageLayout>
    </div>
  );
};

export default Setting;
