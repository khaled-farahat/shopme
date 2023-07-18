import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BlogCardCategoryDate,
  BlogCardContainer,
  BlogCardDescription,
  BlogCardFigure,
  BlogCardTitle,
  BlogsContainer,
  FeedContainer,
  ShowMoreButton,
} from "./Feed.styled";
import { PaginationDiv, StyledPagination } from "../Shop/Feed.styled";

export const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleBlogClick = () => {
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <BlogCardContainer>
      <BlogCardFigure onClick={handleBlogClick}>
        <img src={blog?.thumbnail} alt="blog" />
      </BlogCardFigure>
      <BlogCardCategoryDate>
        {blog?.categories.join(", ")} - {blog.date}
      </BlogCardCategoryDate>
      <BlogCardTitle onClick={handleBlogClick}>{blog?.title}</BlogCardTitle>
      <BlogCardDescription>{blog?.description}</BlogCardDescription>
      <ShowMoreButton onClick={handleBlogClick}>Read More</ShowMoreButton>
    </BlogCardContainer>
  );
};

const perPage = 4;

const Feed = ({ data }) => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const blogs = data?.slice(start, end);

  const totalPages = Math.ceil(data?.length / perPage);

  useEffect(() => {
    setPage(1);
  }, [data]);

  return (
    <FeedContainer>
      <BlogsContainer>
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </BlogsContainer>
      <PaginationDiv>
        <StyledPagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
          page={page}
          siblingCount={1}
        />
      </PaginationDiv>
    </FeedContainer>
  );
};

export default Feed;
