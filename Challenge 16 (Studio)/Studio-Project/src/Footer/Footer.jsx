import React from "react";
import "../Footer/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="logo-div">
          <img src="logo.svg" alt="" />
        </div>
        <div className="">
          <div className="footer-links">
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-row-2">
        <div className="footer-logo">
        <ul className="">
          <li>
            <a href="">
              <img src="icon-facebook.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="icon-twitter.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="icon-pinterest.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="icon-instagram.svg" alt="" />
            </a>
          </li>
        </ul>
        </div>
        <div className="footer-copy">
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
