import React from "react";
import { Link } from "react-router-dom";
import { EmailDiv, FirstDiv, SecondDiv, StyledFooter } from "./Footer.styled";
import {
  ArrowRightAlt,
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <FirstDiv>
        <ul>
          <li><Link to='/contact'>Contacts</Link></li>
          <li>terms of services</li>
          <li>shipping and returns</li>
        </ul>
        <EmailDiv>
          <input type="email" placeholder="Give an email get the newsletter" />
          <span>
            <ArrowRightAlt />
          </span>
        </EmailDiv>
      </FirstDiv>
      <SecondDiv>
        <p>
        © {currentYear} ShopME. <span>Terms of use</span> and <span>privacy policy.</span>
        </p>
        <ul>
          <li>
            <LinkedIn />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </SecondDiv>
    </StyledFooter>
  );
};

export default Footer;
