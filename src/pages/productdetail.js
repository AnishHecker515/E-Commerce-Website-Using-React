function ProductDetails() {
    return ( 
        <>
        <div className="product-detail">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <div className="row align-items-center product-detail-top">
          <div className="col-md-5">
            <div className="product-slider-single">
              <img src="img/product-1.png" alt="Product Image" />

            </div>
          </div>
          <div className="col-md-7">
            <div className="product-content">
              <div className="title">
                <h2>Phasellus Gravida</h2>
              </div>
              <div className="ratting">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="price">
                $22 <span>$25</span>
              </div>
              <div className="details">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  condimentum quam ac mi viverra dictum. In efficitur ipsum
                  diam, at dignissim lorem tempor in. Vivamus tempor hendrerit
                  finibus. Nulla tristique viverra nisl, sit amet bibendum ante
                  suscipit non.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  condimentum quam ac mi viverra dictum. In efficitur ipsum
                  diam, at dignissim lorem tempor in. Vivamus tempor hendrerit
                  finibus. Nulla tristique viverra nisl, sit amet bibendum ante
                  suscipit non. Praesent in faucibus tellus, sed gravida lacus.
                  Vivamus eu diam eros. Aliquam et sapien eget arcu rhoncus
                  scelerisque. Suspendisse sit amet neque neque. Praesent
                  suscipit et magna eu iaculis. Donec arcu libero, commodo ac
                  est a, malesuada finibus dolor. Aenean in ex eu velit semper
                  fermentum. In leo dui, aliquet sit amet eleifend sit amet,
                  varius in turpis. Maecenas fermentum ut ligula at consectetur.
                  Nullam et tortor leo.
                </p>
              </div>
              <div id="specification" className="container tab-pane fade">
                <br />
                <h4>Product specification</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div id="reviews" className="container tab-pane fade">
                <br />
                <div className="reviews-submitted">
                  <div className="reviewer">
                    Phasellus Gravida - <span>01 Jan 2020</span>
                  </div>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
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
        <div className="container">
          <div className="section-header">
            <h3>Related Products</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              viverra at massa sit amet ultricies. Nullam consequat, mauris non
              interdum cursus
            </p>
          </div>
        </div>
        <div className="row align-items-center product-slider product-slider-3">
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-1.png" alt="Product Image" />
                </a>
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
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-2.png" alt="Product Image" />
                </a>
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
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-3.png" alt="Product Image" />
                </a>
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
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-4.png" alt="Product Image" />
                </a>
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
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-5.png" alt="Product Image" />
                </a>
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
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="sidebar-widget category">
          <h2 className="title">Category</h2>
          <ul>
            <li>
              <a href="#">Lorem Ipsum</a>
              <span>(83)</span>
            </li>
            <li>
              <a href="#">Cras sagittis</a>
              <span>(198)</span>
            </li>
            <li>
              <a href="#">Vivamus</a>
              <span>(95)</span>
            </li>
            <li>
              <a href="#">Fusce vitae</a>
              <span>(48)</span>
            </li>
            <li>
              <a href="#">Vestibulum</a>
              <span>(210)</span>
            </li>
            <li>
              <a href="#">Proin phar</a>
              <span>(78)</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-widget image">
          <h2 className="title">Featured Product</h2>
          <a href="#">
            <img src="img/category-1.jpg" alt="Image" />
          </a>
        </div>
        <div className="sidebar-widget brands">
          <h2 className="title">Our Brands</h2>
          <ul>
            <li>
              <a href="#">Nulla </a>
              <span>(45)</span>
            </li>
            <li>
              <a href="#">Curabitur </a>
              <span>(34)</span>
            </li>
            <li>
              <a href="#">Nunc </a>
              <span>(67)</span>
            </li>
            <li>
              <a href="#">Ullamcorper</a>
              <span>(74)</span>
            </li>
            <li>
              <a href="#">Fusce </a>
              <span>(89)</span>
            </li>
            <li>
              <a href="#">Sagittis</a>
              <span>(28)</span>
            </li>
          </ul>
        </div>
        <div className="sidebar-widget tag">
          <h2 className="title">Tags Cloud</h2>
          <a href="#">Lorem ipsum</a>
          <a href="#">Vivamus</a>
          <a href="#">Phasellus</a>
          <a href="#">pulvinar</a>
          <a href="#">Curabitur</a>
          <a href="#">Fusce</a>
          <a href="#">Sem quis</a>
          <a href="#">Mollis metus</a>
          <a href="#">Sit amet</a>
          <a href="#">Vel posuere</a>
          <a href="#">orci luctus</a>
          <a href="#">Nam lorem</a>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
     );
}

export default ProductDetails;