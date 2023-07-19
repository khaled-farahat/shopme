import { styled } from "@mui/material";

export const MainContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "100%",
}));

export const BlogTitle = styled("h1")(({ theme }) => ({
  fontSize: " 2.0625rem",
  fontStyle: " normal",
  fontWeight: " 500",
  lineHeight: " normal",
  textTransform: " capitalize",
  marginBottom: " 1rem",
}));

export const BlogDate = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.6875rem",
  color: theme.palette.grayColor,
  marginBottom: "2.5rem",

  "& span": {
    fontSize: " 1rem",
    fontStyle: " normal",
    fontWeight: " 400",
    lineHeight: " 1.6875rem",
    color: "#000",
    textTransform: "uppercase",
  },
}));

export const BlogFigure = styled("figure")(({ theme }) => ({
  // width: "100%",
  marginBottom: "4rem",
  maxWidth: "100%",

  "& img": {
    // width: "100%",
    // height: "auto",
    maxWidth: "100%",
    borderRadius: "0.5rem",
    objectFit: "cover",
  },
}));

export const InnerContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "start",
  width: "42rem",
  marginBottom: "3.5rem",
  borderBottom: `1px solid ${theme.palette.grayColor2}`,
  maxWidth: "100%",
}));

export const BlogContent = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.6875rem",
  marginBottom: "3.5rem",
}));

export const InnerFigure = styled("figure")(({ theme }) => ({
  maxWidth: "100%",
  width: "100%",
  marginBottom: "3rem",

  "& img": {
    width: "100%",
    height: "18.75rem",
    maxWidth: "100%",
    borderRadius: "0.5rem",
    objectFit: "cover",
    objectPosition: "0% 25%",
  },
}));

export const TopTrends = styled("h2")(({ theme }) => ({
  fontSize: " 1.625rem",
  fontStyle: " normal",
  fontWeight: " 400",
  lineHeight: " 2.1875rem",
  alignSelf: " flex-start",
  marginBottom: " 1.5rem",
}));

export const InnerContent = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.6875rem",
  marginBottom: "1rem",
}));

export const StyledList = styled("ul")(({ theme }) => ({
  listStyle: "disc",
  alignSelf: "flex-start",
  paddingLeft: "2rem",
  display: "flex",
  flexDirection: "column",
  marginBottom: "5.5rem",

  "& li": {
    fontSize: " 1rem",
    fontStyle: " normal",
    fontWeight: " 400",
    lineHeight: " 2.6875rem",
  },
}));

export const TagDiv = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "3rem",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
}));

export const TagPara = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: " 1rem",
  fontStyle: " normal",
  fontWeight: " 400",
  lineHeight: " 1.6875rem",
  textTransform: " capitalize",

  "& span": {
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.6875rem",
    color: theme.palette.grayColor,
  },

  "& ul": {
    display: "flex",
    gap: "1rem",
    alignItems: "center",

    "& li": {
      color: theme.palette.grayColor,
      cursor: "pointer",
    },
  },
}));

export const StyledHr = styled("hr")(({ theme }) => ({
  display: "inline-block",
  width: "4rem",
  height: "3px",
  backgroundColor: "#000",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
}));
