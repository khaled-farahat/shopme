import { styled } from "@mui/material";

export const StyledNav = styled("nav")({
  display: "flex",
  justifyContent: "space-between",
  // marginTop: "3rem",
  borderBottom: "1px solid #D8D8D8",
  alignItems: "center",
});

export const NavFigure = styled("figure")({
  fontFamily: "'Alex Brush', cursive",
  backgroundColor: "#000",
  color: "white",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  cursor: "pointer",

  "& svg": {
    width: "20px",
    fill: "white",
  },

  "& figcaption": {
    fontSize: "10px",
  },
});

export const LinksContainer = styled("div")({
  display: "flex",
  alignItems: "center",

  "& ul": {
    display: "flex",
  },
});

export const StyledLinks = styled("ul")({
  gap: "4rem",
  paddingRight: "3rem",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "0",
    width: "1px",
    height: "30%",
    backgroundColor: "#707070",
  },

  "& li": {
    a: {
      display: "block",
      color: "black",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      fontSize: " 1rem",
      fontStyle: " normal",
      fontWeight: " 400",
      lineHeight: " 1.6875rem",
    },
  },

  "& a.active": {
    borderBottom: "2px solid #000",
  },
});

export const StyledIcons = styled("ul")({
  gap: "3rem",
  marginLeft: "3rem",
  "& li": {
    a: {
      display: "block",
      color: "black",
      fontSize: " 1rem",
      fontStyle: " normal",
      fontWeight: " 400",
    },
  },

  "& li input": {
    border: "none",
    borderBottom: "1px solid #000",
    outline: "none",
    fontSize: " 1rem",
    fontStyle: " normal",
    fontWeight: " 400",
    lineHeight: " 1.6875rem",
    width: "100%",
  },

  "& div.input": {
    width : "0px",
    transition: '0.5s',
    overflow: "hidden",
  },

  "& div.show.input": {
    width : "150px",
  },

  // create animation width
});
