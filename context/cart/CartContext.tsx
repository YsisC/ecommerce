import { ICartProduct } from '@/interfaces/cart';
import { createContext } from 'react';


interface ContextProps {
    cart: ICartProduct[];
    // numberOfItems: number;
    // subTotal: number;
    // tax: number;
    // total: number;

    // Methods
    addProductToCart: (product: ICartProduct) => void;
    // updateCartQuantity: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as ContextProps)