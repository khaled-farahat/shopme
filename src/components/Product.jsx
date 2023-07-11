import React from "react";
import { ProductDiv, ProductFigure, ProductName, ProductPrice } from "./Product.styled";

const Product = ({image, title, price}) => {
  return (
    <ProductDiv>
      <ProductFigure>
        {/* <img src="https://via.placeholder.com/150" alt="Product" /> */}
        <img src={image} alt={title} crossOrigin="anonymous" />
        <figcaption>Add to cart</figcaption>
      </ProductFigure>

      <ProductName>{title}</ProductName>
      <ProductPrice>$ {price}</ProductPrice>
    </ProductDiv>
  );
};

export default Product;
