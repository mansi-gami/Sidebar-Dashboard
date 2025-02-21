import React from "react";
import "./header.css";
import menu from "../../assets/menu-icon.png";

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="header">
      <img className="menu" src={menu} onClick={() => setOpenMenu(!openMenu)} />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Header;
