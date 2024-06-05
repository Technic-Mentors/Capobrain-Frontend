import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navLogo from "../img/capo-logo.avif"
import userImg from "../img/user-img.png"

export default function UserNavbar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const user = JSON.parse(sessionStorage.getItem("User") || "{}");

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

    if (location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board" || location.pathname === "/admin/demoUsers" || location.pathname === "/admin/tickets") {
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
                            <li className="nav-item">
                                <img src={userImg} className="img-fluid" alt="user-img" style={{ height: "38px" }} data-bs-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample" />
                            </li>
                            <li className="nav-item">
                                <Link to={user && user.name ? "/demo" : "/userSignUp"}>
                                    <button
                                        className={`btn1 btn btn-sm mx-2`}
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
            </nav>
            <div className="container-fluid">
                <div className="row d-flex justify-content-end">
                    <div className="col-md-2">
                        <div className="collapse profile-set" id="collapseExample">
                            <div className="card card-body">
                                <h6 className="text-center">{user.name}</h6>
                                <div className="d-flex justify-content-center">
                                    <h3 className="text-center">{user.name && user.name.charAt(0)}</h3>
                                </div>
                                <p className="text-center">{user.email}</p>
                                <p className="text-center">{user.number}</p>
                                <Link to="/userLogin" className="text-center">Log Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
