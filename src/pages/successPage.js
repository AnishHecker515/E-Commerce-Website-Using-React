import React from "react";
import { Link } from "react-router-dom";
import './successPage.css';

const SuccessPage = () => {
  return (
    <div className="success-page text-center">
      <div className="container mt-5">
        <h1 className="text-success">Payment Successful!</h1>
        <p className="mt-3">
          Thank you for your purchase! Your payment was processed successfully.
        </p>
        <div className="mt-4">
          <h4>Your Order Details:</h4>
          <ul className="list-unstyled">
            <li>Order Number: <strong>#123456</strong></li>
            <li>Transaction ID: <strong>txn7890xyz</strong></li>
          </ul>
        </div>
        <div className="mt-4">
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
          <Link to="/account" className="btn btn-outline-secondary ml-3">
            View My Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
