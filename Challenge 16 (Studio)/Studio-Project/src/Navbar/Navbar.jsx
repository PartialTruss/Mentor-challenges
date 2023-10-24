import "../Navbar/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <img src="logo.svg" alt="" className="menu-items__mobile-logo" />
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
        <ul className="menu-items-2">
          <li>
            <img src="logo.svg" alt="" />
          </li>
        </ul>
      </div>
      <div className="sub-navbar-section">
        <div className="sub-navbar">
          <h1 className="sub-navbar__header">
            IMMERSIVE EXPERIENCES THAT DELIVER
          </h1>
        </div>
      </div>
    </nav>
  );
}
