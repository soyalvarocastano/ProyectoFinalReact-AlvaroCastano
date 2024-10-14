import { createContext, useState } from "react";


export const CartContext= createContext(false);

export function CartProvider({children}){

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
           
            existingItem.quantity++;
            setCart([...cart]);
        } else {
            
            setCart([...cart, { ...item, quantity: 1 }]); 
        }
    };
    

    const clearCart = () => {
        
        setCart([]);
    };

    const removeItem = (id) => {
        
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    const isInCart = (id) => {
        
        return cart.some((item) => item.id === id);
    };



    return(
    <CartContext.Provider value={[cart, setCart, addItem, removeItem, clearCart, isInCart]}>
    {children}
    </CartContext.Provider>)

}

