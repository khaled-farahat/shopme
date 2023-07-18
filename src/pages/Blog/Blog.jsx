import React from "react";
import { BlogSection } from "./Blog.styled";
import MainContent from "./MainContent";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const fetchBlog = (id) => {
  return axios.get(`http://localhost:4000/blogs/${id}`);
};

const BlogPage = () => {
  const { blogId } = useParams();

  const { data /*, isLoading, isError, error */ } = useQuery(
    ["blog", blogId],
    () => fetchBlog(blogId)
  );

  return (
    <BlogSection>
      <MainContent blog={data?.data} />
    </BlogSection>
  );
};

export default BlogPage;
