import { NavLink, useNavigate, Link } from "react-router-dom";
import { Search, PersonOutline } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ReactComponent as Shop } from "../assets/store-icon.svg";
import {
  LinksContainer,
  NavFigure,
  StyledIcons,
  StyledLinks,
  StyledNav,
} from "./Navbar.styled";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <StyledNav>
        <NavFigure onClick={() => navigate("/")}>
          <Shop />
          <figcaption>ShopMe</figcaption>
        </NavFigure>
        <LinksContainer>
          <StyledLinks>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/story"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                Our Story
              </NavLink>
            </li>
          </StyledLinks>
          <StyledIcons>
            <li
              style={{
                display: "flex",
              }}
            >
              <div className={showInput ? "show input" : "input"}>
                <input type="text" placeholder="Search" />
              </div>

              {
                <div
                  onClick={() => setShowInput((prev) => !prev)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Search />
                </div>
              }
            </li>
            <li>
              <Link to="#">
                <PersonOutline />
              </Link>
            </li>
            <li>
              <Link to="#">
                <ShoppingCartOutlinedIcon />
              </Link>
            </li>
          </StyledIcons>
        </LinksContainer>
      </StyledNav>
      <MobileNav />
    </>
  );
};

export default Navbar;
