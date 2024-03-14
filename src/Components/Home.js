import React, { useEffect, useRef, useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";
import Pricing from "./Pricing";
import Logo from "./Logo";
import Testimonial from "./Testimonial";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

export default function Home() {
  const iframeRef = useRef(null);
  const [originalSrc, setOriginalSrc] = useState(
    "https://www.youtube.com/embed/7k4E6ZveXkI?si=q13MoBvkdhEbuuDA"
  );

  function blockIframe() {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = ""; // Set the src attribute to an empty string
    }
  }

  function resetIframe() {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = originalSrc; // Set the src attribute back to the original value
    }
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div >
      <Helmet>
        <title>Best Educational Management System - Capobrain</title>
        {/* open grapgh tag */}
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
        <meta property="og:image" content="https://capobrain.com/img/about%20capobrain.png" />
        <meta property="og:url" content="https://capobrain.com/" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Home" />
        <meta name="twitter:description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
        <meta name="twitter:image" content="https://capobrain.com/img/about%20capobrain.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/",
            "name": "Capobrain",
            "description": "CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." ,
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

        <link rel="canonical" href="https://capobrain.com/" />
        <meta name="description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
      </Helmet>

      {/* <!-- Carousel Start --> */}
      <div
        className="background-img"
        // style={{ backgroundImage: `url(${"img/bg00.jpg"})` }}
        style={{backgroundColor:"#133D78"}}
      >
        {/* <div className="color-overlay"> */}
        <div className="">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-md-6 mt-5 mb-5 text-white animate__animated animate__zoomIn">
                <h1
                  className="text-white"
                  style={{ fontSize: 60, fontWeight: "bolder" }}
                >
                  <span style={{ fontSize: 50, fontWeight: 300,color:"white" }}>
                    Get Rid Of
                  </span>
                  <br />
                  <span
                    style={{
                      textShadow: " 2px 6px 4px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Managing
                  </span>{" "}
                  <br />
                  <span style={{ fontSize: 50, fontWeight: 300,color:"white" }}>
                    Your School
                  </span>{" "}
                  <br /> Manually
                </h1>
                <p>
                  Familiarize yourself with the world of education and gain
                  knowledge on academic advancements related to teachers,
                  students, parents, and school administration.
                </p>
                <div className="row">
                  <div className="col-md-3">
                    <i className="fa-solid fa-arrow-right me-2"></i>
                    <Link
                      type="button"
                      className="text-white mt-2"
                      to='/contact'
                      style={{ textDecoration: "underline" }}
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="col-md-3 col-12">
                    <i className="fa-solid fa-arrow-right me-2"></i>
                    <Link
                      type="button"
                      className="text-white mt-2"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      to="/video"
                      style={{ textDecoration: "underline" }}
                      onClick={resetIframe}
                    >
                      Demo Video
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mb-2">
                <img
                  src="img/hero.png"
                  className="img-fluid"
                  alt="school management software"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid py-2">
        <div className="container py-5">
          <div className="row g-5 reverse-order">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div>
                <img
                  src="img/about capobrain.png"
                  className="img-fluid"
                  alt="school management software"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              style={{ backgroundColor: "rgb(246 249 255)" }}
            >
              <div className="about-item pt-3 pb-3">
                <h1 className="display-6 mb-2">
                  Welcome To Educational
                  <span> Management Software</span>
                </h1>
                <p style={{ textAlign: "justify" }}>
                  CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents in educational institutions. Its intuitive interface and robust capabilities make managing student information, scheduling classes, and tracking attendance straightforward. This academic software also includes features for educators to create and assign tasks and for parents to stay updated on their child's progress. Our online education software is a comprehensive solution tailored to meet the unique needs of educational institutions, from schools to colleges and universities. Designed to simplify administrative processes and enrich the learning journey, our software empowers educators and administrators alike. With features like attendance management, grade tracking, and communication tools, this education software provides a seamless platform for efficient operations in any educational setting. Explore the future of education management with our online school software.
                </p>
                <div className="">
                  <i className="fa-solid fa-arrow-right me-2"></i>
                  <Link
                    type="button"
                    to='/about'
                    style={{ textDecoration: "underline" }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      <Service />
      <Pricing />
      <Logo />
      <Testimonial />

      {/* video modal */}
      <div className="modal fade" id="video" tabIndex="-1" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog modal-lg" data-backdrop="static">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Demo Video
              </h5>
              <button
                type="button"
                id="closeBtn"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={blockIframe} // Call the blockIframe function on close button click
              ></button>
            </div>
            <div className="modal-body" id="modalBody">
              <div className="ratio ratio-16x9">
                <iframe
                  ref={iframeRef}
                  width="560"
                  height="315"
                  src={originalSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
