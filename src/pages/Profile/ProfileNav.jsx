import React from "react";
import { StyledList, StyledNav } from "./ProfileNav.styled";

const ProfileNav = ({ activeLink, setActiveLink }) => {
  return (
    <StyledNav>
      <StyledList>
        <li
          className={activeLink === 0 ? "active" : undefined}
          onClick={() => setActiveLink(0)}
        >
          dashboard
        </li>
        <li
          className={activeLink === 1 ? "active" : undefined}
          onClick={() => setActiveLink(1)}
        >
          orders
        </li>
        <li
          className={activeLink === 2 ? "active" : undefined}
          onClick={() => setActiveLink(2)}
        >
          downloads
        </li>
        <li
          className={activeLink === 3 ? "active" : undefined}
          onClick={() => setActiveLink(3)}
        >
          addresses
        </li>
        <li
          className={activeLink === 4 ? "active" : undefined}
          onClick={() => setActiveLink(4)}
        >
          Account Details
        </li>
        <li
          className={activeLink === 5 ? "active" : undefined}
          onClick={() => setActiveLink(5)}
        >
          logout
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default ProfileNav;
