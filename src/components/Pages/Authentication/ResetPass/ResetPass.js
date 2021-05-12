import React, { useState } from "react";
import { useParams } from "react-router-dom";


const ResetPass = () => {
  const { token } = useParams()
  console.log(token);
  const [user, setUser] = useState({
    password: "",
    CPassword: "",
  });
  const [error, setError] = useState();

  const handleBlur = (e) => {

    let formValid= "true"
     
    if (e.target.name === "password") {

      const isPassFieldValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test( e.target.value);
      const isPasswordLengthValid = e.target.value.length > 8;
      formValid = isPassFieldValid && isPasswordLengthValid;
      //  console.log(e.target.name,e.target.value);
     
    };
   
    if (e.target.name === "CPassword") {
      const isCPasswordFieldValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
      const isCPasswordLengthValid = e.target.value.length > 8;
      
      // console.log(e.target.name,e.target.value);
      
      formValid = isCPasswordLengthValid && isCPasswordFieldValid;
        
    };
    // console.log(formValid);
    
    if (formValid) {
      // console.log(formValid);
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
      console.log(user);
    }
  };
 
  const handleSubmit = (e) => {
    console.log(user.password, user.CPassword);

    e.preventDefault();
    fetch("http://localhost:5000/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: user.password, CPassword: user.CPassword,token:token }),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
        // if (data.success) {
        //   console.log(data);
        //   console.log(data.token);

        //   // sessionStorage.setItem("userToken",data.token)

        //   alert("Login successful");

        // }
        // else {
        //   console.log(data.error);
        //   setError(data.error);

        //   alert("Invalid email or password");
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="title">Rest Password </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className=" email-box">
              <span className="details">Password</span>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter your Password"
                onBlur={handleBlur}
                required
              />
            </div>
            <div className=" email-box">
              <span className="details">Confirm Password</span>
              <input
                className="input"
                type="password"
                name="CPassword"
                placeholder="Confirm password"
                onBlur={handleBlur}
                required
              />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Reset Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
