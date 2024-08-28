import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import headerImg from "../img/header-img.webp"

export default function Layout() {
  return (
    <div style={{ overflowX: "hidden" }}>

      <div className="home-container">
        <div className="home-container-overlay">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between px-5">
              <div className="col-md-6">
                <div
                >
                  <div className="">
                    <div>
                      <h1 className="animate__animated animate__zoomIn">
                        Eye-catching design & User Friendly
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img src={headerImg} alt="header-img" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <h1 className="text-center">Capobrain <span> User</span> Guide</h1>
        <p style={{ textAlign: "justify" }}>Explore the full potential of Capobrain, your ultimate online education management system. This user manual is your comprehensive guide to navigating and maximizing our platform. From course creation to grade tracking, Capobrain empowers educators, students, and administrators. Benefit from real-time collaboration, attendance tracking, and detailed analytics, all explained in this guide. Secure access controls and a centralized hub for resources make Capobrain the ideal solution for <a href="https://mentorsacademia.com/" style={{ textDecoration: "none" }} target="blank"> modern education</a>. Revolutionize your experience with this manual, ensuring you harness the full power of Capobrain.</p>
      </div>
      <div className="cintainer-fluid mb-3">
        <div className="row mt-3">
          <div className=" col-md-3">
            <div style={{ backgroundColor: "var(--primary-color)" }}>
              <div className="pb-3 pt-2 outlet">
                <Navigation />
              </div>
            </div>
          </div>

          <div className="col-md-9 mt-3 mb-5" style={{ textAlign: "justify" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
