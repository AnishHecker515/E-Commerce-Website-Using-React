// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function Sort() {
//     const {id} = useParams();
//     const [sort, setSort] = useState([]);

//     useEffect(() => {
//         fetch(`https://dummyjson.com/products?sortBy=title&order=asc${id}`))
//           .then((res) => res.json())
//           .then((d) => {
//             setSort(d.sort);
//           });
//       }, [id]);
//     return ( 
//         <>
//          <div className="product-view">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-9">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="row">
//                     <div className="col-md-8">
//                       <div className="product-search">
//                         <input type="text" placeholder="Search" />
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
//                             Product sort by
//                           </a>
//                           <div className="dropdown-menu dropdown-menu-right">
//                             <a href="#" className="dropdown-item">
//                               Newest
//                             </a>
//                             <a href="#" className="dropdown-item">
//                               Popular
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 </div>
//                     </div>
//                   </div>
//                   </div>
//         </>
//      );
// }

// export default Sort;



import { useEffect, useState } from "react";

function Sort() {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('asc'); 

  useEffect(() => {
    fetch(`https://dummyjson.com/products?sortBy=price&order=${sortType}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [sortType]);

  const handleSort = (order) => {
    setSortType(order); 
  };

  return (
    <div className="product-view">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-8">
                    <div className="product-search">
                      <input type="text" placeholder="Search" />
                      <button onClick={() => { /* handle search */ }}>
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="product-sort">
                      <div className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Sort by Price
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => handleSort('asc')}
                          >
                            Lowest Price
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => handleSort('desc')}
                          >
                            Highest Price
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                      <div className="product-card">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="product-img"
                        />
                        <div className="product-info">
                          <h5>{product.title}</h5>
                          <p>{product.description}</p>
                          <p>
                            Price: $
                            {product.price.toFixed(2)}
                          </p>
                          <p>
                            Rating: {product.rating} / 5
                          </p>
                          <p>In Stock: {product.stock}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sort;
