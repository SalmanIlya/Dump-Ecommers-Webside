import React from "react";

const SideNav = ({ categories, setCategory }) => {
  return (
    <div className="w-25 p-5 bg-light">
      <h4 className="m-4">Categories</h4>
      {categories.map((categery) => {
        return (
          <div key={categery.id}>
            <button
              className="btn btn-warning m-1"
              onClick={() => {
                setCategory(categery);
              }}
            >
              {categery}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
