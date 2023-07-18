import styled from "@emotion/styled";

export const FeedContainer = styled.div`
  flex-basis: 72%;
`;

export const BlogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 48%;
  margin-bottom: 4rem;
`;

export const BlogCardFigure = styled.figure`
  width: 100%;
  margin-bottom: 1.5rem;
  height: 19rem;
  overflow: hidden;
  border-radius: 0.5rem;

  & img {
    width: 100%;
    height: 19rem;
    object-fit: cover;
    border-radius: 0.5rem;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const BlogCardCategoryDate = styled.p`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.palette.grayColor};
`;

export const BlogCardTitle = styled.h1`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
`;

export const BlogCardDescription = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6875rem;
  color: ${({ theme }) => theme.palette.grayColor};
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* start showing ellipsis when 2nd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */
  margin-bottom: 1.5rem;
`;

export const ShowMoreButton = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.grayColor};
  background-color: transparent;
  cursor: pointer;
`;
