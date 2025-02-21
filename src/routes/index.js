import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { route } from "./RoutePath";
import Login from "../View/login/login";
import AuthLayout from "../layout/auth-layout";
import MainLayout from "../layout/main-layout";
import Home from "../View/home/home";
import About from "../View/about/about";
import Contact from "../View/contact/contact";
import Program from "../View/program/program";

const token = localStorage.getItem("token");

const AllRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={""}
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path={route.login}
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path={route.home}
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/program"
          element={
            <MainLayout>
              <Program />
            </MainLayout>
          }
        />
        <Route
          path={route.about}
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path={route.contact}
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoute;
