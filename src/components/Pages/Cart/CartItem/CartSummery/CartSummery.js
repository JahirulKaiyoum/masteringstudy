import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../../Context/CartContext";
import "./CartSummery.css";

const CartSummery = ({ cart }) => {
    const { total, setTotal } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (price, item) => Number(price) + Number(item.discount),
    0
    );
    setTotal(totalPrice)
  console.log(total);
  return (
    <div className="summery">
      <div className="CartSummery">
        <h3>Order Summery:</h3>
        <h4>Total : <span className="price">{total}</span></h4>
      </div>
      <div className="checkout">
        <Link to="/payment"><button  className="checkout-btn">Checkout</button></Link>
       
      </div>
    </div>
  );
};

export default CartSummery;
