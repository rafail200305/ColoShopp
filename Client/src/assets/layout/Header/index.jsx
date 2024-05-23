import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header>
        <div className="color1">
          <h1>
            COLO<span>SHOP</span>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" style={{ marginRight: "15px" }}>
                HOME
              </NavLink>
              <NavLink to="/add-product" style={{ marginRight: "15px" }}>
                SHOP
              </NavLink>
              <NavLink to="product" style={{ marginRight: "15px" }}>
                PROMOTION
              </NavLink>
              <NavLink to="*" style={{ marginRight: "15px" }}>
                PAGES
              </NavLink>
              <NavLink style={{ marginRight: "15px" }}>BLOG</NavLink>
              <NavLink style={{ marginRight: "15px" }}>CONTACT</NavLink>
            </li>
          </ul>
        </nav>
        <div className="icon">
          <div>
            {" "}
            <IoSearchSharp />
          </div>
          <div>
            <FaRegUser />
          </div>
          <div>
            <MdOutlineShoppingCart />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
