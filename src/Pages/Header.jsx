import shop from '../assets/cart.png'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
import SearchBar from '../section/SearchBar'
import hamburger from '../assets/hamburger.png'
import { useState } from 'react'

function Header({ products }) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar">

        <div className="navbar-left">
          <Link to="/">
          <img src={shop} alt="" /></Link>
        </div>

        <div className="navbar-center">
          <SearchBar products={products} />
        </div>

        {/* HAMBURGER ICON */}
        <div className="navbar-hamburger" onClick={() => setOpen(true)}>
          <img src={hamburger} alt="" />
        </div>

        {/* SLIDE MENU */}
        <div className={`navbar-right ${open ? "open-nav" : ""}`}>
          <button className="close-btn" onClick={() => setOpen(false)}>✖</button>

          <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/TopDeals"  onClick={()=>setOpen(false)}>Top Deals</Link>
          <Link to="/Products"  onClick={()=>setOpen(false)}>Products</Link>
          <Link to="/cart"  onClick={()=>setOpen(false)}>Cart</Link>
        </div>

      </div>
    </>
  )
}

export default Header
