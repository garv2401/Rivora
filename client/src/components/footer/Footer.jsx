import React from 'react';

import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      
      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-5 fs-m">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>RIVORA
              </h6>
              <p>
              Discover style redefined with Rivora – where quality meets elegance in every piece. Dive into a world of handpicked fashion that complements your individuality. 
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/casual" className="text-reset">Casual</a>
              </p>
              <p>
                <a href="/ethnic" className="text-reset">Ethnic</a>
              </p>
              <p>
                <a href="/formal" className="text-reset">Formal</a>
              </p>
              
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@rivora.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +91 9821639447</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4 fs-m" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold fs-m" href="https://mdbootstrap.com/">rivora.com</a>
      </div>
    </footer>
  );
};

export default Footer;
