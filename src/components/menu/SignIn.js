import React from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.css"

const SignIn = () => {
  return (
    <div>
    </div>
    //   <div className="container">
        
    //     <div className="title">Registration</div>
    //     <div className="content">
    //       <form onSubmit={handleSubmit}>
    //         <div className="user-details">
    //           <div className="input-box">
    //             <span className="details"></span>
    //             {newUser && <input type="text" name="first-name" placeholder="Enter your name" required />}
    //           </div>
    //           <div className="input-box">
    //             <span className="details">Username</span>
    //             {newUser && <input type="text" name="last-name" placeholder="Enter your last-name" required />}
    //           </div>
    //           <div className="input-box">
    //             <span className="details">Email</span>
    //             <input type="text" name="email" placeholder="Enter your email" required/>
    //           </div>
    //           <div className="input-box">
    //             <span className="details">Password</span>
    //             <input type="password" name="password" placeholder="Enter your password" required/>
    //           </div>
    //         </div>
    //         <div className="button">
    //           {newUser ? <input type="submit" value="Register" /> : <input type="submit" value="Log In" />}
    //         </div>
    //         {
    //           user.accountCreated ? <p style={{color: "green"}}>Account {newUser? "created" :"LoggedIn "} successfully</p> : <p style={{color: "red"}}>{user.error}</p>
    //         }
    //         {
    //           newUser ?
    //             <p className='text-center'>Have an account ? <span toggle-Btn onClick={() => setNewUser(!newUser)}>Login</span></p>
    //             : <p className='text-center'>Have an account ? <span className="toggle-Btn" onClick={() => setNewUser(!newUser)}>SignUp</span></p>
    //         }
    //       </form>
    //   </div>
      
    // </div>
    );
};

export default SignIn;