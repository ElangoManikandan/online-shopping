import Home from './section/Home'
import TopDeals from './section/TopDeals'
import Products from './section/Products'
import ScrollToTop from './section/ScrollToTop'
import Cart from './section/Cart'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import ProductSpec from './section/ProductSpec'
import Purchased from './section/Purchased'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([]);
  const [topDeals, setTopDeals] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data.Products);
        setTopDeals(data.TopDeals);
      });
  }, []);

  return (
    <div className="app-div">
      <BrowserRouter>
        <ScrollToTop />

        <Header products={products} />

        <div className="page-wrapper">
          <Routes>

            <Route path="/" element={<Home products={products} topDeals={topDeals} />} />
            <Route path="/TopDeals" element={<TopDeals topDeals={topDeals} />} />
            <Route path="/Products" element={<Products products={products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productDetails/:id" element={<ProductSpec />} />
            <Route path="/purchased" element={<Purchased />} />

          </Routes>
        </div>

      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App;
