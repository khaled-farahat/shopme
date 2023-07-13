import { Pagination, styled } from "@mui/material";

export const FeedContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  // flexGrow: "1",
  width: "100%",
  // alignItems: "center",
  // justifyContent: "center",
}));

export const FeedDiv = styled("div")(({ theme }) => ({
  flexBasis: "68%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const PaginationDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& button.Mui-selected": {
    backgroundColor: "#000",
    color: "#fff",
  },
  "& button.MuiButtonBase-root:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
}));
