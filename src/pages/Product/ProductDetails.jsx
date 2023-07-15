import {
  EmailOutlined,
  Facebook,
  Favorite,
  FavoriteBorder,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { Checkbox, Rating } from "@mui/material";
import React, { useState } from "react";
import {
  AddToCartButton,
  AddToCartContainer,
  AvailableQuantity,
  IconsContainer,
  MainDiv,
  ProductCategory,
  ProductCost,
  ProductDescription,
  ProductTitle,
  QuantityContainer,
  RatingContainer,
} from "./ProductDetails.styled";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductDetails = ({
  title,
  price,
  description,
  rating,
  category,
  stock,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity === 1) {
        return prevQuantity;
      }
      return prevQuantity - 1;
    });
  };

  return (
    <MainDiv>
      <ProductTitle>{title}</ProductTitle>
      <ProductCost>$ {price}</ProductCost>
      <RatingContainer>
        <Rating
          name="read-only"
          value={parseInt(rating)}
          readOnly
          // precision={0.01}
          sx={{
            "& svg": {
              fill: "black",
            },
          }}
        />
        <span className="reviews">3 customer review</span>
      </RatingContainer>
      <ProductDescription>
        {description + " "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </ProductDescription>
      <AddToCartContainer>
        <QuantityContainer>
          <button onClick={handleQuantityDecrement} disabled={quantity === 1}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={handleQuantityIncrement}>+</button>
        </QuantityContainer>
        <AddToCartButton>Add to cart</AddToCartButton>
      </AddToCartContainer>
      <IconsContainer>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={
            <Favorite
              sx={{
                color: "red",
              }}
            />
          }
          sx={{
            padding: "0 0.5rem",
            paddingRight: "2rem",
            borderRight: "1px solid #D0D0D0",
            borderRadius: "0px",
          }}
          disableRipple
        />
        <ul>
          <li>
            <EmailOutlined />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </IconsContainer>
      <AvailableQuantity>
        SKU: <span>{stock}</span>
      </AvailableQuantity>
      <ProductCategory>
        Category: <span>{category}</span>
      </ProductCategory>
    </MainDiv>
  );
};

export default ProductDetails;
