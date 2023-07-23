import { styled } from "@mui/material";

export const NoItemsDiv = styled("div")`
  display: flex;
  padding: 1.5rem 2.5rem;
  justify-content: space-between;
  background-color: #efefef;
  border-top: 2px solid ${({ theme }) => theme.palette.grayColor};
  width: 100%;
  max-width: 100%;

  & > p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6875rem;
  }

  & > span {
    color: ${({ theme }) => theme.palette.grayColor};
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
  }
`;
