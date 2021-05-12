import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";
import CartSummery from "./CartItem/CartSummery/CartSummery";

const Cart = () => {
  const { cart,setCart } = useContext(CartContext);
  
  console.log(cart);
    const handleCheckOut = (id) => { };
    
    const deleteCourse = (id) => {
        
      const cartItem = cart.filter(item => item.id !== id);
      
      
      setCart(cartItem);
      console.log(cartItem);
        //  cart.forEach((course, index) => {
        //     if (course.id === id) {
        //         cart.splice(index, 1)
        //      }
        //  });
        // setCart(cart);
        // alert('Course removed from cart')
          
    };
    
    if (cart.length === 0)
  return (
      
        <section>
          <div className="content-box">
            <div className="row">
              <div className="cart-one">
              <h1>Nothing is in the cart</h1>
              </div>
            </div>
          </div></section>)
       else  return(
        <section className="Cart-two">
      <div className="content-box">
        <div className="row">
          <div className="cart-item">
            <div className="cart-top">
              <div className="items">
                <h2>Cart Items </h2>
              </div>
              <div className="item-price">
                <h2>Prices</h2>
              </div>
            </div>
            {cart.map((item) => (
              <CartItem
                item={item}
                    key={item.id}
                    deleteCourse={deleteCourse}
               
              ></CartItem>
            ))}
          </div>
          <div className="cart-summery">
            <CartSummery cart={cart}  handleCheckOut={handleCheckOut} setCart={setCart}></CartSummery>
          </div>
        </div>
      </div>
    </section>
      
  );
};

export default Cart;

// <section className="cart">
//             {cart.map(item=><CartItem item={item} key={item.id} handleCheckOut={handleCheckOut}></CartItem>)}
//         </section>

// <div className="content-box">
//             <div className="details">
//             <div className="course-details">
//             <h1>title</h1>
//             <p><b>Course Duration:</b>duration</p>
//             <p><b>Study Mode:</b>mode</p>
//             <p><b>Price:</b><strike><h2>price</h2></strike></p>
//             <h1><b>Discounted Price:</b>discount</h1>
//             <p><b>Entry:-</b> entry</p>
//             <p><b>This course is designed for students who have completed high school
//             but English is not their first language.</b></p>
//             </div>
//             <div className="enroll">
//                 <button > Enroll now</button>
//             </div>

//         </div>
//             </div>
