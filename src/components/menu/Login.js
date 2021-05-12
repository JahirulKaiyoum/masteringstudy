import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import "./Login.css";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const { signedInUser, setSignedInUser } = useContext(UserContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    password: "",
    loginSuccess: "",
    token: "",
  });

  const handleBlur = (e) => {
    let isFormValid = true;
    
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 8;
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
    console.log( user.email,user.password);
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          console.log(data.token);
          setLoggedInUser(data);

          sessionStorage.setItem("userToken", data.token);
          setSignedInUser(data);
          alert("Login successful");
          history.replace(from);
        } else {
          console.log(data.error);
          setError(data.error);

          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="title">LogIn</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
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
            {error ? (
              <div className="text" style={{ textAlign: "center" }}>
                <p style={{ color: "red" }}>{error}</p>
              </div>
            ) : (
              <div className="text">
                <p></p>
              </div>
            )}
          </div>
          <div className="button">
            <input type="submit" value="Log In" />
          </div>
          <div className="">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
// <div className="container">

// <div className="title">LogIn"</div>
// <div className="content">
// <form onSubmit={handleSubmit}>

//     <div className="input-box">
//       <span className="details">Email</span>
//       <input type="text" name="email" placeholder="Enter your email" onBlur={handleBlur} required/>
//     </div>
//     <div className="input-box">
//       <span className="details">Password</span>
//       <input type="password" name="password" placeholder="Enter your password" onBlur={handleBlur} required/>
//     </div>

//   <div className="button">
//       <input type="submit" value="Login" />
//   </div>
//   {
//       user.isloggedIn ?
//       <div style={{textAlign:"center"}}><p style={{ color: "green" }}>Login successfully</p></div>: <div style={{textAlign:"center"}}><p style={{ color: "red" }}>{user.text} </p></div>
//   }
// </form>
// </div>

// </div>
