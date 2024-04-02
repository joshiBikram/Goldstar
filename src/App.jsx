import React from 'react'
import Header from './Comp/Header/Header'
import Footer from './Comp/Footer/Footer'
import { CartProvider } from './CartContext'


function App() {
  return (
    <>
    <CartProvider>
    <Header/>
    <Footer/>
    </CartProvider>
    </>
  )
}

export default App