import { useEffect, useState } from "react";

function Checkout() {
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("user_id"); 
    if (userId) {
      fetch(`https://dummyjson.com/carts/user/${userId}`)  
        .then((res) => res.json())
        .then((data) => {
          if (data.carts && data.carts.length > 0) {
            setCheckout(data.carts[0]); 
          }
        });
    }
  }, []);

  // if (!checkout) {
  //   return <div>Loading...</div>; 
  // }

  if (!checkout) {
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
        Currently no items for Checkout.
      </div>
    );
  }

  return (
    <>
      <div className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="billing-address">
                <h2>Billing Address</h2>
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Mobile No"
                    />
                  </div>
                  <div className="col-md-12">
                    <label>Address</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Country</label>
                    <select className="custom-select">
                      <option selected="">United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>India</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>City</label>
                    <input className="form-control" type="text" placeholder="City" />
                  </div>
                  <div className="col-md-6">
                    <label>State</label>
                    <input className="form-control" type="text" placeholder="State" />
                  </div>
                  <div className="col-md-6">
                    <label>ZIP Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="newaccount"
                      />
                      <label className="custom-control-label" htmlFor="newaccount">
                        Create an account
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="shipto"
                      />
                      <label className="custom-control-label" htmlFor="shipto">
                        Ship to different address
                      </label>
                    </div>
                  </div>
                </div>
              </div>


              <div className="shipping-address">
                <h2>Shipping Address</h2>
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Mobile No"
                    />
                  </div>
                  <div className="col-md-12">
                    <label>Address</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Country</label>
                    <select className="custom-select">
                      <option selected="">United States</option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>City</label>
                    <input className="form-control" type="text" placeholder="City" />
                  </div>
                  <div className="col-md-6">
                    <label>State</label>
                    <input className="form-control" type="text" placeholder="State" />
                  </div>
                  <div className="col-md-6">
                    <label>ZIP Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-5">
              <div className="checkout-summary">
                <h2>Cart Total</h2>
                <div className="checkout-content">
                  <h3>Products</h3>
                  {checkout.products.map((product) => (
                    <p key={product.id}>
                      {product.title} x {product.quantity}
                      <span>${product.discountedTotal.toFixed(2)}</span>
                    </p>
                  ))}
                  <p className="sub-total">
                    Sub Total <span>${(checkout.total).toFixed(2)}</span>
                    {/* <span>${checkout.total.toFixed(2)}</span> */}
                  </p>
                  <p>
                  Discounted Price <span>${checkout.discountedTotal}</span>
                </p>
                  <p className="ship-cost">
                    Shipping Cost<span>$10</span> 
                  </p>
                  <h4>
                    Grand Total
                    {/* <span>${checkout.total.toFixed(2)}</span> */}
                    Grand Total<span>${checkout.discountedTotal + 10}</span>
                    {/* <span>${(checkout.discountedTotal + 10).toFixed(2)}</span> */}
                  </h4>
                </div>
              </div>


              <div className="checkout-payment">
                <h2>Payment Methods</h2>
                <div className="payment-methods">
                  <div className="payment-method">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="payment-1"
                        name="payment"
                      />
                      <label className="custom-control-label" htmlFor="payment-1">
                        Paypal
                      </label>
                    </div>
                  </div>
                  <div className="payment-method">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="payment-2"
                        name="payment"
                      />
                      <label className="custom-control-label" htmlFor="payment-2">
                        Payoneer
                      </label>
                    </div>
                  </div>
                  <div className="payment-method">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="payment-3"
                        name="payment"
                      />
                      <label className="custom-control-label" htmlFor="payment-3">
                        Check Payment
                      </label>
                    </div>
                  </div>
                  <div className="payment-method">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="payment-4"
                        name="payment"
                      />
                      <label className="custom-control-label" htmlFor="payment-4">
                        Direct Bank Transfer
                      </label>
                    </div>
                  </div>
                  <div className="payment-method">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="payment-5"
                        name="payment"
                      />
                      <label className="custom-control-label" htmlFor="payment-5">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className="checkout-btn">
                    <form method="post" action="http://localhost:1111/checkout">
                      <div>
                        <input
                          name="checkoutData"
                          type="hidden"
                          value={JSON.stringify(checkout)}
                        />
                    <input className="btn btn-danger" type="submit" value="Place Order" />
                  </div>
                </form>
              </div>

                {/* <div className="checkout-btn">
                  <button>Place Order</button>
                </div> */}
                {/* <form method="post" action="http://localhost:1111/checkout">
                 <div>
                <input name="checkoutData" type="text" value={JSON.stringify(checkout)}/>
                <input classname="btn btn-danger" type="submit" />
                </div>

                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
