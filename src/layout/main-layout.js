import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { route } from "../routes/RoutePath";
import Sidebar from "../components/Sidebar/Sidebar";
import "../assets/css/main-layout.css";
import Header from "../components/header/header";

const MainLayout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to={route.login} replace />;

  return (
    <div>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className={`main-layout ${openMenu ? "open" : ""}`}> {children}</div>
    </div>
  );
};

export default MainLayout;
