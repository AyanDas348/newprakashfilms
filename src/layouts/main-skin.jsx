/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import FacebookPixel from "../components/FacebookPixel";

const MainSkin = ({ children }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        navbar.classList.add("nav-scroll");
        // logo.setAttribute("src", "/assets/img/logo.png");
        logo.setAttribute("src", "/assets/logo.png");
      } else {
        navbar.classList.remove("nav-scroll");
        // logo.setAttribute("src", "/assets/img/logo.png");
        logo.setAttribute("src", "/assets/logo.png");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/skin-green.css" />
      </Head>
      <Navbar navbarRef={navbarRef} logoRef={logoRef} />
      {children}
      <FacebookPixel />
      <Footer />
    </>
  );
};

export default MainSkin;
