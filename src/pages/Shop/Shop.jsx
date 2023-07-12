import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { ShopSection } from "./Shop.styled";

// import { useQuery } from "react-query";



const ShopPage = () => {
  // const { data: cachedData } = useQuery("products");

  return (
    <ShopSection>
      <Sidebar />
      <Feed />
    </ShopSection>
  );
};

export default ShopPage;
