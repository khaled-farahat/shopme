import { styled } from "@mui/material";

export const DetailsDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`;

export const StyledForm = styled("form")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const FormTitle = styled("h1")`
  font-size: 2.0625rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.6875rem;
  text-transform: capitalize;
  margin-bottom: 3.3rem;
  margin-left: auto;
  margin-right: auto;
`;

export const FormInput = styled("input")`
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grayColor2};
  padding-bottom: 0.8rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin-bottom: 2.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.palette.grayColor};
  }
`;

export const SecondaryTitle = styled("h2")`
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
`;

export const DisplayNameDiv = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  & > input {
    border: none;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grayColor2};
    padding-bottom: 0.8rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem;
    margin-bottom: 0.5rem;
  }

  & > p {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.palette.grayColor};
  }
`;

export const FormButton = styled("button")`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #000;
  color: #fff;
  outline: none;
  border: 1px solid #000;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
