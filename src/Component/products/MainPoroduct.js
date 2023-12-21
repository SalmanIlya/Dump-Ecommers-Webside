import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import SideNav from "./SideNav";
import Product from "./Product";
import axios from "axios";
import "./style.css";
import { Helmet } from "react-helmet-async";

const MainPoroduct = ({ loginUser }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
            const cats = res.data.map((product) => {
              return product.category;
            });
            setCategories([...new Set(cats)]);
            setAllProduct(res.data);
          })
          .catch((err) => {
            alert("error : ", err.massage);
          });
      } catch (err) {
        alert("error : ", err.massage);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <HeroSection />
      <div style={{ height: "auto", marginBottom: "3rem" }}>
        <h3 className="text-center m-5"> Our Product</h3>

        <div className="d-flex Product-main ">
          <SideNav
            categories={categories}
            setCategory={(category) => setCategory(category)}
          />
          <Product
            allProduct={allProduct}
            category={category}
            loginUser={loginUser}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPoroduct;
