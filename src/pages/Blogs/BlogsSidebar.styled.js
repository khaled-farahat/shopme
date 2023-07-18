import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  display: flex;
  flex-basis: 23%;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grayColor2};
  justify-content: space-between;
  margin-bottom: 2rem;

  & input {
    border: none;
    outline: none;
    flex-grow: 1;
    &::placeholder {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.6875rem;
    }
  }
`;

export const CategoryHeader = styled.h2`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem; /* 130% */
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & li {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6875rem;
    color: ${({ theme }) => theme.palette.grayColor};
    cursor: pointer;
    transition: 0.3s;
    padding: 0rem 0.5rem;

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.palette.grayColor};
      color: #fff;
    }
  }
`;
