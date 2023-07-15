import { styled } from "@mui/material";

export const MainDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "37%",
  marginLeft: "2rem",
  height: "37.5rem",
}));

export const ProductTitle = styled("h1")(({ theme }) => ({
  fontSize: " 1.625rem",
  fontStyle: " normal",
  fontWeight: " 400",
  lineHeight: " 2.1875rem",
  marginBottom: " 1.5rem",
}));

export const ProductCost = styled("p")(({ theme }) => ({
  fontSize: " 1.25rem",
  fontStyle: " normal",
  fontWeight: " 500",
  lineHeight: " 1.625rem",
  textTransform: " capitalize",
  marginBottom: " 4rem",
  color: theme.palette.grayColor,
}));

export const RatingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1.5rem",
  marginBottom: "1.5rem",

  "& span.reviews": {
    fontSize: "1rem",
    lineHeight: "1.6875rem",
    color: theme.palette.grayColor,
  },
}));

export const ProductDescription = styled("p")(({ theme }) => ({
  fontSize: "0.9rem",
  lineHeight: "1.6875rem",
  color: theme.palette.grayColor,
  marginBottom: "3rem",
}));

export const AddToCartContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1.5rem",
  marginBottom: "5rem",
}));

export const QuantityContainer = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: "#EFEFEF",
  alignItems: "center",
  padding: "0rem 1rem",
  justifyContent: "space-between",
  width: "6.375rem",
  fontSize: "1rem",
  lineHeight: "1.6875rem",
  color: theme.palette.grayColor,
  borderRadius: "0.25rem",

  "& button": {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
}));

export const AddToCartButton = styled("button")(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: "white",
  fontSize: "1rem",
  fontWeight: "700",
  borderRadius: "0.25rem",
  border: "1px solid #000",
  outline: "none",

  "&:hover": {
    backgroundColor: "#EFEFEF",
    border: "none",
  },
}));

export const IconsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  marginBottom: "2.3rem",

  ul: {
    display: "flex",
    gap: "1rem",
    li: {
      color: theme.palette.grayColor,
    },
  },
}));

export const AvailableQuantity = styled("p")(({ theme }) => ({
  marginBottom: "0.4rem",
  textTransform: "uppercase",
  fontSize: " 1rem",
  fontStyle: " normal",
  fontWeight: " 400",
  lineHeight: " 1.6875rem",

  "& span": {
    color: theme.palette.grayColor,
  },
}));

export const ProductCategory = styled("p")(({ theme }) => ({
  fontSize: " 1rem",
  fontStyle: " normal",
  fontWeight: " 400",
  lineHeight: " 1.6875rem",
  textTransform: " capitalize",

  "& span": {
    color: theme.palette.grayColor,
  },
}));
