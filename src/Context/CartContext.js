import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext();


export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState()
   
    return (
        <CartContext.Provider value={{ cart, setCart,total,setTotal}}>
        {props.children}
        </CartContext.Provider>
    );
}


