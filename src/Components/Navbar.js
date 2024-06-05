import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navLogo from "../img/capo-logo.avif"

export default function Navbar() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("signUser") || "{}");
  useEffect(() => {
    const handleNav = (e) => {
      if (window.innerWidth <= 768 && !isNavbarCollapsed) {
        const navbar = document.getElementById('navbarSupportedContent')
        if (navbar && !navbar.contains(e.target)) {
          setIsNavbarCollapsed(true)
        }
      }
    }
    document.body.addEventListener('click', handleNav)
    return () => {
      document.body.removeEventListener('click', handleNav)
    }
  }, [isNavbarCollapsed])

  const navbar = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/features", text: "Features" },
    { path: "/user-manual", text: "User Manual" },
    // { path: "/blog", text: "Blog" },
    { path: "/faqs", text: "FAQs" },
    { path: "/contact", text: "Contact" },
  ];

  const isLinkActive = (linkPath) => {
    return linkPath === location.pathname ||
      (linkPath === "/manual" && location.pathname.startsWith("/manual"))
      ? "active"
      : "";
  };

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const closeNavbarOnItemClick = () => {
    if (window.innerWidth <= 768) {
      setIsNavbarCollapsed(true);
    }
  };

  const location = useLocation();

  if (location.pathname === "/adminPanel/addblog" || location.pathname === "/adminPanel/allposts" || location.pathname === "/adminPanel/allcategory" || location.pathname === "/adminPanel/addcategory" || location.pathname === "/adminPanel/board" || location.pathname === "/adminPanel/demoUsers" || location.pathname === "/adminPanel/tickets" || location.pathname === "/user-profile/ticket-generate" || location.pathname === "/user-profile/generated-tickets" || location.pathname === "/user-profile/close-status-tickets" || location.pathname === "/user-profile/open-status-tickets") {
    return null;
  }

  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbarSupportedContent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={navLogo}
              width="224"
              height="56"
              onClick={closeNavbarOnItemClick}
              style={{ maxWidth: "14rem" }}
              alt="school management software"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavbarToggle}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto" style={{ maxWidth: "120%" }}>
              {navbar.map((link) => (
                <li className="nav-item" key={link.path}>
                  <Link
                    className={`nav-link text-dark ${isLinkActive(link.path)}`}
                    aria-current="page"
                    to={link.path}
                    style={{ fontSize: "1.1rem" }}
                    onClick={closeNavbarOnItemClick}
                  >
                    {link.text}
                  </Link>
                </li>

              ))}

              <li className="dropdown nav-item">
                <div className="dropdown-toggle nav-link text-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "1.1rem" }}>
                  Help Center
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" to="/help">Knowledgebase</Link></li>
                  <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                  <li><Link className="dropdown-item" to="/userLogin">Generate Ticket</Link></li>
                </ul>
              </li>
              
              <li className="nav-item">
                <Link to={user && user.name ? "/demo" : "/userSignUp"}>
                  <button
                    className={`btnFill btn btn-sm mx-2`}
                    onClick={closeNavbarOnItemClick}
                    style={{ fontSize: "1.1rem" }}
                  >
                    Request a Demo
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <Link to="/profile-login"> <img src={support} alt="support-img" className="supportImg"></img></Link> */}
      </nav >
    </div >
  );
}
