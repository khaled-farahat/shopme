import React from "react";
import {
  FormNote,
  FormTitle,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledTextArea,
} from "./CommentForm.styled";
import { CheckboxContainer } from "../Product/ProductInfo.styled";
import { Checkbox } from "@mui/material";

const CommentForm = ({ type }) => {
  return (
    <StyledForm>
      <FormTitle>Leave a reply</FormTitle>
      <FormNote>
        Your email address will not be published. Required fields are marked *
      </FormNote>
      <StyledInput type="text" placeholder="Enter your name *" />
      <StyledInput type="email" placeholder="Enter your email *" />
      <StyledInput type="text" placeholder="Enter your website" />
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
      <StyledTextArea placeholder="Comment *" />
      <StyledButton>Post Comment</StyledButton>
    </StyledForm>
  );
};

export default CommentForm;
