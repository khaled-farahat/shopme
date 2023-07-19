import React from "react";
import { ReactComponent as Shop } from "../assets/store-icon.svg";
import {
  FirstDiv,
  SecondDiv,
  IconsDiv,
  MobileNavContainer,
  MobileNavFigure,
  MenuList,
} from "./MobileNav.styled";
import { Link, useNavigate } from "react-router-dom";
import { Badge, MenuItem } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Menu, Search } from "@mui/icons-material";

const MobileNav = ({isMobile}) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MobileNavContainer isMobile={isMobile}>
      <FirstDiv>
        <MobileNavFigure onClick={() => navigate("/")}>
          <Shop />
          <figcaption>ShopMe</figcaption>
        </MobileNavFigure>
        <IconsDiv>
          <Badge badgeContent={4}>
            <ShoppingCartOutlinedIcon />
          </Badge>
          <Menu onClick={handleClick} />
          <MenuList
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="#">Account</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/shop">Shop</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/blogs">Blog</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="#">Our Story</Link>
            </MenuItem>
          </MenuList>
        </IconsDiv>
      </FirstDiv>
      <SecondDiv>
        <input type="text" placeholder="Search" />
        <Search sx={{ position: "absolute" }} />
      </SecondDiv>
    </MobileNavContainer>
  );
};

export default MobileNav;
