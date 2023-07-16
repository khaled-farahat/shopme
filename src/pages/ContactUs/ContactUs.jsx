import React from "react";
import {
  ContactUsContainer,
  InputContainer,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledParagraph,
  StyledTextArea,
  StyledTitle,
} from "./ContactUs.styled";

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactUsContainer>
      <StyledTitle>Contact Us</StyledTitle>
      <StyledParagraph>
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </StyledParagraph>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <StyledInput type="text" placeholder="First name" />
          <StyledInput type="text" placeholder="Last name" />
        </InputContainer>
        <InputContainer>
          <StyledInput type="email" placeholder="Email" />
          <StyledInput type="text" placeholder="Subject" />
        </InputContainer>
        <StyledTextArea placeholder="Message" />
        <StyledButton type="submit">Send</StyledButton>
      </StyledForm>
    </ContactUsContainer>
  );
};

export default ContactUsPage;
