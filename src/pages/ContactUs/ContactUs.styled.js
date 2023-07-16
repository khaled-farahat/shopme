import { styled } from "@mui/material";

export const ContactUsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "6rem",
  // maxHeight: "100vh",

  "@media (max-width: 768px)": {

  },
}));

export const StyledTitle = styled("h1")(({ theme }) => ({
  fontSize: "2.0625rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "2.6875rem",
  marginBottom: "2.5rem",
}));

export const StyledParagraph = styled("p")(({ theme }) => ({
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.625rem",
  width: "35rem",
  marginBottom: "6rem",
  maxWidth: "100%",
}));

export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "56.75rem",
  maxWidth: "100%",
}));

export const InputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "6rem",

  "@media (max-width: 768px)": {
    flexDirection: "column",
    marginBottom: "2rem",
  },
}));

export const StyledInput = styled("input")(({ theme }) => ({
  border: "none",
  outline: "none",
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  flexGrow: "1",
  flexBasis: "45%",
  paddingBottom: "1rem",
  "&:not(:last-child)": {
    marginRight: "7rem",
  },

  "@media (max-width: 768px)": {
    marginBottom: "2rem",
    "&:not(:last-child)": {
      marginRight: "0",
    },
  },
}));

export const StyledTextArea = styled("textarea")(({ theme }) => ({
  border: "none",
  outline: "none",
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  flexGrow: "1",
  paddingBottom: "1rem",
  resize: "vertical",
  width: "100%",
  marginBottom: "6rem",
}));

export const StyledButton = styled("button")(({ theme }) => ({
  padding: "1rem 14rem",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  outline: "none",
  borderRadius: "0.25rem",

  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
    cursor: "pointer",
  },

  "@media (max-width: 768px)": {
    padding: "1rem 7rem",
  },
}));
