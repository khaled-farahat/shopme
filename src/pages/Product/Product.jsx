import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductPictures from "./ProductPictures";
import ProductDetails from "./ProductDetails";

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



  return (
    <div style={{
      marginTop: '5rem',
    }}>
      <div className="product" style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <ProductPictures images = {data?.data?.images}/>
        <ProductDetails
          title={data?.data?.title}
          price={data?.data?.price}
          description={data?.data?.description}
          category={data?.data?.category}
          rating={data?.data?.rating}
          stock={data?.data?.stock}
        />
      </div>
      <div className="disc"></div>
      <div className="similar"></div>
    </div>
  );
};

export default ProductPage;
