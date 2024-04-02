import React, { useContext } from 'react'
import { productData } from '../Data/ProductData'
import { Link, useParams } from 'react-router-dom'
import CartContext from '../CartContext'



function Category() {
  let {state, dispatch}=useContext(CartContext)
  let {cid}=useParams();
  let b=productData.filter((a)=>a.category==cid)
  // console.log(state.cartItems)
  return (
    <>
     <section className='product'>
      <h2>Category{cid}</h2>
      <div className="flex">
        {b.map((a)=>(
          <div className="pbox" key={a.id}>
            <img src={a.thumbnail} alt="" />
            <h4>{a.title}</h4>
            <Link to={`/detail/${a.id}`}>Read More</Link>
            <button onClick={()=>dispatch({type: 'addtocart', payload: a})}>Add to Cart</button>
          </div>
        ))}
        
      </div>

    </section>
    </>
  )
}

export default Category