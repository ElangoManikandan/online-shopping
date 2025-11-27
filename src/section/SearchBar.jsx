import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function SearchBar({ products }) {
  const [text, setText] = useState("");
  const [showBox, setShowBox] = useState(false);
  const navigate=useNavigate();

  const suggestions = products.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );

  const handleBlur = () => {
    setTimeout(() => {
      setShowBox(false);
    }, 200); 
  };
  
  const handleFocus = () => {
    setShowBox(true);
  }

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search Your purchase "
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setShowBox(true);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur} 
      />

      {showBox && text !== "" && (
        <div className="suggestions"> 
          {suggestions.length > 0 ? (suggestions.map((p) => (<Link key={p.id}
                to={`/productDetails/${p.id}`}
                onMouseDown={() => navigate(`/productDetails/${p.id}`)} 
                className="suggestion-item" 
              >
                {p.title}
              </Link>
            ))
          ) : (
            <p className="no-result">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;