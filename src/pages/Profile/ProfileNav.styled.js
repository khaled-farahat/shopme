import { styled } from "@mui/material";

export const StyledNav = styled("nav")`
  margin-top: 6rem;
  margin-bottom: 2.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledList = styled("ul")`
  display: flex;
  gap: 3rem;

  border-bottom: 1px solid ${({ theme }) => theme.palette.grayColor2};

  & > li {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem; /* 130% */
    color: ${({ theme }) => theme.palette.grayColor};
    padding-top: 1rem;
    padding-bottom: 2rem;
    cursor: pointer;
    text-transform: capitalize;

    &:hover,
    &.active {
      color: #000;
      border-bottom: 2px solid #000;
    }
  }

  @media (max-width: 992px) {
    gap: 0;
    justify-content: space-between;
  }
`;
