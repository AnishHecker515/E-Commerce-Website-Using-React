// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import SideBar from "./sidebar";

// function Category() {
//   const { id } = useParams();
//   const [category, setCategory] = useState([]);
//   const [query, setQuery] = useState(""); 
//   const [loading, setLoading] = useState(false); 
//   const [sortType, setSortType] = useState("asc"); 

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://dummyjson.com/products/category/${id}?sortBy=price&order=${sortType}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setCategory(data.products);
//       })
//       .catch((error) => console.error("Error fetching category:", error))
//       .finally(() => setLoading(false));
//   }, [id, sortType]);

//   const handleSearch = () => {
//     if (query) {
//       setLoading(true);
//       fetch(`https://dummyjson.com/products/category/${id}/search?q=${query}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setCategory(data.products);
//         })
//         .catch((error) => {
//           console.error("Error fetching search results:", error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   const handleSort = (order) => {
//     setSortType(order);
//   };

//   return (
//     <>
//       <div className="product-view">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-9">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="row">
//                     <div className="col-md-8">
//                       <div className="product-search">
//                         <input
//                           type="text"
//                           placeholder="Search in Category"
//                           value={query}
//                           onChange={(e) => setQuery(e.target.value)}
//                         />
//                         <button onClick={handleSearch}>
//                           <i className="fa fa-search" />
//                         </button>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="product-short">
//                         <div className="dropdown">
//                           <a
//                             href="#"
//                             className="dropdown-toggle"
//                             data-toggle="dropdown"
//                           >
//                             Sort by Price
//                           </a>
//                           <div className="dropdown-menu dropdown-menu-right">
//                             <a
//                               href="#"
//                               className="dropdown-item"
//                               onClick={() => handleSort("asc")}
//                             >
//                               Lowest Price
//                               <i className="fa fa-sort-amount-asc ml-2" />
//                             </a>
//                             <a
//                               href="#"
//                               className="dropdown-item"
//                               onClick={() => handleSort("desc")}
//                             >
//                               Highest Price
//                               <i className="fa fa-sort-amount-desc ml-2" />
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Display Loading */}
//                 {loading ? (
//                   <div>Loading...</div>
//                 ) : (
//                   category.map((c) => (
//                     <div key={c.id} className="col-lg-4">
//                       <div className="product-item">
//                         <div className="product-image">
//                           <Link to={`/single/${c.id}`}>
//                             <img src={c.thumbnail} alt={c.title} />
//                           </Link>
//                           <div className="product-action">
//                             <a href="#">
//                               <i className="fa fa-cart-plus" />
//                             </a>
//                             <a href="#">
//                               <i className="fa fa-heart" />
//                             </a>
//                             <a href="#">
//                               <i className="fa fa-search" />
//                             </a>
//                           </div>
//                         </div>
//                         <div className="product-content">
//                           <div className="title">
//                             <a href="#">{c.title}</a>
//                           </div>
//                           <div className="price">
//                             ${c.price} <span>{c.discountPercentage}% off</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//             <div className="col-lg-3">
//               <SideBar />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Category;


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "./sidebar";

function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState({ field: "price", order: "asc" });

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let sortedCategory = [...data.products];
        if (sortType.field === "price") {
          sortedCategory.sort((a, b) =>
            sortType.order === "asc" ? a.price - b.price : b.price - a.price
          );
        } else if (sortType.field === "name") {
          sortedCategory.sort((a, b) =>
            sortType.order === "asc"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title)
          );
        }
        setCategory(sortedCategory);
      })
      .catch((error) => console.error("Error fetching category:", error))
      .finally(() => setLoading(false));
  }, [id, sortType]);

  const handleSearch = () => {
    if (query) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/category/${id}/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setCategory(data.products);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleSort = (field, order) => {
    setSortType({ field, order });
  };

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
                          placeholder="Search in Category"
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

                {/* Display Loading */}
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  category.map((c) => (
                    <div key={c.id} className="col-lg-4">
                      <div className="product-item">
                        <div className="product-image">
                          <Link to={`/single/${c.id}`}>
                            <img src={c.thumbnail} alt={c.title} />
                          </Link>
                          <div className="product-action">
                            <a href="#">
                              <i className="fa fa-cart-plus" />
                            </a>
                            <a href="#">
                              <i className="fa fa-heart" />
                            </a>
                            <a href="#">
                              <i className="fa fa-search" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="title">
                            <a href="#">{c.title}</a>
                          </div>
                          <div className="price">
                            ${c.price} <span>{c.discountPercentage}% off</span>
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

export default Category;
