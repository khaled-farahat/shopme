// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useState } from "react";
import {
  ColoredDiv,
  PicturesContainer,
  SwiperMain,
  SwiperThumbs,
} from "./ProductPictures.styled";

const ProductPictures = ({ images }) => {
  const [activePic, setActivePic] = useState(0);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const thumbsRef = useRef(null);
  const mainRef = useRef(null);

  // get width of main ref
  const divWidth = mainRef?.current?.offsetWidth;

  const handleSlideChange = (swiper) => {
    setActivePic(swiper.realIndex);
    thumbsSwiper?.slideTo(swiper.realIndex);
  };

  const handleClick = (index) => {
    mainSwiper?.slideTo(index);
    thumbsSwiper?.slideTo(index);
    setActivePic(index);
  };

  const handleTHumbClick = (index) => {
    mainSwiper?.slideTo(index);
    // thumbsSwiper?.slideTo(index);
    setActivePic(index);
  };

  // console.log(images);

  return (
    <>
      <div
        style={{
          flexBasis: "62%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PicturesContainer>
          <div
            style={{
              display: "flex",
              width: "8rem",
              height: "37.5rem",
              marginRight: "1rem",
            }}
          >
            <SwiperThumbs
              modules={[Navigation, A11y]}
              spaceBetween={40}
              slidesPerView={4}
              onSwiper={setThumbsSwiper}
              direction="vertical"
              ref={thumbsRef}
            >
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <figure>
                    <img
                      src={image}
                      alt="try"
                      onClick={() => handleTHumbClick(index)}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </SwiperThumbs>
          </div>
          <div
            style={{
              display: "flex",
              // width: "65%",
              height: "37.5rem",
            }}
            ref={mainRef}
          >
            <SwiperMain
              // install Swiper modules
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              onSwiper={setMainSwiper}
              onSlideChange={handleSlideChange}
              loop={true}
              grabCursor={true}
            >
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <figure>
                    <img src={image} alt="" />
                  </figure>
                </SwiperSlide>
              ))}
            </SwiperMain>
          </div>
        </PicturesContainer>
        <div
          style={{
            display: "flex",
            width: divWidth,
            alignSelf: "flex-end",
            marginTop: "1rem",
          }}
        >
          {images?.map((image, index) => (
            <ColoredDiv
              key={index}
              className={index === activePic ? "active" : ""}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPictures;
