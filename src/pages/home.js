import { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Slider from "react-slick";


function Home() {
  const [loading, setLoading] = useState(true);
const [searchResults, setSearchResults] = useState([]);

  const [quote, setQuote] = useState(null); 
  const [quoteLoading, setQuoteLoading] = useState(true); 
  const [quoteError, setQuoteError] = useState(null); 

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        setQuoteLoading(true); 
        const response = await fetch('https://dummyjson.com/quotes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.quotes.length); 
        setQuote(data.quotes[randomIndex]); 
      } catch (error) {
        setQuoteError(error.message); 
      } finally {
        setQuoteLoading(false); 
      }
    };

    fetchRandomQuote(); 
  }, []); 

  // useEffect(() => {
  //   const fetchSearchResults = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch('https://dummyjson.com/products');
  //       const data = await response.json();
  //       setSearchResults(data.products);  // Adjust this based on the API response structure
  //     } catch (error) {
  //       console.error("Error fetching search results:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchSearchResults();
  // }, []);
  
    return ( 
        <>
        <>
  {/* Quote Section */}
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
      </div>
        {/* Search Results */}
      {loading ? (
        <div></div>
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
      )}


  {/* <div className="home-slider">
    <div className="main-slider">
      <div className="main-slider-item"> */}
{/* 
      <Slider {...settings}>

        <img src="img/slider-1.jpg" alt="Slider Image" />
      </div>
      <div className="main-slider-item">
        <img src="img/slider-2.jpg" alt="Slider Image" />
      </div>
      <div className="main-slider-item">
        <img src="img/slider-3.jpg" alt="Slider Image" />
        </Slider> */}

      {/* </div>
    </div>
  </div> */}

<Slider {...settings}>
                <div class="main-slider-item"><img src="img/slider-1.jpg" alt="Slider Image" /></div>
                <div class="main-slider-item"><img src="img/slider-2.jpg" alt="Slider Image" /></div>
                <div class="main-slider-item"><img src="img/slider-3.jpg" alt="Slider Image" /></div>
    </Slider>



  {/* Main Slider End */}
  {/* Feature Start*/}
  <div className="feature">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 feature-col">
          <div className="feature-content">
            <i className="fa fa-shield" />
            <h2>Trusted Shopping</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 feature-col">
          <div className="feature-content">
            <i className="fa fa-shopping-bag" />
            <h2>Quality Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 feature-col">
          <div className="feature-content">
            <i className="fa fa-truck" />
            <h2>Worldwide Delivery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 feature-col">
          <div className="feature-content">
            <i className="fa fa-phone" />
            <h2>Telephone Support</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End*/}
  {/* Category Start*/}
  <div className="category">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="category-img">
            <img src="img/category-1.jpg" />
            <a className="category-name" href="">
              <h2>Category Name</h2>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="category-img">
            <img src="img/category-3.jpg" />
            <a className="category-name" href="">
              <h2>Category Name</h2>
            </a>
          </div>
          <div className="category-img">
            <img src="img/category-4.jpg" />
            <a className="category-name" href="">
              <h2>Category Name</h2>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="category-img">
            <img src="img/category-2.jpg" />
            <a className="category-name" href="">
              <h2>Category Name</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Category End*/}
  {/* Featured Product Start */}
  <div className="featured-product">
    <div className="container">
      <div className="section-header">
        <h3>Featured Product</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="row align-items-center product-slider product-slider-4">
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
  </div>
  {/* Featured Product End */}
  {/* Newsletter Start */}
  <div className="newsletter">
    <div className="container">
      <div className="section-header">
        <h3>Subscribe Our Newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="form">
        <input type="email" defaultValue="Your email here" />
        <button>Submit</button>
      </div>
    </div>
  </div>
  {/* Newsletter End */}
  {/* Recent Product Start */}
  <div className="recent-product">
    <div className="container">
      <div className="section-header">
        <h3>Recent Product</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="row align-items-center product-slider product-slider-4">
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
                <img src="img/product-6.png" alt="Product Image" />
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
                <img src="img/product-8.png" alt="Product Image" />
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
                <img src="img/product-9.png" alt="Product Image" />
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
  </div>
  {/* Recent Product End */}
  {/* Brand Start */}
  <div className="brand">
    <div className="container">
      <div className="section-header">
        <h3>Our Brands</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          at massa sit amet ultricies. Nullam consequat, mauris non interdum
          cursus
        </p>
      </div>
      <div className="brand-slider">
        <div className="brand-item">
          <img src="img/brand-1.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-2.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-3.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-4.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-5.png" alt="" />
        </div>
        <div className="brand-item">
          <img src="img/brand-6.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* Brand End */}
  

</>

        </>
     );
}

export default Home;