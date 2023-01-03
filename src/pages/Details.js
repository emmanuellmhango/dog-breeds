import React from "react";
import { NavLink } from "react-router-dom";

const Details = () => {
  return (
    <div className="itemContainer">
      <div className="nav-back">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
      </div>
      <div className="details">
        <p>item list details here </p>
      </div>
    </div>
  );
};

export default Details;