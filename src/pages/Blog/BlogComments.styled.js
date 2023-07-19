import { styled } from "@mui/material";

export const BlogCommentsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "42rem",
}));

export const CommentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginBottom: "2rem",
}));

export const CommentFigure = styled("figure")(({ theme }) => ({
  borderRadius: "0.5rem",
  marginRight: "1.5rem",

  "& img": {
    borderRadius: "0.5rem",
  },
}));

export const CommentInnerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const UsernameContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
}));

export const UsernameInnerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "& h5": {
    fontSize: " 1.25rem",
    fontStyle: " normal",
    fontWeight: " 400",
    lineHeight: " 1.625rem",
    marginRight: "1rem",
  },

  "& span": {
    fontSize: " 0.875rem",
    fontStyle: " normal",
    fontWeight: " 400",
    lineHeight: " 1.375rem",
    color: theme.palette.grayColor,
  },
}));

export const ReplyContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.grayColor,

  "& svg": {
    marginRight: "0.5rem",
    cursor: "pointer",
  },

  "& span": {
    fontSize: "0.8125rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.6875rem",
    cursor: "pointer",
  },
}));

export const CommentText = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.6875rem",
  color: theme.palette.grayColor,
  // alignSelf: "flex-start",
  textAlign: "left",
}));
