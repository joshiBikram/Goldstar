import React from 'react'
import { productData } from '../Data/ProductData';
import { useParams } from 'react-router-dom';


function Details() {
  let {id}=useParams()
  let b=productData.find((a)=>a.id==id)
  return (
    <>
     <h2>{b.title}</h2>
     <img src={b.thumbnail} alt="" />
     <p>{b.description}</p>
     <p>Price:{b.price}</p>
    </>
  )
}

export default Details