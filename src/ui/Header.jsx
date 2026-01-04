import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div className="navbar">
        <h2>Logo</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Tech stack</li>
          <li>Contact</li>
        </ul>
        <button>Buy Now</button>
      </div>
    </>
  );
}

export default Header;
