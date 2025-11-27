import Card from './Card'
import { useState ,useEffect} from 'react'
function TopDeals() {

  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Products.json")
      .then(response => response.json())
      .then(data => setTopProducts(data.TopDeals))
      .then(setTimeout(() => setLoading(false), 600))
  }, []);


 const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product Added!")
  };
  
  if (loading) {
    return <div className="products-loading">Loading Products...</div>;
  }
  

  return (
    <>
      <h1>Top Deals </h1>

      <div className='top-deals-div'>
        {
          topProducts.map((product) => { 
            return <Card key={product.id} id={product.id} name={product.title} image={product.image} price={product.price} description={product.description} onAdd={() => addToCart(product)} /> 
            })}
      </div>
    </>
  )
}

export default TopDeals