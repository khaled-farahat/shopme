import React from "react";
import Landing from "./Landing";
import HomeProducts from "./HomeProducts";
import axios from "axios";
import { useQuery } from "react-query";

// const fetchProducts = async () => {
//   return axios.get('https://dummyjson.com/products');
// }

const fetchProducts2 = async () => {
  return axios.get('http://localhost:4000/products');
}

const HomePage = () => {


  const { data, isLoading/*, isError, error */} = useQuery('products', fetchProducts2);

  // console.log(data);

  return (
    <div>
      <Landing />
      <HomeProducts data = {data?.data} isLoading = {isLoading}/>
    </div>
  );
};

export default HomePage;
