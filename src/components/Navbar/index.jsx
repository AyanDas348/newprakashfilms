/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  const router = useRouter();

  const LinkButton = ({ href, children }) => {
    return (
      <div style={{ cursor: "pointer" }} onClick={() => router.push(href)}>
        {children}
      </div>
    )
  }

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <LinkButton href="/">
            <div className={`logo ${logoClass && logoClass}`}>
              <img src="/assets/logo.png" alt="logo" ref={logoRef}
                style={{
                  width: "90px",
                  maxHeight: "102px",
                  paddingTop: "8px",
                  paddingBottom: "8px"
                }}
              />
            </div>
          </LinkButton>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <LinkButton href="/about">
                  <div className="nav-link">About Us</div>
                </LinkButton>
              </li>
              <li className="nav-item">
                <LinkButton href="/distribution">
                  <div className="nav-link">Distribution</div>
                </LinkButton>
              </li>
              <li className="nav-item">
                <LinkButton href="/contact">
                  <div className="nav-link">Contact</div>
                </LinkButton>
              </li>
              {/* <li className="nav-item">
                <LinkButton href="/blogs">
                  <div className="nav-link">Blogs</div>
                </LinkButton>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
