import { Menu, styled } from "@mui/material";
import { NavFigure } from "./Navbar.styled";

export const MobileNavContainer = styled("nav")(({ theme, isMobile }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
  "@media (min-width: 992px)": {
    display: isMobile?"flex":"none",
  }
}));

export const FirstDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 0",
}));

export const MobileNavFigure = styled(NavFigure)(({ theme }) => ({}));

export const IconsDiv = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",

  // "span.MuiBadge-badge": {
  //   border: "1px solid #000",
  //   borderRadius: "50%",
  // },

  "& > span > span": {
    border: "1px solid #000",
    borderRadius: "50%",
  },
}));

export const SecondDiv = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",

  "& input": {
    border: "none",
    outline: "none",
    backgroundColor: "#EFEFEF",
    width: "100%",
    borderRadius: "0.625rem",
    height: "2rem",
    padding: "1.5rem",
    position: "relative",
    textIndent: "1.5rem", // 24px
    fontSize: " 1rem",

    "&::placeholder": {
      fontSize: " 1rem",
      fontStyle: " normal",
      fontWeight: " 400",
      lineHeight: " 1.375rem",
    },
  },

  "& svg": {
    position: "absolute",
    left: "1rem",
    top: "48%",
    transform: "translateY(-50%)",
    fontSize: "1.5rem",
    fill: theme.palette.grayColor,
  },
}));

export const MenuList = styled(Menu)(({ theme }) => ({
  "& ul": {
    display: "flex",
    flexDirection: "column",
    "& a":{
      color: "#000",
    },
    "& li": {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
}));
