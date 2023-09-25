import React from "react";
import EditProfile from "../../components/Profile/EditProfile";
import NewsLetter from "../../components/Profile/NewsLetter";
import ResetPwd from "../../components/Profile/ResetPwd";
import MainLayout from "../../components/layout/MainLayout";
import BoostPageLayout from "../../components/layout/BoostPageLayout";
import ReferralTokenGenerator from "../../components/Profile/ReferralTokenGenerator";

const Setting = () => {
  return (
    <div>
      <BoostPageLayout>
        <div className="p-2">
          <EditProfile />
          <ReferralTokenGenerator />
          <ResetPwd />
          <NewsLetter />
        </div>
      </BoostPageLayout>
    </div>
  );
};

export default Setting;
