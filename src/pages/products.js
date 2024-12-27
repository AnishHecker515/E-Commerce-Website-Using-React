import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Audio, Puff } from 'react-loader-spinner'
import SideBar from "./sidebar";

function Products() {
  const [products, setProducts] = useState([]);
  const [wishData, setwishData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState({ field: "price", order: "asc" }); 

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((d) => {
        let sortedProducts = [...d.products];
        if (sortType.field === "price") {
          sortedProducts.sort((a, b) =>
            sortType.order === "asc" ? a.price - b.price : b.price - a.price
          );
        } else if (sortType.field === "name") {
          sortedProducts.sort((a, b) =>
            sortType.order === "asc"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title)
          );
        }
        setProducts(sortedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, [sortType]);

  const handleSearch = () => {
    if (query) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleSort = (field, order) => {
    setSortType({ field, order });
  };

  
  const addToWishList = async (n) => {
    await fetch(`https://dummyjson.com/products/${n}`)
          .then((res) => res.json())
          .then((d) => {
            setwishData(p=>[...p, d]);
          });

          localStorage.setItem("wishList", JSON.stringify(wishData))
    //alert(n)
  }
  console.log(wishData)

  return (
    <>
      <div className="product-view">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="product-search">
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
                    <div className="col-md-4">
                      <div className="product-short">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Sort by
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              href="#"
                              className="dropdown-item"
                              onClick={() => handleSort("price", "asc")}
                            >
                              Lowest Price
                              <i className="fa fa-sort-amount-asc ml-2" />
                            </a>
                            <a
                              href="#"
                              className="dropdown-item"
                              onClick={() => handleSort("price", "desc")}
                            >
                              Highest Price
                              <i className="fa fa-sort-amount-desc ml-2" />
                            </a>
                            <a
                              href="#"
                              className="dropdown-item"
                              onClick={() => handleSort("name", "asc")}
                            >
                              Name A-Z
                              <i className="fa fa-sort-alpha-asc ml-2" />
                            </a>
                            <a
                              href="#"
                              className="dropdown-item"
                              onClick={() => handleSort("name", "desc")}
                            >
                              Name Z-A
                              <i className="fa fa-sort-alpha-desc ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {products.length===0 ? (
                <Puff
                visible={true}
                height="80"
                width="80"
                color="#3F69AA"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
                ) : (
                  products.map((product) => (
                    <div key={product.id} className="col-lg-4">
                      <div className="product-item">
                        <div className="product-image">
                          <Link to={`/single/${product.id}`}>
                            <img src={product.thumbnail} alt={product.title} />
                          </Link>
                          <div className="product-action">
                            <a href="#">
                              <i className="fa fa-cart-plus" />
                            </a>
                            <a href="#"  onClick={()=>addToWishList(product.id)}>
                              <i className="fa fa-heart" />
                            </a>
                            <a href="#">
                              <i className="fa fa-search" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="title">
                            <a href="#">{product.title}</a>
                          </div>
                          <div className="rating">
                            {[...Array(Math.round(product.rating)).keys()].map(
                              (star) => (
                                <i key={star} className="fa fa-star" />
                              )
                            )}
                          </div>
                          <div className="price">
                            ${product.price.toFixed(2)}{" "}
                            <span>{product.discountPercentage}% off</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="col-lg-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
