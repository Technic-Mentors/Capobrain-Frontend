import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';
import headerImg from "../img/header-img.webp"

export default function Layout() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Helmet>
        <title>User Manual - Capobrain</title>
        {/* open grapgh tag */}
        <meta property="og:title" content="User Manual" />
        <meta property="og:description" content="This user manual is your comprehensive guide to navigating and maximizing our platform. From course creation to grade tracking, Capobrain empowers educators.." />
        <meta property="og:image" content="https://capobrain.com/img/dash.jpg" />
        <meta property="og:url" content="https://capobrain.com/user-manual" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="User Manual" />
        <meta name="twitter:description" content="This user manual is your comprehensive guide to navigating and maximizing our platform. From course creation to grade tracking, Capobrain empowers educators.." />
        <meta name="twitter:image" content="https://capobrain.com/img/dash.jpg" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual",
            "name": "Capobrain",
            "description": "This user manual is your comprehensive guide to navigating and maximizing our platform. From course creation to grade tracking, Capobrain empowers educators.." ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://capobrain.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>

        <link rel="canonical" href="https://capobrain.com/user-manual" />
        <meta name="description" content="This user manual is your comprehensive guide to navigating and maximizing our platform. From course creation to grade tracking, Capobrain empowers educators.." />
      </Helmet>

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
            <div style={{ backgroundColor: "#0dcaf0" }}>
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
