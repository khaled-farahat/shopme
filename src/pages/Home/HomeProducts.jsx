import React from "react";
import Product from "../../components/Product";
import {
  ProductsContainer,
  ProductsDiv,
  TextContainer,
} from "./HomeProducts.styled";
import { Link } from "react-router-dom";
import SkeletonProduct from "../../components/SkeletonProduct";



const HomeProducts = ({ data, isLoading }) => {
  return (
    <ProductsContainer>
      <TextContainer>
        <h1>Shop the Latest</h1>
        <Link to="/shop">View all</Link>
      </TextContainer>
      <ProductsDiv>
        {!isLoading &&
          data?./*products.*/map((product, i) => {
            if (i > 5) return null;
            else
              return (
                <Product
                  key={i}
                  product = {product}
                />
              );
          })}
        {isLoading &&
          Array.from({ length: 3 }, (_, index) => index).map((i) => (
            <SkeletonProduct key={i} />
          ))}
        {/* <SkeletonProduct /> */}
      </ProductsDiv>
    </ProductsContainer>
  );
};

export default HomeProducts;
