import styled from "@emotion/styled";

export const BlogsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  & > h1 {
    font-size: 2.0625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.6875rem;
    margin-bottom: 2rem;
  }
`;

export const BlogsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
