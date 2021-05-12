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
  });
  const [newUser, setNewUser] = useState({});

  const handleBlur = (e) => {
    let isFormValid = true;

    if (e.target.name === "email") {
      console.log(e.target.name, e.target.value);
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      console.log(e.target.name, e.target.value);
      const isPasswordValid = e.target.value.length >= 8;
      const isPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        e.target.value
      );
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

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const signInUser = {
          error: '',
          success: "",
        };
        console.log(data);
        if (data.error) {
          signInUser.error = true;
          setNewUser(signInUser);
          alert(data.error);
        }
        if (data.text) {
          signInUser.success = 'true';
          signInUser.error = '';
          setNewUser(signInUser);
          alert(data.text);
          history.push("/sign-in");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const res = await fetch("http://localhost:5000/signup", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(user),
  //     });

  //     const data = await res.json();

  //     if (data.status === 422 || !data) {
  //      alert(data.error);

  //       //history.push('/sign-in');
  //     }
  //     else {

  //       window.alert('Successfully signed');
  //       history.push('/sign-in');
  //     }
  // }

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
          {newUser.success &&
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "green" }}>
                Account created successfully, CLick login now.
              </p>
            </div>
          }
          {newUser.error &&
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "red" }}>Invalid email and password, Password must contain at least 8 character, 1 small & capital letter and 1 special character.</p>
            </div>
          }
        </form>
        <div></div>
      </div>
      <div style={{ textAlign: "center", paddingBottom: "15px" }}>
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
