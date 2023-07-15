import React, { useState } from "react";
import {
  CheckboxContainer,
  GetReviewContainer,
  InfoContainer,
  ListContainer,
  MoreInfoDiv,
  ProductDescription,
  RatingContainer,
  RatingDiv,
  ReviewCardComment,
  ReviewCardContainer,
  ReviewCardName,
  ReviewForm,
  ReviewInput,
  ReviewTextArea,
  ReviewsContainer,
  SubmitButton,
} from "./ProductInfo.styled";
import { Checkbox, Rating } from "@mui/material";

const ReviewCard = ({ review }) => {
  return (
    <ReviewCardContainer>
      <ReviewCardName>
        <h1>Scarlet withch</h1>
        <p>6 January, 2021</p>
      </ReviewCardName>
      <RatingContainer>
        <Rating
          name="read-only"
          value={3}
          readOnly
          // precision={0.01}
          sx={{
            "& svg": {
              fill: "black",
            },
          }}
        />
      </RatingContainer>
      <ReviewCardComment>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet.
      </ReviewCardComment>
    </ReviewCardContainer>
  );
};

const GetReview = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <GetReviewContainer>
      <ReviewForm onSubmit={handleSubmit}>
        <h2>Add a review</h2>
        <p
          style={{
            fontSize: "0.8125rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.875rem" /* 230.769% */,
            textTransform: "capitalize",
            color: "#707070",
          }}
        >
          Your email address will not be published. Required fields are marked *
        </p>
        <ReviewTextArea placeholder="Your review *" />
        <ReviewInput type="text" placeholder="Enter your name *" />
        <ReviewInput type="email" placeholder="Enter your email *" />
        <CheckboxContainer>
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "black",
              },
              "&.MuiCheckbox-root": {
                paddingLeft: "0px",
              },
            }}
            disableRipple
          />
          <span>
            Save my name, email, and website in this browser for the next time I
            comment.
          </span>
        </CheckboxContainer>
        <RatingDiv>
          <p>Your Rating *</p>
          <Rating
            name="simple-controlled"
            // value={value}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            sx={{
              "& svg": {
                fill: "black",
              },
            }}
          />
        </RatingDiv>
        <SubmitButton>Submit</SubmitButton>
      </ReviewForm>
    </GetReviewContainer>
  );
};

const ProductInfo = ({ description }) => {
  const [active, setActive] = useState(0);

  return (
    <InfoContainer>
      <ListContainer>
        <ul>
          <li
            onClick={() => setActive(0)}
            className={active === 0 ? "active" : ""}
          >
            description
          </li>
          <li
            onClick={() => setActive(1)}
            className={active === 1 ? "active" : ""}
          >
            Additional information
          </li>
          <li
            onClick={() => setActive(2)}
            className={active === 2 ? "active" : ""}
          >
            reviews
          </li>
        </ul>
      </ListContainer>
      {active === 0 && (
        <ProductDescription>
          {description + " "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendum sed.
        </ProductDescription>
      )}
      {active === 1 && (
        <MoreInfoDiv>
          <p>
            Weight: <span>0.3 kg</span>
          </p>
          <p>
            Dimensions: <span>15 x 10 x 1 cm</span>
          </p>
          <p>
            Colors: <span>Yellow</span>
          </p>
          <p>
            Metal: <span>Gold</span>
          </p>
        </MoreInfoDiv>
      )}
      {active === 2 && (
        <ReviewsContainer>
          <div
            style={{
              marginTop: "2rem",
              flexBasis: "45%",
            }}
          >
            <h3>2 Reviews for lira earings</h3>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
          <GetReview />
        </ReviewsContainer>
      )}
    </InfoContainer>
  );
};

export default ProductInfo;
