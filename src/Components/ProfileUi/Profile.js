import React from "react";
import UserInfo from "./UserInfoUi/UserInfo";
import ProfileNav from "./profileNavUi/ProfileNav";
import Content from "./ContentUI/Content";

const Profile = () => {

  return (
    <div>
      <UserInfo />
      <ProfileNav />
      <Content />
    </div>
  );
}

export default Profile;