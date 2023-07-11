import { styled } from "@mui/material";

export const ProductsContainer = styled("div")(({ theme }) => ({
  marginTop: "4rem",
  // marginBottom: '2rem',
}));

export const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",

  "& h1": {
    fontSize: " 2.0625rem",
    fontStyle: " normal",
    fontWeight: " 500",
    lineHeight: " 2.6875rem",
  },

  "& p": {
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.625rem",
    textTransform: "capitalize",
    color: theme.palette.grayColor,
    cursor: "pointer",
  },
}));

export const ProductsDiv = styled("div")(({ theme }) => ({
  display: "flex",
  // gap: '1rem',
  justifyContent: "space-between",
  flexWrap: "wrap",
}));
