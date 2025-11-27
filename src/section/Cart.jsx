import { useState, useEffect } from "react";
import CartItem from "./CartItem";
function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCartItems());
  }, []);

  const getCartItems = () => {
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : [];
  };
  function removeItem(index){
    if(confirm("Do you want to remove this item from your cart?")){
    const updatedCart=cart.filter((_,i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart))
    }else return;
  }
  return (
    <>
     <div className="cart-page">
      <h1>Cart</h1>
      <div className="products">
        {
          cart.map((product,index) => {
            return <CartItem  
              id={product.id}
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description} 
              onDelete={()=>{removeItem(index)}}/>
          })
        }
      </div>
      </div>
    </>
  )
}

export default Cart