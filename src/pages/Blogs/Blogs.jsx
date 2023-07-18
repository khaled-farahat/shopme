import React, { useState } from "react";
import BlogsSidebar from "./BlogsSidebar";
import Feed from "./Feed";
import { BlogsContainer, BlogsSection } from "./Blogs.styled";
import axios from "axios";
import { useQuery } from "react-query";

const fetchBlogs = () => {
  return axios.get("http://localhost:4000/blogs");
};

const BlogsPage = () => {
  const [category, setCategory] = useState(undefined);
  const [searchText, setSearchText] = useState("");

  const { data /*, isLoading, isError, error */ } = useQuery(
    "blogs",
    fetchBlogs
  );

  const filterBlogs = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return data?.data?.filter(
      (blog) =>
        (category
          ? blog.categories?.some(
              (blogCategory) =>
                blogCategory.toLowerCase() === category.toLowerCase()
            )
          : true) &&
        (regex.test(blog.title) ||
          regex.test(blog.description) ||
          regex.test(blog.categories.join(" ")))
    );
  };

  // const categories = [
  //   ...new Set(data?.data.map((blog) => blog.categories).flat()),
  // ];

  const categories = [...new Set(data?.data.flatMap((obj) => obj.categories))];


  const filteredData = filterBlogs(searchText);

  return (
    <BlogsSection>
      <h1>Blogs</h1>
      <BlogsContainer>
        <BlogsSidebar
          searchText={searchText}
          setSearchText={setSearchText}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <Feed data={filteredData} />
      </BlogsContainer>
    </BlogsSection>
  );
};

export default BlogsPage;
