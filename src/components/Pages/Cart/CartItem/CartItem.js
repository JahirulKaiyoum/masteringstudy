import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
 
  
  const { title,  discount, id } = props.item;
  
  // const { handleCheckOut } = props.handleCheckOut;
  const deleteCourse  = props.deleteCourse;
  // console.log(props);

  return (
    <div className="row cart-items">
      <div className="item-details">
        <h4>{title}</h4>
      </div>
      <div className="price">
        <h4>{discount}</h4>
      </div>
      <div className="delete">
        <button className="delete-btn" onClick={() =>deleteCourse(id)}><h1>x</h1></button>
      </div>
    </div>
  );
};

export default CartItem;
