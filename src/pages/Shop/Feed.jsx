import React, { useEffect, useState } from "react";
import {
  FeedContainer,
  FeedDiv,
  PaginationDiv,
  StyledPagination,
} from "./Feed.styled";
import Product from "../../components/Product";

const perPage = 6;

const Feed = ({ data, isLoading }) => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const products = data?.slice(start, end);

  const totalPages = Math.ceil(data?.length / perPage);

  useEffect(() => {
    setPage(1);
  }, [data]);

  return data?.length ? (
    <FeedDiv>
      <FeedContainer>
        {products?.map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </FeedContainer>
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
    </FeedDiv>
  ) : (
    <div>no products</div>
  );
};

export default Feed;
