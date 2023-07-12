import { styled } from "@mui/material";

export const LandingContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "36.375rem",
  // overflow: "hidden",
}));

export const LandingDiv = styled("div")(({ theme }) => ({
  position: "relative",
  height: "36.375rem",
  width: "100%",
  opacity: "0.0",
  // display: "none",
  // visibility: "hidden",
  transition: "opacity 1s",

  "&.active": {
    // display: "block",
    // visibility: "visible",
    opacity: "1",
    zIndex: "2",
  },

}));

export const LandingFigure = styled("figure")(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  zIndex: "-1",

  "& img": {
    width: "100%",
    height: "36.375rem",
    borderRadius: "1rem",
    objectFit: " cover",
    objectPosition: " 25% 0%",
  },

  "@media (max-width: 768px)": {
    "& img": {
      objectPosition: " 80% 0%",
    },
  },
}));

export const TextDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "2.5rem",
  color: theme.palette.whiteColor,
  height: "100%",
  marginLeft: "auto",
  alignItems: "flex-start",
  justifyContent: "center",
  // alignContent: "center",
  // flexWrap: "wrap",

  "& button": {
    marginTop: "3rem",
    border: `2px solid ${theme.palette.whiteColor}`,
    color: theme.palette.whiteColor,
    backgroundColor: "transparent",
    borderRadius: "0.375rem",
    padding: "0.75rem 1.8rem",
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    textTransform: "uppercase",
    // transition: "all 0.3s ease-in-out",

    "&:hover": {
      backgroundColor: theme.palette.whiteColor,
      color: theme.palette.grayColor2,
      cursor: "pointer",
    },
  },

  "@media (max-width: 768px)": {
    justifyContent: "flex-end",
    paddingBottom: "4rem",

  },

  "@media (max-width: 600px)": {
    alignItems: "center",
    paddingLeft: "0",
  },
}));

export const StyledList = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: "0.7rem",
  position: "absolute",
  bottom: "1.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  alignItems: "center",
  zIndex: "5",

  "& li": {
    listStyle: "none",
    width: "0.8rem",
    height: "0.8rem",
    borderRadius: "50%",
    // backgroundColor: theme.palette.whiteColor,
    border: `1px solid ${theme.palette.whiteColor}`,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: theme.palette.whiteColor,
    },

    "&.active": {
      backgroundColor: theme.palette.whiteColor,
      width: "1rem",
      height: "1rem",
    },
  },
}));
