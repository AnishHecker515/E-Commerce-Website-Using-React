import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
// import { Vortex } from "react-loader-spinner";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  // const [quote, setQuote] = useState(null); 
  // const [quoteLoading, setQuoteLoading] = useState(true); 
  // const [quoteError, setQuoteError] = useState(null); 

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  };

  useEffect(() => {
    const storedLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (storedLoggedIn !== isLoggedIn) {
      setIsLoggedIn(storedLoggedIn);
    }
  }, [isLoggedIn]);

  const handleSearch = () => {
    if (query) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.products) {
            setSearchResults(data.products);
          } else {
            setSearchResults([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setSearchResults([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // useEffect(() => {
  //   const fetchRandomQuote = async () => {
  //     try {
  //       setQuoteLoading(true); 
  //       const response = await fetch('https://dummyjson.com/quotes');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       const randomIndex = Math.floor(Math.random() * data.quotes.length); 
  //       setQuote(data.quotes[randomIndex]); 
  //     } catch (error) {
  //       setQuoteError(error.message); 
  //     } finally {
  //       setQuoteLoading(false); 
  //     }
  //   };

  //   fetchRandomQuote(); 
  // }, []); 

  return (
    <>
      {/* Top Header Start */}
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <Link to="#">
                  <img src="img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="search">
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="user d-flex justify-content-end align-items-center">
                <div className="dropdown mr-3">
                  <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                    My Account
                  </Link>
                  <div className="dropdown-menu">
                    {isLoggedIn ? (
                      <>
                        <Link to="/" className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </Link>
                      </>
                    ) : (
                      <Link to="/login" className="dropdown-item" onClick={handleLogin}>
                        Login
                      </Link>
                    )}
                    <Link to="/register" className="dropdown-item">
                      Register
                    </Link>
                  </div>
                </div>

                <div className="dropdown mr-3">
                  <Link to="/users">All Users</Link>
                </div>

                <div className="cart">
                  <i className="fa fa-cart-plus" />
                  <span>(0)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Header End */}

      {/* Header Start */}
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to="#" className="navbar-brand">
              MENU
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav m-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/products" className="nav-item nav-link">
                  Products
                </Link>
                <div className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                    Pages
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/products" className="dropdown-item">
                      Product
                    </Link>
                    <Link to="/productdetail" className="dropdown-item">
                      Product Detail
                    </Link>
                    <Link to="/cart" className="dropdown-item">
                      Cart
                    </Link>
                    <Link to="/wishlist" className="dropdown-item">
                      Wishlist
                    </Link>
                    <Link to="/checkout" className="dropdown-item">
                      Checkout
                    </Link>
                    <Link to="/login" className="dropdown-item">
                      Login &amp; Register
                    </Link>
                    <Link to="/account" className="dropdown-item">
                      My Account
                    </Link>
                    <Link to="/post" className="dropdown-item">
                      All Posts
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Header End */}

      {/* Quote Section
      <div className="quote-section text-center my-4">
        {quoteLoading ? (
          <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        
        ) : quoteError ? (
          <p>Error fetching quote: {quoteError}</p>
        ) : (
          quote && (
            <blockquote>
              <p>"{quote.quote}"</p>
              <footer>- {quote.author}</footer>
            </blockquote>
          )
        )}
      </div> */}

      {/* Search Results
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-list">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      )} */}

      <Outlet />
    </>
  );
};

export default Header;
