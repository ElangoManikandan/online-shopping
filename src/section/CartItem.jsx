import '../Styles/CartItem.css'
import { Link } from 'react-router-dom'
function CartItem(props) {
  
  return (
    <div className="cart-card-div">
      <Link to={`/productDetails/${props.id}`}>
        <h2>{props.title}</h2>
        </Link>
        <Link to={`/productDetails/${props.id}`}>
        <img src={props.image} alt="" loading='lazy' aria-placeholder='image' />
        </Link>
        <Link to={`/productDetails/${props.id}`}>
        <p>{props.description}</p>
        <h5 className='view-details'>View Details</h5>
        </Link>
        <p><b>Price:</b>{props.price}</p>
        <div className="buttons">
        <button onClick={props.onDelete} id='cart-btn-1'>Remove from Cart</button>
        <Link to={`/productDetails/${props.id}`}>
        <button id='cart-btn-2'>View Details</button>
        </Link>
        </div>
     </div>
  )
}

export default CartItem
