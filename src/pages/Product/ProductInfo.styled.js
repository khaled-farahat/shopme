import { styled } from "@mui/material";

export const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  marginTop: "5rem",
}));

export const ListContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.625rem",
  color: theme.palette.grayColor,
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  ul: {
    display: "flex",
    gap: "6rem",

    li: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
      cursor: "pointer",
      "&.active": {
        color: "#000000",
        borderBottom: `2px solid #000`,
      },
      "&:hover": {
        color: "#000000",
      },
    },
  },
}));

export const ProductDescription = styled("p")(({ theme }) => ({
  marginTop: "2.5rem",
  width: "100%",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.6875rem",
  marginBottom: "5rem",
  color: theme.palette.grayColor,
}));

export const MoreInfoDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "2.5rem",
  width: "100%",
  gap: "1.5rem",
  alignItems: "flex-start",

  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.6875rem",
  // textTransform: "capitalize",

  "& span": {
    color: theme.palette.grayColor,
  },
}));

export const ReviewsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
}));

export const ReviewCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "2.5rem",
  marginTop: "1.5rem",
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.grayColor2}`,
  },
}));

export const ReviewCardName = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",

  "& h1": {
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineWeight: "1.625rem",
  },

  "& p": {
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.375rem",
    color: theme.palette.grayColor,
  },
}));

export const RatingContainer = styled("div")(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "1rem",
}));

export const ReviewCardComment = styled("div")(({ theme }) => ({
  marginTop: "0.5rem",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.6875rem",
  color: theme.palette.grayColor,
}));

export const GetReviewContainer = styled("div")(({ theme }) => ({
  flexBasis: "45%",
  marginTop: "2rem",
}));

export const ReviewForm = styled("form")(({ theme }) => ({
  position: "sticky",
  top: "30px",
  display: "flex",
  flexDirection: "column",
  // justifyContent: 'flex-start',
  alignItems: "flex-start",

  "& h2": {
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.625rem",
  },
}));

export const ReviewTextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  height: "5rem",
  marginTop: "3rem",
  marginBottom: "1rem",
  // padding: "1rem",
  border: "none",
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  outline: "none",
  resize: "none",

  "&::placeholder": {
    fontSize: "0.875rem",
    lineHeight: "1.375rem",
    color: theme.palette.grayColor,
    textTransform: "capitalize",
  },
}));

export const ReviewInput = styled("input")(({ theme }) => ({
  width: "100%",
  paddingBottom: "1rem",
  border: "none",
  marginTop: "2rem",
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  marginBottom: "1rem",

  "&::placeholder": {
    fontSize: "0.875rem",
    lineHeight: "1.375rem",
    color: theme.palette.grayColor,
    textTransform: "capitalize",
  },

  "&:focus, &:focus-visible": {
    outline: "none",
  },
}));

export const CheckboxContainer = styled("div")(({ theme }) => ({
  marginTop: "0.5rem",
  marginBottom: "2rem",
  "& span": {
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
}));

export const RatingDiv = styled("div")(({ theme }) => ({
  "& p": {
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.375rem",
    color: theme.palette.grayColor,
    marginBottom: "0.8rem",
  },
}));

export const SubmitButton = styled("button")(({ theme }) => ({
  marginTop: "3rem",
  backgroundColor: "#000",
  color: "#fff",
  padding: "1rem 2rem",
  borderRadius: "0.25rem",
  outline: "none",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  border: "none",
  cursor: "pointer",
  transition: "0.3s",

  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
  },
}));
