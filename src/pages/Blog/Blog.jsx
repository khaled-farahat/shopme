import React from "react";
import { BlogSection } from "./Blog.styled";
import MainContent from "./MainContent";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import BlogComments from "./BlogComments";

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
      <div style={{
        width: "42rem",
        marginBottom: "4rem",
      }}>
        <CommentForm />
      </div>
      <BlogComments />
    </BlogSection>
  );
};

export default BlogPage;
