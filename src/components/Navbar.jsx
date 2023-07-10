import { Link, useNavigate } from "react-router-dom";
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

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledNav>
      <NavFigure onClick={()=>navigate('/')} >
        <Shop />
        <figcaption>ShopMe</figcaption>
      </NavFigure>
      <LinksContainer>
        <StyledLinks>
          <li>
            <Link to="#" className="active">
              Shop
            </Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Our Story</Link>
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
  );
};

export default Navbar;
