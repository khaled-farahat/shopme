import React, { useState } from "react";
import ProfileNav from "./ProfileNav";
import MobileProfileNav from "./MobileProfileNav";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Downloads from "./Downloads";
import Addresses from "./Addresses";
import Details from "./Details";

const ProfilePage = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div>
      <ProfileNav activeLink={activeLink} setActiveLink={setActiveLink} />
      <MobileProfileNav activeLink={activeLink} setActiveLink={setActiveLink} />
      {activeLink === 0 && <Dashboard setActiveLink = {setActiveLink} />}
      {activeLink === 1 && <Orders />}
      {activeLink === 2 && <Downloads />}
      {activeLink === 3 && <Addresses />}
      {activeLink === 4 && <Details />}
    </div>
  );
};

export default ProfilePage;
