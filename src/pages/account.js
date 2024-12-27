import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import './MyAccount.css'; // Importing CSS file

function MyAccount() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("user_id");
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => console.error("Error fetching user data:", error));

      fetch(`https://dummyjson.com/carts`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data.carts);
        })
        .catch((error) => console.error("Error fetching orders:", error));
    }
  }, [userId]);

  if (!userId) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="my-account">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="dashboard-nav" data-toggle="pill" href="#dashboard-tab" role="tab">
                  Dashboard
                </a>
                <a className="nav-link" id="orders-nav" data-toggle="pill" href="#orders-tab" role="tab">
                  Orders
                </a>
                <a className="nav-link" id="payment-nav" data-toggle="pill" href="#payment-tab" role="tab">
                  Payment Method
                </a>
                <a className="nav-link" id="address-nav" data-toggle="pill" href="#address-tab" role="tab">
                  Address
                </a>
                <a className="nav-link" id="account-nav" data-toggle="pill" href="#account-tab" role="tab">
                  Account Details
                </a>
                <a className="nav-link" href="index.html">
                  Logout
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                {/* Dashboard Card */}
                <div className="tab-pane fade show active" id="dashboard-tab" role="tabpanel" aria-labelledby="dashboard-nav">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Dashboard</h4>
                      {user ? (
                        <div className="user-details">
                          {/* Display User's Photo */}
                          <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="user-photo" />
                          <div className="user-info">
                            <p>Welcome, {user.firstName} {user.lastName}</p>
                            <p>Email: {user.email}</p>
                            <p>Company: {user.company?.name}</p>
                            <p>Role: {user.role}</p>
                          </div>
                        </div>
                      ) : (
                        <p>Loading user data...</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Orders Tab */}
                <div className="tab-pane fade" id="orders-tab" role="tabpanel" aria-labelledby="orders-nav">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Orders</h4>
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead className="thead-dark">
                            <tr>
                              <th>No</th>
                              <th>Product</th>
                              <th>Date</th>
                              <th>Price</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{order.productName}</td>
                                <td>{order.date}</td>
                                <td>${order.price}</td>
                                <td>{order.status}</td>
                                <td>
                                  <button>View</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method Tab */}
                <div className="tab-pane fade" id="payment-tab" role="tabpanel" aria-labelledby="payment-nav">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Payment Method</h4>
                      <p>Card Number: {user?.bank?.cardNumber}</p>
                      <p>Card Type: {user?.bank?.cardType}</p>
                    </div>
                  </div>
                </div>

                {/* Address Tab */}
                <div className="tab-pane fade" id="address-tab" role="tabpanel" aria-labelledby="address-nav">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Address</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <h5>Payment Address</h5>
                          <p>{user?.address?.address}, {user?.address?.city}, {user?.address?.state}</p>
                        </div>
                        <div className="col-md-6">
                          <h5>Shipping Address</h5>
                          <p>{user?.address?.address}, {user?.address?.city}, {user?.address?.state}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Details Tab */}
                <div className="tab-pane fade" id="account-tab" role="tabpanel" aria-labelledby="account-nav">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Account Details</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" placeholder="First Name" value={user ? user.firstName : ''} readOnly />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Last Name" value={user ? user.lastName : ''} readOnly />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Phone" value={user ? user.phone : ''} readOnly />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Email" value={user ? user.email : ''} readOnly />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
