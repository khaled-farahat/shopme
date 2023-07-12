import React from "react";
import Product from "../../components/Product";
import {
  ProductsContainer,
  ProductsDiv,
  TextContainer,
} from "./HomeProducts.styled";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const SkeletonProduct = () => {
  return (
    <div
      style={{
        flexBasis: "30%",
        marginBottom: "5rem",
      }}
    >
      <Skeleton
        variant="rounded"
        sx={{
          width: "100%",
          height: "300px",
        }}
        animation="wave"
      />
      <Skeleton
        variant="text"
        sx={{
          width: "30%",
          marginTop: "1.5rem",
          marginBottom: "1rem",
        }}
        animation="wave"
      />
      <Skeleton
        variant="text"
        sx={{
          width: "20%",
        }}
        animation="wave"
      />
    </div>
  );
};

const HomeProducts = ({ data, isLoading }) => {
  return (
    <ProductsContainer>
      <TextContainer>
        <h1>Shop the Latest</h1>
        <Link to="/shop">View all</Link>
      </TextContainer>
      <ProductsDiv>
        {!isLoading &&
          data/*?.products*/.map((product, i) => {
            if (i > 5) return null;
            else
              return (
                <Product
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
