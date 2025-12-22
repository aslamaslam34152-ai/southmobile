import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ cartItems }) {
  return (
    <nav className="navbar navbar-expand-md custom-navbar px-3">
      
      {/* Brand */}
      <Link className="navbar-brand fw-bold text-white" to="/">
        SOUTH MOBILES
      </Link>

      {/* Toggle Button (Mobile) */}
      <button
        className="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/register">Signup</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link cart-link" to="/cart">
              🛒 Cart
              <span className="cart-badge">{cartItems.length}</span>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
