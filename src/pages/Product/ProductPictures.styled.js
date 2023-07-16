import { styled } from "@mui/material";
import { Swiper } from "swiper/react";

export const ProductMainContainer = styled("div")(({ theme }) => ({
  flexBasis: "62%",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 992px)": {
    marginBottom: "2rem",
    flexGrow: "1",
  },
}));

export const PicturesContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",

  "@media (max-width: 992px)": {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const ThumbsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "8rem",
  height: "37.5rem",
  marginRight: "1rem",
  "@media (max-width: 992px)": {
    display: "none",
  },
}));

export const SwiperThumbs = styled(Swiper)(({ theme }) => ({
  width: "7.5rem",
  // width: "30%",

  // "& .swiper-wrapper": {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   height: "100%",
  // },

  "& figure": {
    width: "100%",
    height: "7.5rem",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "0.5rem",
      cursor: "pointer",
    },
  },
}));

export const MainSwiperContainer = styled("div")(({ theme }) => ({
  display: "flex",
  // width: "65%",
  height: "37.5rem",
  maxWidth: "100%",

  "@media (max-width: 992px)": {
    justifyContent: "center",
    alignItems: "center",
  },

  "@media (max-width: 600px)": {
    width: "400px",
    height: "450px",
    maxWidth: "100%",
  },
}));

export const SwiperMain = styled(Swiper)(({ theme }) => ({
  width: "33.75rem",
  // width: "100%",
  height: "37.5rem",
  // marginLeft:"1rem",

  maxWidth: "100%",

  "@media (max-width: 600px)": {
    width: "400px",
    height: "450px",
    maxWidth: "100%",
  },

  "& figure": {
    width: "100%",
    height: "100%",

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "0.5rem",
    },
  },
}));

export const ColoredDivsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignSelf: "flex-end",
  marginTop: "1rem",

  "@media (max-width: 992px)": {
    alignSelf: "center",
  },
}));

export const ColoredDiv = styled("div")(({ theme }) => ({
  flexGrow: 1,
  height: "0.2rem",
  backgroundColor: theme.palette.grayColor2,
  cursor: "pointer",

  "&.active": {
    backgroundColor: theme.palette.grayColor,
  },
}));
