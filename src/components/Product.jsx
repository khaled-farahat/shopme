import React from "react";
import {
  ProductDiv,
  ProductFigure,
  ProductName,
  ProductPrice,
} from "./Product.styled";

const Product = ({ product }) => {
  return (
    <ProductDiv>
      <ProductFigure>
        {/* <img src="https://via.placeholder.com/150" alt="Product" /> */}
        <img
          src={product?.thumbnail}
          alt={product?.title}
          crossOrigin="anonymous"
        />
        <figcaption>Add to cart</figcaption>
      </ProductFigure>

      <ProductName>{product?.title}</ProductName>
      <ProductPrice>$ {product?.price}</ProductPrice>
    </ProductDiv>
  );
};

export default Product;
