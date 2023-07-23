import React, { useState } from "react";
import { useSelector } from "react-redux";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  MobileNavMainContainer,
  StyledSwiper,
  SwiperContainer,
} from "./MobileProfileNav.styled";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const MobileProfileNav = ({ activeLink, setActiveLink }) => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const isMobile = useSelector((state) => state.mobile.isMobile);

  return (
    <MobileNavMainContainer>
      <KeyboardArrowLeft
        onClick={() => {
          mainSwiper.slidePrev();
        }}
        sx={{
          cursor: "pointer",
        }}
      />
      <SwiperContainer>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={isMobile ? 5 : 20}
          slidesPerView={3}
          onSwiper={setMainSwiper}
        >
          <SwiperSlide
            onClick={() => setActiveLink(0)}
            className={activeLink === 0 ? "active" : undefined}
          >
            dashboard
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setActiveLink(1)}
            className={activeLink === 1 ? "active" : undefined}
          >
            orders
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setActiveLink(2)}
            className={activeLink === 2 ? "active" : undefined}
          >
            downloads
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setActiveLink(3)}
            className={activeLink === 3 ? "active" : undefined}
          >
            addresses
          </SwiperSlide>
          <SwiperSlide
            onClick={() => setActiveLink(4)}
            className={activeLink === 4 ? "active" : undefined}
          >
            Account Details
          </SwiperSlide>
          <SwiperSlide>logout</SwiperSlide>
        </StyledSwiper>
      </SwiperContainer>
      <KeyboardArrowRight
        onClick={() => {
          mainSwiper.slideNext();
        }}
        sx={{
          cursor: "pointer",
        }}
      />
    </MobileNavMainContainer>
  );
};

export default MobileProfileNav;
