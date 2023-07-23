import { styled } from "@mui/material";

export const AddressesMainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6875rem;
    margin-bottom: 2.5rem;
  }
`;

export const AddressesContainer = styled("div")`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AddressesSecContainer = styled("div")`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2.5rem;
`;

export const StyledHeader = styled("h1")`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
  margin-bottom: 1.5rem;
  /* align-self: flex-start; */
`;
export const StyledBtn = styled("button")`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.grayColor};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const StyledPara = styled("p")`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.palette.grayColor};
`;

export const AddressInput = styled("input")`
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grayColor2};
  padding-bottom: 0.75rem;
  margin-bottom: 2.5rem;

  &::placeholder {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6875rem;
    color: ${({ theme }) => theme.palette.grayColor};
  }
`;

export const AddressBtn = styled("button")`
  padding: 1rem 4rem;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
