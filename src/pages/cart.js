import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(null); 

  useEffect(() => {
    const userId = localStorage.getItem("user_id"); 
    if (userId) {
      fetch(`https://dummyjson.com/carts/user/${userId}`)  
        .then((res) => res.json())
        .then((data) => {
          setCart(data.carts[0]);
        });
    }
  }, []);

  // if (!cart) {
  //   return <div>Loading...</div>; 
  // }

  if (!cart) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '24px',
          color: '#6c757d',  
          textAlign: 'center',
        }}
        className="alert alert-warning"
      >
        Currently no items in this cart.
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {cart.products?.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <a href="#">
                          <img src={product.thumbnail} alt={product.title} />
                        </a>
                      </td>
                      <td>
                        <a href="#">{product.title}</a>
                      </td>
                      <td>${product.price}</td>
                      <td>
                        <div className="qty">
                          <button className="btn-minus">
                            <i className="fa fa-minus" />
                          </button>
                          <input
                            type="text"
                            value={product.quantity}
                            readOnly
                          />
                          <button className="btn-plus">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </td>
                      <td>${product.total}</td>
                      <td>
                        <button>
                          <i className="fa fa-trash" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="coupon">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Code</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cart-summary">
              <div className="cart-content">
                <h3>Cart Summary</h3>
                <p>
                  Sub Total<span>${cart.total}</span>
                </p>
                <p>
                  Discount<span>${cart.discountedTotal}</span>
                </p>
                <p>
                  Shipping Cost<span>$10</span>
                </p>
                <h4>
                  Grand Total<span>${cart.discountedTotal + 10}</span>
                </h4>
              </div>
              <div className="cart-btn">
                <Link to = ""><button>Update Cart</button></Link>
                <Link to = "/checkout"><button>Checkout</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
