import React, { useContext } from 'react'
import CartContext from '../CartContext'

function Cart() {
    let {state, dispatch}=useContext(CartContext)
  return (
    
    <>
        <h2>Cart List</h2>
        {state.cartItems.map((b)=>(
            <li>{b.title}</li>
        ))}
    </>
  )
}

export default Cart