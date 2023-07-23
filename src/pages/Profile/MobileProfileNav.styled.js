import { styled } from "@mui/material";
import { Swiper } from "swiper/react";

export const MobileNavMainContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 3.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SwiperContainer = styled("div")`
  width: 80%;
  flex-grow: 1;
`;

export const StyledSwiper = styled(Swiper)`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6875rem;
  color: ${({ theme }) => theme.palette.grayColor};

  & .swiper-slide.active {
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
