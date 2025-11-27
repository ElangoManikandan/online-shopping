import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/ProductSpec.css';
import { Link } from 'react-router-dom';

function ProductSpec() {

   const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product Added!")
    console.log(product)
  };
    
  const {id} =useParams();
  const [product,setProduct]=useState();
  const[loading,setLoading]=useState(true);
  
  useEffect(()=> {
    fetch('/Products.json')
    .then(res=>res.json())
    .then(data=>
      {
        
        const item=data.Products.find(p =>p.id===parseInt(id));
        setProduct(item);
        console.log(item)
        console.log(id)
        setTimeout(()=>setLoading(false),800)
      });
},[id]);

    if(loading||!product ){
        return <p className='products-loading'>Loading...</p>
    }


  return (
    <>  
      <div className="product-spec">
        <h1 id="product-spec-title">{product.title}</h1>
        <div className="product-spec-main">
        <div className="product-spec-left">
        <img src={product.image} loading="eager" alt="Image"  id="product-spec-image"/>
        </div>

        <div className="product-spec-box">
        <h2 id="product-spec-desc-title">Product Description</h2>
        {/* <h1 id="product-spec-name">{product.name}</h1> */}
        <p id="product-spec-desc">{product.description}</p>  
        <p id="product-spec-price"><b>Price: </b>  {"₹" + product.price}</p>
        <div className="product-spec-buttons">
        <button onClick={()=>addToCart(product)} id="product-spec-atc">Add to Cart</button>
        <Link to="/purchased"><button id="product-spec-button" >Buy Now</button></Link>
        </div>
        </div>
        </div>
    </div>
  </>

  
)}

export default ProductSpec 