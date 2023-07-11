import React, { useState } from "react";
import {
  LandingContainer,
  LandingDiv,
  LandingFigure,
  StyledList,
  TextDiv,
} from "./Landing.styled";
import { Typography } from "@mui/material";

const LandingComponent = ({ product, myIndex, index }) => {
  return (
    <div style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "fit-content",
    }}>
    <LandingDiv className={myIndex === index ? "active" : ""}>
      <LandingFigure>
        <img src={product.productImage} alt="landing" loading="lazy" />
      </LandingFigure>
      <TextDiv>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.0625rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "2.6875rem",
          }}
        >
          {product.productName}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: " 1.625rem",
            fontStyle: " normal",
            fontWeight: " 400",
            lineHeight: " 2.1875rem",
          }}
        >
          $ {product.productPrice}
        </Typography>
        <button onClick={()=>console.log(myIndex)}>View product</button>
      </TextDiv>
    </LandingDiv>
    </div>
  );
};

const Bullets = ({ index, setIndex, length }) => {
  return (
    <StyledList>
      {Array.from({ length }, (_, index) => index).map((i) => (
        <li
          key={i}
          onClick={() => setIndex(i)}
          className={index === i ? "active" : ""}
        ></li>
      ))}
    </StyledList>
  );
};

const Landing = () => {
  const [index, setIndex] = useState(0);
  const length = landingArr.length;
  return (
    <LandingContainer>
      {/* <LandingComponent product={landingArr[0]} myIndex={0} index={0} /> */}
      {landingArr.map((product, i) => (
        <LandingComponent key={i} product={product} myIndex={i} index={index} />
      ))}
      <Bullets index={index} setIndex={setIndex} length={length} />
    </LandingContainer>
  );
};

const landingArr = [
  {
    productId: 1,
    productName: "Golden big hoops",
    productPrice: 68.0,
    productImage: "images/(3).jpg",
  },
  {
    productId: 2,
    productName: "lorem ipsum dolor sit.",
    productPrice: 77.0,
    productImage: "https://picsum.photos/1000/1000",
  },
  {
    productId: 3,
    productName: "lorem ipsum dolor sit.",
    productPrice: 55.0,
    productImage: "https://picsum.photos/800/800",
  },
];

export default Landing;
