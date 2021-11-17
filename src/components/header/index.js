import React, { useEffect, useRef } from "react";
import "./header.scss";
import logo from "./../../assets/img/logo@2x.png";

export default function Header() {
  const headerToggle = useRef();
  const headerMenu = useRef();

  useEffect(() => {
    if (headerToggle.current) {
      headerToggle.current.addEventListener("click", function () {
        headerMenu.current.classList.toggle("toggle");
        if (headerMenu.current.classList.contains("toggle")) {
          headerMenu.current.style.display = "block";
        } else {
          headerMenu.current.style.display = "none";
        }
      });
    }
  }, []);

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="header-content">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <button
            ref={headerToggle}
            id="header-toggle"
            className="header-toggle"
          >
            <i className="bi bi-justify "></i>
          </button>
          <div ref={headerMenu} className="header-left">
            <ul className="header-menu">
              <li className="header-menu-item">
                <a href="/" className="header-menu-link">
                  Introduction
                </a>
              </li>
              <li className="header-menu-item">
                <a href="/" className="header-menu-link">
                  Solution
                </a>
              </li>
              <li className="header-menu-item">
                <a href="/" className="header-menu-link">
                  Rate plan
                </a>
              </li>
            </ul>
            <div className="header-rectangle"></div>
            <ul className="header-menu">
              <li className="header-menu-item">
                <a href="/" className="header-menu-link">
                  Login
                </a>
              </li>
              <li className="header-menu-item">
                <a href="/" className="header-menu-link">
                  Apply for free use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
