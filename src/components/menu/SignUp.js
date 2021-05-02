import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    accountCreated: "",
  });

  const handleBlur = (e) => {
    let isFormValid = true;
    
    if (e.target.name === "email") {
      console.log(e.target.name,e.target.value);
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

    }
    if (e.target.name === "password") {
      console.log(e.target.name,e.target.value);
      const isPasswordValid = e.target.value.length >= 8;
      const isPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
      isFormValid = isPasswordValid && isPassword;
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
        // console.log(data);
        // alert("Account Created successfully")
        // history.push("./sign-in")
      });
  };
  

  return (
    <div className="container">
      <div className="title"> Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onBlur={handleBlur}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last-name"
                onBlur={handleBlur}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onBlur={handleBlur}
                required
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
          {user.accountCreated ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "green" }}>
                Account created successfully, CLick login now.
              </p>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "red" }}>{user.text} </p>
            </div>
          )}
        </form>
        <div></div>
      </div>
      <div style={{ textAlign: "center", paddingBottom:"15px" }}>
        <h1>Or</h1>
        </div>
      <div className="button">
        <button className="login-button">
          <Link to="sign-in" style={{ color: "white" }}>
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
