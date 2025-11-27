import '../Styles/product.css'
import { Link, useNavigate } from "react-router-dom";

function Product(props) {

  function addToCart(e) {
    e.stopPropagation(); 

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      description: props.description
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product Added!");
  }

  const navigate = useNavigate();

  return (
    <div 
      className="product-card-div" 
      onClick={() => navigate(`/productDetails/${props.id}`)}
    >
      <h2>{props.title}</h2>

      <img src={props.image} alt="" loading="lazy" />

      <p>{props.description}</p>

      <p><b>Price:</b> ₹{props.price}</p>

      <div className="buttons">
        <button onClick={addToCart} id="one">Add to Cart</button>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/productDetails/${props.id}`);
          }} 
          id="two"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Product;
