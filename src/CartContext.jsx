import { createContext, useReducer } from 'react'


let CartContext=createContext()
let CartReducer=(state, action)=>{
    switch(action.type)
    {
        case 'addtocart': return{ ...state, cartItems:[...state.cartItems,action.payload]}
    }
}
export const CartProvider=({children})=>{
    const [state, dispatch]=useReducer(CartReducer, {cartItems: []});

    return(
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
    );
}

export default CartContext