import React, { useEffect } from "react";
import Testimonial from "./Testimonial";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import webDevelopment from "../img/about-img.webp"
import headerImg from "../img/header-img.webp"
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>

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
                        Transforming Education Through Technology
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
      <div>
        <div>
          <div className="container">
            <div className="mb-3" style={{ border: "none" }}>
              <div className="row justify-content-center g-0">
                <div className="col-md-10">
                  <div className="card-padding mt-3">
                    <p style={{ textAlign: "justify" }}> Introducing Capobrain, the ultimate school software designed to streamline operations and enhance efficiency for educational institutions. Whether you are managing a bustling school or a sprawling university, our school management system integrates all aspects of campus life. From student admissions and attendance tracking to staff management and curriculum planning, Capobrain simplifies complex administrative tasks, making it the ideal solution for modern educational environments.</p>
                    <p style={{ textAlign: "justify" }}>Capobrain stands out as a comprehensive college management system, offering unparalleled features tailored for higher education. Our campus management system ensures seamless coordination between departments, providing tools for financial management, resource allocation, and academic scheduling. By leveraging Capobrain, educational institutions can foster a more organized, productive, and connected community, revolutionizing the way schools and colleges operate.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3" style={{ border: "none" }}>
              <div className="row g-0 reverse-order">
                <div className="col-md-4">
                  <img
                    src={webDevelopment}
                    className="img-fluid rounded-start"
                    alt="school management software"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-padding">
                    <h1 className="">
                      Our Web Development Journey
                    </h1>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Our journey in the digital realm has been nothing short of
                      remarkable. With a talented team of developers and a
                      commitment to delivering top-notch solutions, we’ve been
                      privileged to work on a diverse range of web development
                      projects. Our mission is to transform ideas into engaging,
                      functional, and visually stunning websites that captivate
                      audiences and drive results.Whether it’s e-commerce
                      platforms, corporate websites, or custom web applications,
                      we’ve successfully completed projects that have not only
                      met but exceeded our clients’ expectations. Our secret
                      sauce? A blend of cutting-edge technologies, creative
                      ingenuity, and a passion for crafting digital experiences
                      that leave a lasting impression. Our portfolio boasts a
                      rich tapestry of web development successes. Our journey is
                      marked by projects that have pushed the boundaries of
                      what’s possible on the web. We take pride in our ability
                      to understand our clients’ unique requirements and turn
                      them into reality. From seamless user interfaces to robust
                      backend systems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row webFeatures d-flex justify-content-between">
              <div className="col-md-3 col-6 d-flex mt-3">
                <i className="fa-solid fa-school fa-2x me-2"></i>
                <h5>
                  Academic <br /> Excellence
                </h5>
              </div>
              <div className="col-md-3 col-6 d-flex mt-3">
                <i className="fas fa-bullseye fa-2x me-2"></i>
                {/* <i className=""></i> */}
                <h5>
                  Al-powered <br /> Features
                </h5>
              </div>
              <div className="col-md-3 col-6 d-flex mt-3">
                <i className="fa-regular fa-clock fa-2x me-2"></i>
                <h5>
                  24/7 <br /> Support
                </h5>
              </div>
              <div className="col-md-2 col-6 d-flex mt-3">
                <i className="fa-solid fa-pencil fa-2x me-2"></i>
                <h5>
                  Regular <br /> Updates
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div
          className="about2 elevateGreeing mt-5"
        >
          <div className="elevateGreeing-overlay">
            <div className="container pt-4 pb-3">
              <h1 className="text-center">
                Technic Mentors Services
              </h1>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <p style={{ textAlign: "justify" }}>
                    Technic mentors is the best IT consulting company in
                    Gujranwala to look at when searching for extraordinary
                    software and technology solutions. We provide value-added
                    and quality products and services. Our team is specialized
                    and experienced and provides our clients with the finest
                    experience ever. We provide IT solutions for commercial
                    clients, government, institutions, and schools, that are
                    aimed to improve the learning and development ecosystem.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="services">
                <div className="container">
                  <div
                    className="text-center"
                    style={{ maxWidth: "600px" }}
                  ></div>
                  <div className="row g-5 services-inner">
                    <div
                      className="col-md-6 col-lg-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h5 className="card-title">
                              Web Design & Development
                            </h5>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Web development services encompass two essential
                              steps: web design and web development. Web design
                              focuses on the aesthetics and visual appeal of
                              your website,while it emphasizes its
                              functionality.
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/web-development-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h5 className="card-title">Software Development</h5>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Software development services encompass a series
                              of essential steps involving the developing
                              business solutions. These steps include
                              identifying needs, analyzing requirements,
                              designing, developing, testing.
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/software-development-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h5 className="card-title">
                              Mobile App Development
                            </h5>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Mobile app development services play a pivotal
                              role in elevating businesses, offering a range of
                              benefits. In today’s digital landscape, mobile
                              applications have become preferred.
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/mobile-app-development-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 mb-3"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h5 className="card-title">
                              Search Engine Optimization
                            </h5>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              SEO services involve optimizing your website to
                              improve its ranking on search engine result pages
                              when users search for products or services related
                              to your business on Google, Bing, or other search
                              engines.
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/seo-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 mb-3"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h5 className="card-title">Digital Marketing</h5>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              The promotion of brands through internet-based
                              platforms, social media, and various digital
                              communication channels is commonly reffered to as
                              digital marketing services.It involves engaging
                              with potential clients
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/digital-marketing-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 mb-3"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h5 className="card-title">Graphics Designing</h5>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Graphics designing services involve the skilled
                              creation of visual content aimed at effectively
                              conveying messages Designers employ typography and
                              graphics to meet user needs
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/graphics-designing-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ start */}
      <section id="faq" className="faq section-bg py-4">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title">
            <h1 className="subtitle text-center">F.A.Q</h1>
            <h6 className='text-center' style={{ color: "initial" }}> Frequently Asked <span>Questions</span> </h6>
            <h6 className='text-center' style={{ color: "initial" }}>
              Our curated list of the most frequently asked questions about us.
            </h6>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul className="faq-list">

                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq19"
                    className="collapsed question text-start"
                  >
                    What is CapoBrain?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq19"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBrain is a comprehensive school and college management system software designed to streamline administrative tasks, enhance reporting, and provide future predictions using Artificial Intelligence features.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq20"
                    className="collapsed question text-start"
                  >
                    Which programming languages are used to develop CapoBrain?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq20"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      CapoBrain is developed using modern programming languages to ensure efficiency, scalability, and reliability.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq21"
                    className="collapsed question text-start"
                  >
                    Is CapoBrain suitable for both schools and colleges?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq21"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, CapoBrain is designed to cater to the needs of both schools and colleges, offering modules tailored to each educational setting.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq22"
                    className="collapsed question text-start"
                  >
                    How does the Postal Dispatch feature work?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq22"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      The Postal Dispatch feature allows you to manage outgoing mail, track deliveries, and maintain a record of dispatched items.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq23"
                    className="collapsed question text-start"
                  >
                    Can I log phone calls using CapoBrain?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq23"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Yes, CapoBrain's Phone Call Log feature enables you to keep track of all incoming and outgoing phone calls efficiently.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq24"
                    className="collapsed question text-start"
                  >
                    How can I add teaching and non-teaching staff to CapoBrain?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq24"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      You can easily add teaching and non-teaching staff profiles using the Staff module and assign relevant roles and responsibilities.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    data-bs-toggle="collapse"
                    href="#faq25"
                    className="collapsed question text-start"
                  >
                    What is the Staff ToDo's feature used for?
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                  </div>
                  <div
                    id="faq25"
                    className="collapse text-start"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      The Staff ToDo's feature helps staff members manage their tasks, set priorities, and track progress on various assignments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/faqs" >
            <button className="btn btnFill" type="button">
              <i className="fa-solid fa-arrow-right me-2 moveIcon text-white"></i> View More
            </button>
          </Link>
        </div>
      </section>
      {/* FAQ end */}
      <Testimonial />
    </div>
  );
}
