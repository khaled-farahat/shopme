import React from "react";
import {
  ProductDiv,
  ProductFigure,
  ProductName,
  ProductPrice,
} from "./Product.styled";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <ProductDiv>
      <ProductFigure>
        {/* <img src="https://via.placeholder.com/150" alt="Product" /> */}
        <img
          src={product?.thumbnail}
          alt={product?.title}
          crossOrigin="anonymous"
          onClick={() => navigate("/products/" + product?.id)}
          loading="lazy"
        />
        <figcaption
          onClick={() => {
            console.log("Add to cart");
          }}
        >
          Add to cart
        </figcaption>
      </ProductFigure>

      <ProductName>{product?.title}</ProductName>
      <ProductPrice>$ {product?.price}</ProductPrice>
    </ProductDiv>
  );
};

export default Product;
