import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./sidebar";

function SingleProduct() {
    const { id } = useParams();
    const [single, setSingle] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((d) => {
            setSingle(d);
          });
    }, [id]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then((res) => res.json())
          .then((data) => {
            setRelatedProducts(data.products.slice(0, 8)); 
          });
    }, []);

    return ( 
        <>
      <div className="product-detail">
   <div className="container">
     <div className="row">
       <div className="col-lg-9">
         <div className="row align-items-center product-detail-top">
           <div className="col-md-5">
             <div className="product-slider-single">
               <img src={single.thumbnail} alt="Product Image" />
             </div>
           </div>
           <div className="col-md-7">
             <div className="product-content">
               <div className="title">
                 <h2>{single.title}</h2>
               </div>
               <div className="ratting">
                 <i className="fa fa-star" />
                 <i className="fa fa-star" />
                 <i className="fa fa-star" />
                 <i className="fa fa-star" />
                 <i className="fa fa-star" />
               </div>
               <div className="price">
                 {single.price} <span>$25</span>
               </div>
               <div className="details">
                 <p>
                   {single.description}
                 </p>
               </div>
               <div className="quantity">
                 <h4>Quantity:</h4>
                 <div className="qty">
                   <button className="btn-minus">
                     <i className="fa fa-minus" />
                   </button>
                   <input type="text" defaultValue={1} />
                   <button className="btn-plus">
                     <i className="fa fa-plus" />
                   </button>
                 </div>
               </div>
               <div className="action">
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
           </div>
         </div>
         <div className="row product-detail-bottom">
           <div className="col-lg-12">
             <ul className="nav nav-pills nav-justified">
               <li className="nav-item">
                 <a
                   className="nav-link active"
                   data-toggle="pill"
                   href="#description"
                 >
                   Description
                 </a>
               </li>
               <li className="nav-item">
                 <a
                   className="nav-link"
                   data-toggle="pill"
                   href="#specification"
                 >
                   Specification
                 </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" data-toggle="pill" href="#reviews">
                   Reviews (1)
                 </a>
               </li>
             </ul>
             <div className="tab-content">
               <div id="description" className="container tab-pane active">
                 <br />
                 <h4>Product description</h4>
                 <p>
                 {single.description}
                 </p>
               </div>
               <div id="specification" className="container tab-pane fade">
                 <br />
                 <h4>Product specification</h4>
                 <ul>
                   <li>{single.warrantyInformation}</li>
                   <li>{single.shippingInformation}</li>
                   <li>{single.availabilityStatus}</li>
                 </ul>
               </div>
               <div id="reviews" className="container tab-pane fade">
                 <br />
                 <div className="reviews-submitted">
                   <div className="reviewer">
                   {single.title} - <span>01 Jan 2020</span>
                   </div>
                   <div className="ratting">
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                     <i className="fa fa-star" />
                   </div>
                   <p>
                     {single.description}
                   </p>
                 </div>
                 <div className="reviews-submit">
                   <h4>Give your Review:</h4>
                   <div className="ratting">
                     <i className="fa fa-star-o" />
                     <i className="fa fa-star-o" />
                     <i className="fa fa-star-o" />
                     <i className="fa fa-star-o" />
                     <i className="fa fa-star-o" />
                   </div>
                   <div className="row form">
                     <div className="col-sm-6">
                       <input type="text" placeholder="Name" />
                     </div>
                     <div className="col-sm-6">
                       <input type="email" placeholder="Email" />
                     </div>
                     <div className="col-sm-12">
                       <textarea placeholder="Review" defaultValue={""} />
                     </div>
                     <div className="col-sm-12">
                       <button>Submit</button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>                                                                 

                        {/* Related Products Section */}
                        <div className="container">
                            <div className="section-header">
                                <h3>Related Products</h3>
                                <p>Check out other similar products below.</p>
                            </div>
                        </div>
                        <div className="row align-items-center product-slider product-slider-3">
                            {relatedProducts.map((product) => (
                                <div className="col-lg-3" key={product.id}>
                                    <div className="product-item">
                                        <div className="product-image">
                                            <a href={`/products/${product.id}`}>
                                                <img src={product.thumbnail} alt="Product" />
                                            </a>
                                            <div className="product-action">
                                                <a href="#"><i className="fa fa-cart-plus" /></a>
                                                <a href="#"><i className="fa fa-heart" /></a>
                                                <a href="#"><i className="fa fa-search" /></a>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div className="title">
                                                <a href={`/products/${product.id}`}>{product.title}</a>
                                            </div>
                                            <div className="ratting">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="price">
                                                ${product.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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

export default SingleProduct;
