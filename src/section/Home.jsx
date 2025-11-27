import { useEffect, useState } from "react";
import Product from "./Product";
import Header from "../Pages/Header";
import imgone from '../assets/carousel-1.png';
import imgtwo from '../assets/carousel-2.png';
import imgthree from '../assets/carousel-3.png';
import { Link } from "react-router-dom";
function Home() {

  const images = [
    imgone,
    imgtwo,
    imgthree
  ];




  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => { next() }, 2000)
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="home-div">
        <h1>Welcome to <span>Online Shopping</span></h1>
        <p>Top deals, fresh arrivals & trusted brands!</p>
      </div>

      <section id="carousel-section">
        <div className="carousel">

          <button className="carousel-button prev" onClick={prev}>
            &#171;
          </button>

          <button className="carousel-button next" onClick={next}>
            &#187;
          </button>

          <ul>
            {images.map((img, i) => (
              <li
                key={i}
                className={`slide ${i === index ? "active" : ""}`}
              >
                <img src={img} alt={`slide ${i}`} />
              </li>
            ))}
          </ul>

        </div>
      </section>

      <section className="products-container">
                 <h1 id="accessories-header">
          Accessories
        </h1>
        {/* <div className="accessories"> */}
        <div className="accessories-container">
          

          <Link to="/Products" state={{ section: "smartphones-section" }}>
            <div className="sections">
              <img src="/dummyData/assets/smartphone.png" alt="" />
              <h3>Smart Phones</h3>
            </div>
          </Link>
          <Link to="/Products" state={{ section: "laptops-section" }}>
            <div className="sections">
              <img src="/dummyData/assets/laptop.png" alt="" />
              <h3>Laptops</h3>
            </div>
          </Link>

          <Link to="/Products" state={{ section: "gadgets-section" }}>
            <div className="sections">
              <img src="/dummyData/assets/gadgets.png" alt="" />
              <h3>Gadgets</h3>
            </div>
          </Link>
          <Link to="/Products" state={{ section: "pcs-section" }}>
            <div className="sections">
              <img src="/dummyData/assets/PCs.png" alt="" />
              <h3>PCs</h3>
            </div>
          </Link>
        </div>

        {/* </div> */}
        <h1>
            Furniture
          </h1>
        <div className="furniture-container">
          
          <Link to="/Products" state={{ section: "cupboards-section" }}>
            <div className="sections">
              <img src="/dummyData/assets/cupboard.png" alt="" />
              <h3>CupBoards</h3>
            </div>
          </Link>
          <Link to="/Products" state={{ section: "beds-section" }}>
            <div className="sections">
              <img src="/dummyData/assets/bed.png" alt="" />
              <h3>Beds</h3>
            </div>
          </Link>
          <Link to="/Products" state={{ section: "dining-section" }}>
            <div className="sections">
              <img src="/dummyData/assets/dining-table.png" alt="" />
              <h3>Dining Table</h3>
            </div>
          </Link>
          <Link to="/Products" state={{ section: "shelves-section" }}>
            <div className="sections">
              <img src="/dummyData/assets/shelves.png" alt="" />
              <h3>Shelves</h3>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
