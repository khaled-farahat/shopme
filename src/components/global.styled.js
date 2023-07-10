import { keyframes, styled } from "@mui/material";

export const Container = styled("div")({
  paddingLeft: "15px",
  paddingRight: "15px",
  marginLeft: "auto",
  marginRight: "auto",

  // Small
  "@media (min-width: 768px)": {
    width: "750px",
  },

  // Medium
  "@media (min-width: 992px)": {
    width: "970px",
  },

  // Large
  "@media (min-width: 1200px)": {
    width: "1170px",
  },
});

export const gainWidth = keyframes`
to {
    display: block;
    width: 100px;
  }
`;
