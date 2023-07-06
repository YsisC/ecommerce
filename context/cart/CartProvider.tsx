import { FC, useEffect, useReducer, ReactNode } from 'react';
import Cookie from 'js-cookie';

import { CartContext, cartReducer } from "./";
import { ICartProduct } from "@/interfaces/cart";



export interface CartState {
    cart: ICartProduct[],
    numberOfItems: number;
}
interface CartProviderProps {
    children: ReactNode;
}

const CART_INITIAL_STATE: CartState = {
    cart: [],
    numberOfItems: 0,
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    // Efecto
    useEffect(() => {
        try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }
    }, []);

    useEffect(() => {
        Cookie.set('cart', JSON.stringify(state.cart))


    }, [state.cart])


    const addProductToCart = (product: ICartProduct) => {
        // dispatch({ type: '[Cart] - Add Product', payload: product });

        //! Nivel 2
        // const productsInCart = state.cart.filter(p => p._id !== product._id && p.size !== product.size);
        // dispatch({ type: '[Cart] - Update products in cart', payload: [...productsInCart, product] })

        //! Nivel Final
        const productInCart = state.cart.some(p => p._id === product._id);
        if (!productInCart) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

        const productInCartButDifferentSize = state.cart.some(p => p._id === product._id && p.size === product.size);
        if (!productInCartButDifferentSize) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

        // Acumular
        const updatedProducts = state.cart.map(p => {
            if (p._id !== product._id) return p;
            if (p.size !== product.size) return p;

            // Actualizar la cantidad
            p.quantity += product.quantity;
            return p;
        });

        dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts });
    }

    const updateCartQuantity = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Change cart quantity', payload: product });
    }
    return (
        <CartContext.Provider value={{
            ...state,
            addProductToCart,
            updateCartQuantity,
        }}>
            {children}
        </CartContext.Provider>
    )
}