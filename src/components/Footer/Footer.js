import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

    <footer>
      <div class="main-content">
        <div class="left box">
          <h2>About us</h2>
          <div class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum possimus ad ipsum, quia, itaque facilis reiciendis alias velit sapiente architecto, aliquid qui tempore iusto veritatis quos soluta dolorem obcaecati quaerat.
            Dicta eius rem architecto neque. Laborum eveniet voluptate voluptas quos ut eligendi. Iure, repudiandae dicta ad sit id nesciunt animi sunt autem praesentium deserunt nulla veritatis recusandae, est laboriosam debitis!</p>
           
          </div>
        </div>

        <div class="center box">
          <h2>Address</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">London, Usa</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">+04444-765432100</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">abc@example.com</span>
            </div>
          </div>
        </div>

        <div class="right box">
          <h2>Contact us</h2>
          <div class="content">
            <form action="#">
              <div class="email">
                <div class="text">Email *</div>
                <input type="email" required/>
              </div>
              <div class="msg">
                <div class="text">Message *</div>
                <input type="text-area" required/>
              </div>
              <div class="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bottom">
        <center>
          <span class="credit">Created By MasteringStudy | </span>
          <span class="far fa-copyright"></span><span> 2021 All rights reserved.</span>
        </center>
      </div>
    </footer>
  

    );
};

export default Footer;