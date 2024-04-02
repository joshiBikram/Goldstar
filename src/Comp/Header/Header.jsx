import React, { useContext } from 'react'
import "./header.css"
import { catData } from '../../Data/catData'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Category from '../../Pages/Category'
import Details from '../../Pages/Details'
import CartContext from '../../CartContext'
import Cart from '../../Pages/Cart'


function Header() {
    let {state, dispatch}=useContext(CartContext)
    return (
        <>
            <div className="top">
                <ul>
                    <li>+977 (01) 4378950, 4373134</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>Delivery</li>
                    <li>Careers</li>
                </ul>
                <ul>
                    <li><i class="bi bi-person-circle"></i>Register</li>
                    <li><i class="bi bi-box-arrow-in-left"></i>Login</li>
                    <li><Link to={"/cart"}><i class="bi bi-bag-fill"></i>Cart({state.cartItems.length})</Link></li>
                </ul>
            </div>

            <header>
                
                    <img className='logo' src="https://www.goldstarshoes.com/MediaThumb/original/Media/Goldstar/Logos/black_logo.png" alt="" />
               <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    {catData.map((a)=>(
                        <li key={a.id}><Link to={`/cat/${a.catname}`}>{a.catname}</Link></li>
                    ))}
                </ul>
                </nav>
                <form>
                <input type="text" />
                </form>
            </header>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cat/:cid/" element={<Category/>}/>
                <Route path="/detail/:id/" element={<Details/>}/>
                <Route path="/cart/" element={<Cart/>}/>
            </Routes>
        </>
    )
}

export default Header