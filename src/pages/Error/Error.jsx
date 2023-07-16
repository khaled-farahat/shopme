import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  HomeButton,
  StyledContainer,
  StyledDiv,
  StyledHeading,
  StyledP,
} from "./Error.styled";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong. Try again later.";

  if (error.status === 404) {
    title = "Page not found";
    message = "The page you requested could not be found.";
  }
  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  return (
    <>
      <StyledContainer>
        <Navbar />
        <main>
          <StyledDiv>
            <StyledHeading>{title}</StyledHeading>
            <StyledP>{message}</StyledP>
            <HomeButton
              onClick={() => {
                navigate("/");
              }}
            >
              homepage
            </HomeButton>
          </StyledDiv>
        </main>
        <Footer />
      </StyledContainer>
    </>
  );
};

export default ErrorPage;
