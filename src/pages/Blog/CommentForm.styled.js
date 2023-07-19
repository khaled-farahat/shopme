import { styled } from "@mui/material";

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "flex-start",
  marginBottom: "2rem",
}));

export const FormTitle = styled("h1")(({ theme }) => ({
  fontSize: " 1.625rem",
  fontStyle: " normal",
  fontWeight: " 400",
  lineHeight: " normal",
  textTransform: " capitalize",
  marginBottom: " 1rem",
}));

export const FormNote = styled("p")(({ theme }) => ({
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.375rem",
  color: theme.palette.grayColor,
  marginBottom: "3rem",
}));

export const StyledInput = styled("input")(({ theme }) => ({
  width: "100%",
  border: "none",
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  outline: "none",
  marginBottom: "1.5rem",
  marginTop: "1.5rem",
  paddingBottom: "0.8rem",

  "&::placeholder": {
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.375rem",
    color: theme.palette.grayColor,
  },
}));

export const StyledTextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  border: "none",
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  outline: "none",
  marginBottom: "4rem",
  marginTop: "1.5rem",
  paddingBottom: "2rem",
  resize: "vertical",

  "&::placeholder": {
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.375rem",
    color: theme.palette.grayColor,
  },
}));

export const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  outline: "none",
  borderRadius: "0.25rem",
  padding: "1rem 2rem",
  textTransform: "uppercase",
  fontWeight: "700",
  fontSize: "1rem",
  transition: "0.3s",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
  },
}));
