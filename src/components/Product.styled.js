import { styled } from "@mui/material";

export const ProductDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexBasis: "30%",
  marginBottom: "5rem",
  // flexGrow: 1,
  // maxWidth: "70%",

  "& p": {
    lineHeight: "1.625rem",
    fontSize: "1.25rem",
    fontStyle: "normal",
  },

  "@media (max-width: 768px)": {
    flexBasis: "45%",
    marginBottom: "2rem",
  },
}));

export const ProductFigure = styled("figure")(({ theme }) => ({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  height: "18.75rem",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "0.5rem",
    cursor: "pointer",
  },

  "& figcaption": {
    position: "absolute",
    bottom: "-1000px",
    // bottom: 0,
    width: "100%",
    height: "65px",
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.3s",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: "700",
    zIndex: 2,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.70)",
    },
  },

  "&:hover": {
    "& figcaption": {
      bottom: 0,
    },
  },

  "@media (max-width: 768px)": {
    height: "10rem",
  },
}));

export const ProductName = styled("p")(({ theme }) => ({
  fontWeight: "400",
  marginTop: "1.5rem",
  marginBottom: "1rem",
}));

export const ProductPrice = styled("p")(({ theme }) => ({
  textTransform: "capitalize",
  fontWeight: "500",
  color: theme.palette.grayColor,
}));
