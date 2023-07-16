import React from "react";

// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { SwiperSlide, Swiper } from "swiper/react";
import axios from "axios";

import { useQuery } from "react-query";

import Product from "../../components/Product";
import SkeletonProduct from "../../components/SkeletonProduct";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const fetchProducts = () => {
  return axios.get(`http://localhost:4000/products`);
};

const SimilarProduct = ({ category, productId }) => {

  const { isLoading, data /*, isError, error */ } = useQuery(
    "products",
    fetchProducts,
  );
  const screenWidth = window.innerWidth;


  return (
    <div style={{
      marginTop: "5rem",
    }}>
      <h1
        style={{
          marginBottom: "3rem",
        }}
      >
        Similar items
      </h1>
      {!isLoading && data && (
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={screenWidth>768?3:2}
            grabCursor={true}
          >
            {data?.data?.map((product) => {
              if (product.category === category && product.id !== productId) {
                return (
                  <SwiperSlide key={product.id}>
                    <Product product={product} />
                  </SwiperSlide>
                );
              }
              return null;
            })}
          </Swiper>
        </div>
      )}
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
        </div>
      )}
    </div>
  );
};

export default SimilarProduct;
