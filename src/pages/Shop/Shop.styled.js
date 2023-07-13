import { styled } from "@mui/material";

export const ShopSection = styled("section")(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  marginTop: "2rem",

  "@media (max-width: 992px)": {
    flexDirection: "column",
  },
}));

export const SidebarContainer = styled("div")(({ theme }) => ({
  flexBasis: "27%",
  "@media (max-width: 992px)": {
    display: "none",
  },
}));

export const AccordionContainer = styled("div")(({ theme }) => ({
  "@media (min-width: 992px)": {
    display: "none",
  },
}));
