import React from "react";
import './style.css'
const SideNav = ({ categories, setCategory }) => {
  return (
    <div className=" side-nave-div">
      
      <div className="main-btn  ">
      {categories.map((categery) => {
        
        return (
          
            <button key={categery.id}
              className="btn btn-warning btn-side-nav  btn-lg btn-md btn-sm"
              onClick={() => {
                setCategory(categery);
              }}
            >
              
              {categery}
            </button>
       
        );
      })}
      <button className="btn btn-warning btn-side-nav  btn-lg btn-md btn-sm" onClick={()=>{
        setCategory("")
      }}>All</button>
      </div>
    </div>
  );
};

export default SideNav;
