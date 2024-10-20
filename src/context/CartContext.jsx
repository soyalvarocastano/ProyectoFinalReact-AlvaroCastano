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

    const incrementQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity < updatedCart[index].stock) {
            updatedCart[index].quantity++;
            setCart(updatedCart);
        }
    };

    const decrementQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) { 
            updatedCart[index].quantity--;
            setCart(updatedCart);
        }
    };

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const isInCart = (id) => {
        
        return cart.some((item) => item.id === id);
    };

    return(
    <CartContext.Provider value={[cart, setCart, addItem, removeItem, clearCart, isInCart,incrementQuantity,decrementQuantity]}>
    {children}
    </CartContext.Provider>)

}

