import { styled } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
  marginTop: "10rem",
  display: "flex",
  flexDirection: "column",
  borderTop: `1px solid ${theme.palette.grayColor2}`,
  paddingTop: "3rem",
  marginBottom: "3rem",

  "& ul": {
    display: "flex",
  },
}));

export const FirstDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "5rem",

  "& ul": {
    display: "flex",
    gap: "2.5rem",

    "& li": {
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "1.6875rem",
      color: theme.palette.grayColor,
    },
  },
}));

export const EmailDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexBasis: "35%",
  justifyContent: "space-between",
  borderBottom: "1px solid #000",
  paddingBottom: "0.5rem",

  "& input": {
    border: "none",
    outline: "none",
    flexBasis: "70%",
    "&::placeholder": {
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "1.6875rem",
    },
  },

  "& span": {
    cursor: "pointer",
    "& svg": {
      fill: theme.palette.grayColor,
    },
  },
}));

export const SecondDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& p": {
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.6875rem",
    "& span": {
      color: theme.palette.grayColor,
    },
  },

  "& ul": {
    gap: "1rem",
    alignItems: "center",
    "& li": {
      height: "1.5rem",
      width: "1.5rem",
      cursor: "pointer",
      "& svg": {
        fill: theme.palette.grayColor,
      },
    },
  },
}));
