import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import SideNav from "./SideNav";
import Product from "./Product";
import axios from "axios";
import "./style.css";

const MainPoroduct = () => {
  const [allProduct, SetAllProduct] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      SetAllProduct(response.data);
    };
    fetchdata();
  }, []);

  const fetchdata = (category) => {
    console.log(category);
    const uptodate = allProduct.filter((curElm) => {
      console.log(curElm);
      console.log("curElm.cata", curElm.category, category);

      return curElm.category === category;
    });
    SetAllProduct(uptodate);
  };

  return (
    <div>
      <HeroSection />
      <div className="d-flex ">
        <SideNav allProduct={allProduct} fetchdata={fetchdata} />
        <Product allProduct={allProduct} />
      </div>
    </div>
  );
};

export default MainPoroduct;
