import React from "react";
import {
  AddressBtn,
  AddressInput,
  AddressesContainer,
  AddressesMainContainer,
  AddressesSecContainer,
  StyledBtn,
  StyledHeader,
  StyledPara,
} from "./Addresses.styled";

const AddressForm = () => {
  return (
    <form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flexBasis: "45%",
          }}
        >
          <AddressInput type="text" placeholder="First Name*" />
        </div>
        <div
          style={{
            flexBasis: "45%",
          }}
        >
          <AddressInput type="text" placeholder="Last Name*" />
        </div>
      </div>
      <AddressInput type="text" placeholder="Company Name (Optional)" />
      <AddressInput type="text" placeholder="Country / Region*" />
      <AddressInput type="text" placeholder="Street Address*" />
      <AddressInput type="text" placeholder="Postcode / ZIP*" />
      <AddressInput type="text" placeholder="Town / City*" />
      <AddressInput type="text" placeholder="Phone*" />
      <AddressInput type="text" placeholder="Email Address*" />
      <AddressBtn type="submit">Save Address</AddressBtn>
    </form>
  );
};

const Addresses = () => {
  return (
    <AddressesMainContainer>
      <p>
        The following addresses will be used on the checkout page by default.
      </p>
      <AddressesContainer>
        <AddressesSecContainer>
          <StyledHeader>Billing address</StyledHeader>
          <StyledBtn>Add</StyledBtn>
          {false && <AddressForm />}
          <StyledPara>You have not set up this type of address yet.</StyledPara>
        </AddressesSecContainer>
        <AddressesSecContainer>
          <StyledHeader>Shipping address</StyledHeader>
          <StyledBtn>Add</StyledBtn>
          {true && <AddressForm />}
          <StyledPara>You have not set up this type of address yet.</StyledPara>
        </AddressesSecContainer>
      </AddressesContainer>
    </AddressesMainContainer>
  );
};

export default Addresses;
