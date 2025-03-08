import React from 'react'
import './Home.css'


function Home() {
  return (
    <div className="landing-container">
      {/* Header */}
      <nav className="navbar navbar-light bg-transparent p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="logo">🛍️ ShopEase</h1>
          <a href="/login" className="btn btn-outline-primary">
            Login
          </a>
        </div>
      </nav>

      {/* Center Content */}
      <div className="main-content text-center">
        <h2 className="tagline">
          Your One-Stop Destination for Amazing Deals! 🛒
        </h2>
        <p className="description">
          Join thousands of happy customers shopping for the best products at
          unbeatable prices.
        </p>
        <a href="/signup" className="btn btn-primary btn-lg mt-3">
          Sign Up Now
        </a>
      </div>

      {/* Customer Reviews */}
      <div className="reviews text-center">
        <h3>What Our Customers Say 💬</h3>
        <div className="review-box">
          <p>⭐️⭐️⭐️⭐️⭐️ "Amazing service and fast delivery!" - Sarah J.</p>
          <p>
            ⭐️⭐️⭐️⭐️ "Great deals and easy checkout process!" - Michael T.
          </p>
          <p>
            ⭐️⭐️⭐️⭐️⭐️ "I love the variety of products available!" - Emily
            R.
          </p>
        </div>
      </div>

      {/* Footer with Social Links */}
      <footer className="footer">
        <p>Follow us on</p>
        <div className="social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦 Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘 Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸 Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home