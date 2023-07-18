import React from "react";
import {
  CategoryHeader,
  CategoryList,
  SearchContainer,
  SidebarContainer,
} from "./BlogsSidebar.styled";
import { Search } from "@mui/icons-material";

const BlogsSidebar = ({
  searchText,
  setSearchText,
  category,
  setCategory,
  categories,
}) => {
  const handleCategoryClick = (e) => {
    if (category?.toLowerCase() === e.target.innerText.toLowerCase()) {
      setCategory(undefined);
      return;
    }
    setCategory(e.target.innerText.toLowerCase());
  };


  return (
    <SidebarContainer>
      <SearchContainer>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Search />
      </SearchContainer>
      <div>
        <CategoryHeader>Categories</CategoryHeader>
        <CategoryList>
          {categories?.map((cat, i) => (
            <li
              key={i}
              onClick={handleCategoryClick}
              className={
                cat?.toLowerCase() === category?.toLowerCase() ? "active" : ""
              }
            >
              {cat}
            </li>
          ))}
        </CategoryList>
      </div>
    </SidebarContainer>
  );
};

export default BlogsSidebar;
