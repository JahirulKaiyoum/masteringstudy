import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ad ipsum, quia, itaque facilis reiciendis alias velit sapiente architecto, aliquid qui tempore iusto veritatis quos soluta dolorem obcaecati quaerat.
            Dicta eius rem architecto neque. Laborum eveniet voluptate voluptas quos ut eligendi. Iure, repudiandae dicta ad sit id nesciunt animi sunt autem praesentium deserunt nulla veritatis recusandae, est laboriosam debitis!</p>
           
          </div>
        </div>

        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">London, Usa</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+04444-765432100</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">abc@example.com</span>
            </div>
          </div>
        </div>

        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required/>
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <input type="text-area" required/>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By MasteringStudy | </span>
          <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
        </center>
      </div>
    </footer>
  

    );
};

export default Footer;