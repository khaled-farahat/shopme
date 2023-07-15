import { styled } from "@mui/material";
import { Swiper } from "swiper/react";

export const PicturesContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
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

export const SwiperMain = styled(Swiper)(({ theme }) => ({
  width: "33.75rem",
  // width: "100%",
  height: "37.5rem",
  // marginLeft:"1rem",

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

export const ColoredDiv = styled("div")(({ theme }) => ({
  flexGrow: 1,
  height: "0.2rem",
  backgroundColor: theme.palette.grayColor2,
  cursor: "pointer",

  "&.active": {
    backgroundColor: theme.palette.grayColor,
  },
}));
