import React from "react";
import './style.css'
const SideNav = ({ categories, setCategory }) => {
  return (
    <div className=" side-nave-div bg-light">
      <h4 className="m-2">Categories</h4>
      {categories.map((categery) => {
        return (
          <div key={categery.id}>
            <button
              className="btn btn-warning btn-side-nav  btn-lg btn-md btn-sm"
              onClick={() => {
                setCategory(categery);
              }}
            >
              {categery}
            </button>
          </div>
        );
      })}
      <button className="btn btn-warning btn-side-nav  btn-lg btn-md btn-sm" onClick={()=>{
        setCategory("")
      }}>All</button>
    </div>
  );
};

export default SideNav;
