import React from "react";
import "./Home.css"

import { ImPriceTag } from "react-icons/im";
import { SiQuicktime } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Link } from 'react-router-dom'; // Add this at the top

function Home1(){

    return(

<div className="container-fluid p-0">

  {/* HERO SECTION */}
  <div className="hero-section py-5">
    <div className="container">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="./phone-removebg-preview.png"
            className="img-fluid hero-img"
            alt="phone"
          />
        </div>
        <div className="col-md-6 text-white">
          <h2 className="fw-bold display-5">SOUTH MOBILE</h2>
          <h5 className="text-warning">Service & Sales</h5>
          <p className="lead">
            We service and sell mobile phones, accessories, and provide
            reliable repair solutions with quality assurance.
          </p>
          <button className="btn btn-warning fw-bold px-4 py-2 mt-3">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* FEATURES */}
  <div className="container py-5">
    <div className="row g-4 text-center">

      <div className="col-lg-4 col-md-6">
        <div className="card feature-card h-100">
          <div className="card-body">
            <ImPriceTag size={45} className="text-success mb-3" />
            <h5>Affordable Price</h5>
            <p>Best service at reasonable pricing without compromising quality.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card feature-card h-100">
          <div className="card-body">
            <SiQuicktime size={45} className="text-warning mb-3" />
            <h5>Quick Services</h5>
            <p>Fast and reliable mobile repair services handled by experts.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mx-auto">
        <div className="card feature-card h-100">
          <div className="card-body">
            <AiFillSafetyCertificate size={45} className="text-primary mb-3" />
            <h5>Safe & Secure</h5>
            <p>Your device is handled with care using certified processes.</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* SERVICE FEATURES */}
  <div className="bg-light py-5">
    <h2 className="text-center text-primary fw-bold mb-5">
      SERVICE FEATURES
    </h2>

    {/* Water Damage */}
    <div className="container mb-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="./images/products/waterdamage1.webp"
            className="img-fluid rounded shadow service-img"
            alt="water damage"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-danger">Water Damage</h3>
          <p>
            Immediate drying and professional servicing can prevent
            permanent damage to internal components.
          </p>
        </div>
      </div>
    </div>

    {/* Motherboard */}
    <div className="container mb-5">
      <div className="row align-items-center flex-md-row-reverse">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="./MotherBoardS.webp"
            className="img-fluid rounded shadow service-img"
            alt="motherboard"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">Motherboard Repair</h3>
          <p>
            We fix complex motherboard issues using advanced tools and expertise.
          </p>
        </div>
      </div>
    </div>

    {/* Battery */}
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="./images/products/battery.webp"
            className="img-fluid rounded shadow service-img"
            alt="battery"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-success">Battery Problems</h3>
          <p>
            Fix fast draining, overheating, and charging issues with genuine batteries.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* FOOTER */}
  <footer className="footer-section text-white py-4">
    <div className="container">
      <div className="row text-center text-md-start">

        <div className="col-md-4 mb-3">
          <h5 className="fw-bold">SOUTH MOBILE</h5>
          <p>Service & sales of mobiles and accessories</p>
          <small>© 2025 All rights reserved</small>
        </div>

        <div className="col-md-4 mb-3">
          <h6 className="fw-bold">Quick Links</h6>
          <Link className="d-block footer-link" to="/">Home</Link>
          <Link className="d-block footer-link" to="/product">Product</Link>
          <Link className="d-block footer-link" to="/signup">Signup</Link>
          <Link className="d-block footer-link" to="/cart">Cart</Link>
        </div>

        <div className="col-md-4">
          <h6 className="fw-bold">Contact</h6>
          <p>📸 Instagram</p>
          <p>💬 WhatsApp</p>
          <p>📞 8525988557</p>
        </div>

      </div>
    </div>
  </footer>

</div>



      

    )
}
export default Home1;
