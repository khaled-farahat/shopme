import { styled } from "@mui/material";

export const ProductMainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const ProductDetailsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "100vh",

  "@media (max-width: 992px)": {
    flexDirection: "column",
  },
}));
