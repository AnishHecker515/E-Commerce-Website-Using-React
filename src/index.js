import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/header';
import Footer from './pages/footer';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';
import ProductDetails from './pages/productdetail';
import Cart from './pages/cart';
import Wishlist from './pages/wishlist';
import Checkout from './pages/checkout';
import MyAccount from './pages/account';
import Users from './pages/users';
import SingleProduct from './pages/singleProduct';
import SideBar from './pages/sidebar';
import SingleUser from './pages/singleUser';
import Category from './pages/category';
import Post from './pages/post';
import SinglePosts from './pages/singlepost';
import Comment from './pages/comments';
import Login from './pages/login';
import Search from './pages/search';
import SuccessPage from './pages/successPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="productdetail" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<MyAccount />} />
          <Route path="single/:id" element={<SingleProduct />} />
          <Route path="singleUser/:id" element={<SingleUser />} />
          <Route path="slidebar" element={<SideBar />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="post" element={<Post />} />
          <Route path="/singleposts/:id" element={<SinglePosts />} />
          <Route path="comments" element={<Comment />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="successPage" element={<SuccessPage/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();