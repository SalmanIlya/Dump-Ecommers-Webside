import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import SideNav from "./SideNav";
import Product from "./Product";
import axios from "axios";
import "./style.css";

const MainPoroduct = () => {

  const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const cats = response.data.map((product) => {
        return product.category;
      });
      setCategories([...new Set(cats)]);
      setAllProduct(response.data);
    };
    fetchdata();
  }, []);


  return (
    <div>
      <HeroSection />
      <div className="d-flex ">
        <SideNav categories={categories} setCategory={(category) => setCategory(category)} />
        <Product allProduct={allProduct} category={category} />
      </div>
    </div>
  );
};

export default MainPoroduct;
