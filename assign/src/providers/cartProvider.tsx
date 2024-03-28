import React, { createContext, useReducer, useContext } from 'react';

// Define types
type Props = {
    children: React.ReactNode;
};

type Product = {
    title: string;
    price: number;
    imgSrc:string;
    category: string;
    // Add other properties as needed
};

type CartState = {
    cart: Product[];
    total: number;
};

type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; index: number };

// Create context
const userCartContext = createContext<CartState | undefined>(undefined);
const cartDispatchContext = createContext<React.Dispatch<CartAction> | undefined>(undefined);

// Custom hooks for accessing context
export const useCart = () => {
    const context = useContext(userCartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const useCartDispatch = () => {
    const context = useContext(cartDispatchContext);
    if (!context) {
        throw new Error('useCartDispatch must be used within a CartProvider');
    }
    return context;
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.total + action.payload.price
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((_, index) => index !== action.index),
                total: state.total - state.cart[action.index].price
            };
        default:
            return state;
    }
};

// CartProvider component
export default function CartProvider({ children }: Props) {
    const [state, dispatch] = useReducer(cartReducer, { cart: [], total: 0 });

    return (
        <userCartContext.Provider value={state}>
            <cartDispatchContext.Provider value={dispatch}>
                {children}
            </cartDispatchContext.Provider>
        </userCartContext.Provider>
    );
}
