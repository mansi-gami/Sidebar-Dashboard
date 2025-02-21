import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes/RoutePath";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "mansi@gmail.com",
    password: "mansi@123",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const navigate = useNavigate();

  const formSubmit = (data) => {
    if (errors.email || errors.password) {
      return;
    }
    if (user.email === data.email && user.password === data.password) {
      localStorage.setItem("token", "T");
      navigate(route.home);
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="title">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="all-label">
            <div className="label-text">
              <label>Email Address</label>
            </div>
            <input
              className="input-text"
              type="text"
              placeholder="Enter Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="required-text">
            {errors.email && <span>This field is required</span>}
          </div>

          <div className="all-label">
            <div className="label-text">
              <label>Password</label>
            </div>
            <input
              className="input-text"
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="required-text">
            {errors.password && <span>This field is required</span>}
          </div>
          <div className="btn-content">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
