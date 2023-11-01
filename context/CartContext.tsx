import { create } from 'domain';
import React, { createContext } from 'react'; 

interface Cart {
    id: string,
    name: string,
    quantity: number,
    priceProduct: number,
    description: string, 
    totalAmount: number
}

export const CartContext = createContext<{cart?: Cart, setCart?: (cart: Cart) => void}>({}); 

export const CartProvider = ({ children, context }: { children: React.ReactElement; context: {}}) => {
    return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}