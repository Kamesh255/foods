import React from "react";
import { BiRestaurant, BiCartAlt } from "react-icons/bi";
import "./Style/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav_box">
        <div className="icon">
          <Link
            to="/"
            style={{
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <BiRestaurant style={{ fontSize: 18 }} />
            <h3 style={{ marginLeft: "5px" }}>Food's Restaurant </h3>
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart" style={{ color: "#ffffff" }}>
            <BiCartAlt />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
