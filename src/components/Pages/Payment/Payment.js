import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../../Context/CartContext';
import CartSummery from '../Cart/CartItem/CartSummery/CartSummery';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { UserContext } from '../../../Context/UserContext';
const Payment = () => {
     const {cart,setCart}= useContext(CartContext)
    const { signedInUser, setSignedInUser } = useContext(UserContext);

    const handlePayment = (userDetails,paymentId,card) => {
        const orderDetails = { ...signedInUser, Course: cart, orderTime: new Date(), userDetails, paymentId, card };
        console.log(orderDetails);
        fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert('order Complete')
            }).catch((error) => {
                console.log(error);
              });
    }

    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    return (
        


    <Elements stripe={stripePromise}>
    <PaymentForm handlePayment={handlePayment} cart={cart} setCart={setCart}></PaymentForm>
  
        </Elements>
    );
};

export default Payment;