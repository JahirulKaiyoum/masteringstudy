import { React, useState } from "react";

import "./ForgotPass.css";

const ForgotPass = () => {
  const [user, setUser] = useState({
    email: "",
  });

  const handleBlur = (e) => {
    let isFormValid;
    if (e.target.name === "email") {
      const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      isFormValid = isEmailValid;
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    console.log(user.email);
    e.preventDefault();
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data.text);

          // sessionStorage.setItem("userToken",data.token)

          alert("Check your email for reset password");
        } else {
          console.log(data.error);

          alert(data.error);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="title">Forgot Password? </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className=" email-box">
              <span className="details">Email</span>
              <input
                className="input"
                type="text"
                name="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                required
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Confirm Email" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
