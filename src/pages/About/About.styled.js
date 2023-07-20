import { styled } from "@mui/material";

export const AboutSection = styled("section")(({ theme }) => ({
  width: "42rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "6rem",
  maxWidth: "100%",
}));

export const AboutTitle = styled("h1")(({ theme }) => ({
  fontSize: "2.0625rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "2.6875rem",
  marginBottom: "1.5rem",
}));

export const WhoWeAre = styled("p")(({ theme }) => ({
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.625rem",
  marginBottom: "2.8rem",
}));

export const AboutParagraph = styled("p")(({ theme }) => ({
  fontSize: " 1rem",
  fontStyle: " normal",
  fontWeight: " 400",
  lineHeight: " 1.6875rem",
  marginBottom: " 2.44rem",
}));

export const AboutHeader = styled("h2")(({ theme }) => ({
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "2.1875rem",
  marginRight: "auto",
  marginBottom: "1.5rem",
}));

export const AboutFigure = styled("figure")(({ theme }) => ({
  width: "100%",
  height: "19rem",
  marginBottom: "3rem",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "0% 25%",
    borderRadius: "0.5rem",
  },
}));

export const AboutList = styled("ul")(({ theme }) => ({
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.6875rem",
  listStyle: "disc",
  marginTop: "-1.5rem",
  marginBottom: "2.44rem",
}));
