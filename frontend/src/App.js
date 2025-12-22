import './App.css';
import Home1 from './pages/Home1';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './pages/product';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { useState } from 'react';
import Sign from './pages/Signup';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  

  const [cartItems,setCartItems]=useState([]);

  return (
    <div>
      <Router>
        {/* Navigation bar */}
        <nav>
          {/* <Link className="nav-link text-light" to="/products">Products</Link> */}
        </nav>
        <ToastContainer theme='dark' position='top-center'/>
        <Header cartItems={cartItems}/>
        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails  cartItems={cartItems}  setCartItems={setCartItems} />} />
          <Route path="/cart"  element={ <Cart cartItems={cartItems}  setCartItems={setCartItems}  />}/>
          <Route path="/login" element={<Login/>} /> 
          <Route path="/register" element={<Sign />} /> 


    </Routes>
      </Router>
    </div>
  );
}

export default App;
