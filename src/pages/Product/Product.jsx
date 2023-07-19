import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductPictures from "./ProductPictures";
import ProductDetails from "./ProductDetails";
import ProductInfo from "./ProductInfo";
import SimilarProduct from "./SimilarProduct";
import { ProductDetailsContainer } from "./Product.styled";

const fetchProduct = ({ queryKey }) => {
  const productId = queryKey[1];
  return axios.get(`http://localhost:4000/products/${productId}`);
};

const ProductPage = () => {
  const { productId } = useParams();

  const { /*isLoading,*/ data /*, isError, error */ } = useQuery(
    ["product", productId],
    fetchProduct
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [window.location.pathname]);

  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      <ProductDetailsContainer>
        <ProductPictures images={data?.data?.images} />
        <ProductDetails
          title={data?.data?.title}
          price={data?.data?.price}
          description={data?.data?.description}
          category={data?.data?.category}
          rating={data?.data?.rating}
          stock={data?.data?.stock}
        />
      </ProductDetailsContainer>
      <ProductInfo description={data?.data?.description} />
      <SimilarProduct
        category={data?.data?.category}
        productId={data?.data?.id}
      />
    </div>
  );
};

export default ProductPage;
