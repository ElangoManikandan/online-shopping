import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import '../Styles/CartItem.css'
function Card(props) {
  return (
        <div className="top-deals-card-div">
        <Link to={`/productDetails/${props.id}`}>
        <img src={props.image}  loading="lazy" alt="" /></Link>
        <Link to={`/productDetails/${props.id}`}>
        <h1>{props.name}</h1>
       
        <p>{props.description}</p>
        </Link>
        {/* <h5 className='view-details'>View Details</h5> */}
        
         <Link to={`/productDetails/${props.id}`}>
        <p><b>Price:</b>{props.price}</p>
        </Link>
        <div className="buttons">
        <button onClick={props.onAdd} id='atc-button'>Add to Cart</button>
        <Link to={`/productDetails/${props.id}`}>
        <button id="buy-now-btn" >View Details</button>
        </Link> 
        </div>
    </div>
  )
}

export default Card