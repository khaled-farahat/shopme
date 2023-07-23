import React from "react";
import {
  DetailsDiv,
  DisplayNameDiv,
  FormButton,
  FormInput,
  FormTitle,
  SecondaryTitle,
  StyledForm,
} from "./Details.styled";

const DetailsForm = () => {
  return (
    <StyledForm>
      <FormTitle>Account details</FormTitle>
      <FormInput type="text" placeholder="First name" />
      <FormInput type="text" placeholder="Last name" />
      <DisplayNameDiv>
        <input type="text" placeholder="Display name" />
        <p>
          This will be how your name will be displayed in the account section
          and in reviews.
        </p>
      </DisplayNameDiv>
      <FormInput type="text" placeholder="Email address" />

      <SecondaryTitle>Password change</SecondaryTitle>
      <FormInput
        type="password"
        placeholder="Current password (leave blank to leave unchanged)"
      />
      <FormInput
        type="password"
        placeholder="New password (leave blank to leave unchanged)"
      />
      <FormInput type="password" placeholder="Confirm new password" />

      <FormButton type="submit">Save changes</FormButton>
    </StyledForm>
  );
};

const Details = () => {
  return (
    <DetailsDiv>
      <DetailsForm />
    </DetailsDiv>
  );
};

export default Details;
