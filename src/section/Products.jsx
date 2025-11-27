import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Product from "./Product"
import '../Styles/Products.css'
import '../Styles/product.css'


function Products() {

  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const section = location.state?.section;

    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
           const headerHeight =
        document.querySelector("header")?.offsetHeight || 90;
        const yOffset = el.getBoundingClientRect().top + window.pageYOffset - headerHeight -20; 
        window.scrollTo({
        top: yOffset,
        behavior: "smooth"
      });

          // el.scrollIntoView({ top:140,behavior: "smooth" });
        }
      }, 700);
    }
  }, [location]);

  useEffect(() => {
    fetch("/Products.json")
      .then(response => response.json())
      // .then(data => setProducts(data));
      .then(data => {
        setProducts(data.Products.sort((a, b) => a.id - b.id));
        setTimeout(() => setLoading(false), 600)
      })
  }
    , []);
  const smartphones = products.filter((products) => products.category === "smartphones")
  const laptops = products.filter((products) => products.category === "laptops")
  const gadgets = products.filter((products) => products.category === "gadgets")
  const pcs = products.filter((products) => products.category === "pcs")
  const cupboards = products.filter((products) => products.category === "cupboards")
  const beds = products.filter((products) => products.category === "beds")
  const dining_tables = products.filter((products) => products.category === "dining_table")
  const shelves = products.filter((products) => products.category === "shelves")
  if (loading) {
    return <div className="products-loading">Loading Products...</div>;
  }
  return (
    <>
      <h2>Products</h2>
      {/* <div className="products">
    {products.map((product)=>{ return <Product key={product.id}  id={product.id} name={product.name} image={product.image} price={product.price} description={product.description}/>
  })}
    </div> */}
      <section id="smartphones-section">
        <h1 className="products-header">Smartphones</h1>

        <div className="products smartphones">
          {smartphones.map((product) => {
            return <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} description={product.description} />
          })}
        </div>
      </section>
      <section id="laptops-section">
        <h1 className="products-header">Laptops</h1>

        <div className="products laptops">
          {laptops.map((product) => {
            return <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} description={product.description} />
          })}
        </div>
      </section>
      <section id="gadgets-section">
        <h1 className="products-header">Gadgets</h1>

        <div className="products gadgets">
          {gadgets.map((product) => {
            return <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} description={product.description} />
          })}
        </div>
      </section>
      <section id="pcs-section">
        <h1 className="products-header">PCs</h1>

        <div className="products pcs">
          {pcs.map((product) => {
            return <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} description={product.description} />
          })}
        </div>
      </section>
      <section id="cupboards-section">
      <h1 className="products-header">Cupboards</h1>
        <div className="products cupboards">
          {cupboards.map((product) => {
            return <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} description={product.description} />
          })}
        </div>
      </section>
      <section id="beds-section">
      <h1 className="products-header">Beds</h1>
        <div className="products beds">
          {beds.map((product) => {
            return <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} description={product.description} />
          })}
        </div>
      </section>

      <section id="dining-section">
      <h1 className="products-header">Dining-tables</h1>
        <div className="products dining-tables">
          {dining_tables.map((product) => {
            return <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} description={product.description} />
          })}
        </div>
      </section>
      <section id="shelves-section">
      <h1 className="products-header">Shelves</h1>
        <div className="products shelves">
          {shelves.map((product) => {
            return <Product key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} description={product.description} />
          })}
        </div>
      </section>

    </>
  )
}

export default Products