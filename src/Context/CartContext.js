import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext();
const localStorageCartItem = () => {
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    if (cartItem) {
        return JSON.parse(localStorage.getItem('cart'));
       
    }
    else {
        return [];
    }
}

export const CartProvider = (props) => {
    const [cart, setCart] = useState(localStorageCartItem());
    const [total, setTotal] = useState()

    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart));
    // },[cart])
   
    return (
        <CartContext.Provider value={{ cart, setCart,total,setTotal}}>
        {props.children}
        </CartContext.Provider>
    );
}


