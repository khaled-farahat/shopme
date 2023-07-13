import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { ShopSection } from "./Shop.styled";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

// import { useQuery } from "react-query";

// const fetchProducts = async () => {
//   return axios.get('https://dummyjson.com/products');
// }

const fetchProducts2 = async () => {
  return axios.get("http://localhost:4000/products");
};

const ShopPage = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState(undefined);
  const [sortBy, setSortBy] = useState(undefined);
  const [value1, setValue1] = useState([0, 100]);


  // const { data: cachedData } = useQuery("products");

  const queryClient = useQueryClient();

  const cachedData = queryClient.getQueryData("products");

  const { data, isLoading /*, isError, error */ } = useQuery(
    "products",
    fetchProducts2,
    {
      initialData: cachedData && cachedData,
    }
  );

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    let filteredData = data?.data?.filter(
      (product) =>
        (category ? product.category.toLowerCase() === category.toLowerCase() : true) &&
        (regex.test(product.title) ||
          regex.test(product.description) ||
          regex.test(product.brand) ||
          regex.test(product.category)) &&
        (product.price >= value1[0] && product.price <= value1[1])
    );
    if (sortBy) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sortBy.toLowerCase()] < b[sortBy.toLowerCase()]) {
          return -1;
        }
        if (a[sortBy.toLowerCase()] > b[sortBy.toLowerCase()]) {
          return 1;
        }
        return 0;
      });
    }
    return filteredData;
  };

  const categories = [
    ...new Set(data?.data.map((product) => product.category.toLowerCase())),
  ];

  const products = filterPrompts(searchText);

  return (
    <ShopSection>
      <Sidebar
        searchText={searchText}
        setSearchText={setSearchText}
        categories={categories}
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        value1={value1}
        setValue1={setValue1}
        lowestPrice={0}
        highestPrice={100}
      />
      <Feed data={products} isLoading={isLoading} />
    </ShopSection>
  );
};

export default ShopPage;
