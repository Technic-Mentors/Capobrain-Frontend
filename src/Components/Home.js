import React, { useEffect, useRef, useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";
import Pricing from "./Pricing";
import Logo from "./Logo";
import Testimonial from "./Testimonial";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import headerImg from "../img/capobrainHeader-img.avif"
import aboutSection from "../img/aboutSection (1).avif"
import Benefits from "./Benefits";
import ChooseUs from "./ChooseUs";
export default function Home() {
  const iframeRef = useRef(null);
  const [originalSrc] = useState(
    "https://www.youtube.com/embed/7k4E6ZveXkI?si=q13MoBvkdhEbuuDA"
  );

  function blockIframe() {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = "";
    }
  }

  function resetIframe() {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = originalSrc;
    }
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>

      {/* <!-- Carousel Start --> */}
      <div
        className="mainHeader-bg-color"
      >
        <div className="mainHeader-overlay shapeSet">
          <div className="headerShape">
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <div className="shape4"></div>
          </div>
          <div className="container">
            <div className="row d-flex py-4 align-items-center justify-content-between">
              <div className="col-md-6 mainHeaderCol">
                <h1
                  className="head-h1"
                >
                  Explore The Best <br /> <span> School & College</span> Management Software
                </h1>
                <p style={{ color: "initial" }}>
                  Familiarize yourself with the world of education and gain
                  knowledge on academic advancements related to teachers,
                  students, parents, and school administration.
                </p>
                <div className="row">
                  <div className="col-md-5 col-6">
                    <Link
                      type="button"
                      className="mt-2 btnFill"
                      to='/contact'
                    >
                      <i className="fa-solid fa-arrow-right me-2 moveIcon text-white"></i>
                      Contact Us
                    </Link>
                  </div>
                  <div className="col-md-5 col-6">
                    <Link
                      type="button"
                      className="mt-2 btnFill"
                      data-bs-toggle="modal"
                      data-bs-target="#video"
                      to="/video"
                      onClick={resetIframe}
                    >
                      <i className="fa-solid fa-arrow-right me-2 moveIcon text-white"></i>
                      Demo Video
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={headerImg}
                  className="img-fluid"
                  loading="lazy"
                  width="600"
                  height="400"
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
          <div className="row">
            <div className="col-md-6">
              <img src={aboutSection} alt="about-section-imge" width="500" height="400" className="img-fluid"></img>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              width="600"
              height="400"
            >
              <div className="about-item pt-3 pb-3">
                <h2 className="mb-2">
                  Welcome To Capobrain School Management Software
                </h2>
                <p style={{ textAlign: "justify" }}> Introducing Capobrain, the ultimate school software designed to streamline operations and enhance efficiency for educational institutions. Whether you are managing a bustling school or a sprawling university, our school management system integrates all aspects of campus life. From student admissions and attendance tracking to staff management and curriculum planning, Capobrain simplifies complex administrative tasks, making it the ideal solution for modern educational environments.</p>
                <p style={{ textAlign: "justify" }}>Capobrain stands out as a comprehensive college management system, offering unparalleled features tailored for higher education. Our campus management system ensures seamless coordination between departments, providing tools for financial management, resource allocation, and academic scheduling. By leveraging Capobrain, educational institutions can foster a more organized, productive, and connected community, revolutionizing the way schools and colleges operate.</p>
                <div className="text-center">
                  <Link
                    type="button"
                    className="btnFill"
                    to='/about'
                  >
                    <i className="fa-solid fa-arrow-right me-2 moveIcon text-white"></i>
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
      <Benefits />
      <ChooseUs />
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
                  loading="lazy"
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
