import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";

const SignUp = () => {
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName:"",
    email: '',
    password: '',
    
    
  })
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      
    }
    if (e.target.name === "password") {
      const  isPasswordValid = e.target.value.length > 8;
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
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  

  return (
    <div className="container">
        
      <div className="title"> {newUser ? "Registration" : "LogIn"}</div>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="user-details">
            {newUser && <div className="input-box">
              <span className="details">First Name</span>
              {newUser && <input type="text" name="firstName" placeholder="Enter your first name" onBlur={handleBlur} required />}
            </div>}
          {newUser&& <div className="input-box">
            <span className="details">Last Name</span>
             <input type="text" name="lastName" placeholder="Enter your last-name" onBlur={handleBlur} required />
          </div>}
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" name="email" placeholder="Enter your email" onBlur={handleBlur} required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="password" name="password" placeholder="Enter your password" onBlur={handleBlur} required/>
          </div>
        </div>
        <div className="button">
          {newUser ? <input type="submit" value="Register" /> : <input type="submit" value="Log In" />}
        </div>
        {
          user.accountCreated ? <p  style={{color: "green"}}>Account {newUser? "created" :"LoggedIn "} successfully</p> : <p style={{color: "red"}}>{user.error}</p>
        }
        {
            newUser ? <div style={{textAlign:"center"}}>
            <p >Have an account ? <span  onClick={() => setNewUser(!newUser)} className="toggle-btn">Login</span></p>
            </div>: <div style={{textAlign:"center"}}> <p >Don't Have an account ? <span className="toggle-btn" onClick={() => setNewUser(!newUser)}  >SignUp</span></p></div>

            
        }
      </form>
  </div>
  
</div>
   
    );
};

export default SignUp;