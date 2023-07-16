import { styled } from "@mui/material";
import { Container } from "../../components/global.styled";

export const StyledContainer = styled(Container)(({ theme }) => ({
  // height: "100vh",
}));

export const StyledDiv = styled("div")(({ theme }) => ({
  marginTop: "15rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: "15rem",
}));

export const StyledHeading = styled("h1")(({ theme }) => ({
  fontSize: " 2.0625rem",
  fontStyle: " normal",
  fontWeight: " 500",
  lineHeight: " 2.6875rem",
  marginBottom: " 1.5rem",
}));

export const StyledP = styled("p")(({ theme }) => ({
  fontSize: " 1.25rem",
  fontStyle: " normal",
  fontWeight: " 400",
  lineHeight: " 1.625rem",
  color: theme.palette.grayColor,
  marginBottom: "4rem",
}));

export const HomeButton = styled("button")(({ theme }) => ({
  padding: "1rem 3rem",
  backgroundColor: "#fff",
  border: "1px solid #000",
  borderRadius: "0.25rem",
  fontWeight: "700",
  textTransform: "uppercase",
  fontSize: "1rem",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
}));
