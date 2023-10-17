import "./Navbar.css";
import "animate.css";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Features");
  const options = ["Todo List", "Calendar", "Reminders", "Planning"];

  const [activeCompany, setActiveCompany] = useState(false);
  const [selectedOptionCompany, setSelectedOptionCompany] = useState("Company");
  const optionsCompany = ["History", "Our Team", "Blog"];

  return (
    <div className="container">
      <nav className="navbar animate__animated animate__fadeInLeft">
        <div className="navbar-container container">
          <input type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <img src="logo.svg" alt="" className="logo-svg" />
            <div className={`select-menu ${active ? "active" : ""}`}>
              <div className="select-btn" onClick={() => setActive(!active)}>
                <span className="sBtn-text">{selectedOption}</span>
                <img src="icon-arrow-down.svg" alt="" className="arrow" />
                {active && (
                  <ul className="options">
                    {options.map((option, index) => (
                      <li
                        key={index}
                        className="option"
                        onClick={() => setSelectedOption(option)}
                      >
                        <img src={`icon-${option.toLowerCase()}.svg`} alt="" />
                        <span className="option-text">{option}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className={`select-menu ${activeCompany ? "active" : ""}`}>
              <div
                className="select-btn"
                onClick={() => setActiveCompany(!activeCompany)}
              >
                <span className="sBtn-text">{selectedOptionCompany}</span>
                <img src="icon-arrow-down.svg" alt="" className="arrow" />
                {activeCompany && (
                  <ul className="options">
                    {optionsCompany.map((option, index) => (
                      <li
                        key={index}
                        className="option"
                        onClick={() => setSelectedOptionCompany(option)}
                      >
                        <span className="option-text">{option}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <ul className="menu-items__hamburger-menu">
              <li>
                <a href="">Login</a>
              </li>
              <li className="register-btn">
                <a href="">Register</a>
              </li>
            </ul>
          </ul>
          <ul className="menu-items__right">
            <li>
              <a href="">Login</a>
            </li>
            <li className="register-btn">
              <a href="">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
