import { ICartProduct } from '@/interfaces/cart';
import { createContext } from 'react';


interface ContextProps {
    cart: ICartProduct[];

     // Methods
}

export const CartContext = createContext({} as ContextProps)