import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*=============== change background header ===============*/

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Smith
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  setActiveNav === "#home"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <li className="uil uil-estate nav__icon"></li>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  setActiveNav === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <li className="uil uil-user nav__icon"></li> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  setActiveNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <li className="uil uil-file-alt nav__icon"></li> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  setActiveNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <li className="uil uil-briefcase-alt nav__icon"></li> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  setActiveNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <li className="uil uil-scenery nav__icon"></li> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  setActiveNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <li className="uil uil-message nav__icon"></li> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
