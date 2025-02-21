import React from "react";
import "./Sidebar.css";
import { SidebarData } from "../SidebarData";
import { route } from "../../routes/RoutePath";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ openMenu }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(route.login);
  };

  return (
    <>
      <div className={`sidebar ${openMenu ? "open" : ""}`}>
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                className="row"
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                {" "}
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </li>
            );
          })}
          <button className="btn-logout" onClick={() => handleLogout()}>
            Logout
          </button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
