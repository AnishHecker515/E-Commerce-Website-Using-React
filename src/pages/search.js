// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Search() {
//   const [search, setSearch] = useState([]);

// useEffect(() => {
//     const userId = localStorage.getItem("user_id"); 
// if (userId) {
//     fetch(`https://dummyjson.com/products/search?q=${userId}`)  
//       .then((res) => res.json())
//       .then((data) => {
//         setSearch(data.search[0]);
//       });
//   }
// }, []);

// if (!search) {
//   return <div>Loading...</div>; 
// }


//   return (
//     <>
//       <div className="row align-items-center">
//         <div className="col-md-3">
//           <div className="logo">
//             <Link to="#">
//               <img src="img/logo.png" alt="Logo" />
//             </Link>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="search">
//             <input type="text" placeholder="Search" />
//             <button>
//               <i className="fa fa-search" />
//             </button>
//           </div>
//         </div>
//       </div>


//       <div className="product-list">
//         {search && search.length > 0 ? (
//           search.map((product) => (
//             <div key={product.id} className="product-item">
//               <img src={product.thumbnail} alt={product.title} />
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               <p>Rating: {product.rating}</p>
//               <Link to={`/product/${product.id}`}>View Details</Link>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Search;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Search() {
//   const [search, setSearch] = useState([]); 

//   useEffect(() => {
//     const userId = localStorage.getItem("user_id"); 
//     if (userId) {
//       fetch(`'https://dummyjson.com/products/search?q=${userId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.products) {
//             setSearch(data.products); 
//           } else {
//             setSearch([]); 
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//           setSearch([]); 
//         });
//     }
//   }, []);

//   if (search === null) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <>
//       <div className="row align-items-center">
//         <div className="col-md-3">
//           <div className="logo">
//             <Link to="#">
//               <img src="img/logo.png" alt="Logo" />
//             </Link>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="search">
//             <input type="text" placeholder="Search" />
//             <button>
//               <i className="fa fa-search" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="product-list">
//         {search.length > 0 ? (
//           search.map((product) => (
//             <div key={product.id} className="product-item">
//               <img src={product.thumbnail} alt={product.title} />
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               <p>Rating: {product.rating}</p>
//               <Link to={`/product/${product.id}`}>View Details</Link>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Search;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [searchResults, setSearchResults] = useState([]); 
  const [query, setQuery] = useState(""); 
  const [loading, setLoading] = useState(false); 

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

  return (
    <>
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
      </div>

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
            <p>No products found.</p>
          )}
        </div>
      )}
    </>
  );
}

export default Search;
