import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import issueImg from "../img/help-img.avif"

export default function Help() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div >
      <Helmet>
        <title>Capobrain Help Info</title>
        {/* open grapgh tag */}
        <meta property="og:title" content="Blogs" />
        <meta property="og:description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
        <meta property="og:image" content="https://capobrain.com/img/about%20us.png" />
        <meta property="og:url" content="https://capobrain.com/blog" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Blogs" />
        <meta name="twitter:description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
        <meta name="twitter:image" content="https://capobrain.com/img/about%20us.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/blog",
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

        <link rel="canonical" href="https://capobrain.com/blog" />
        <meta name="description" content="CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents.." />
      </Helmet>
      <div className="home-container">
        <div className="home-container-overlay">
          <div className="container">
            <div className="row d-flex justify-content-center px-5">
              <div className="col-md-6 py-6">
                <div>
                  <div>
                    <div>
                      <h1 className="animate__animated animate__zoomIn">
                        Help Center
                      </h1>
                      <p>We're here with the help and advice you need to bring your idea to life. When you're ready to get online, we're prepped, trained, and ready to guide you from start to success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-5">
        <div className="row help-card justify-content-between">
          <div className="col-md-3">
            <i className='fas fa-ticket-alt'></i>
            <h5>Streamlined Ticketing</h5>
            <p> Easily log and track issues for swift resolution and seamless communication.</p>
          </div>
          <div className="col-md-3">
            <i className='fas fa-headset'></i>
            <h5>Tailored Support</h5>
            <p>Get tailored assistance for your school's unique challenges.</p>

          </div>
          <div className="col-md-3">
            <i className='fas fa-chart-line'></i>
            <h5>Continuous Improvements</h5>
            <p> Share your experiences and suggestions for continuous software improvement.</p>

          </div>
        </div>
      </div >

      <div className='help-bg'>
        <div className="container py-4">
          <div className="row help-card align-items-center justify-content-between">
            <div className="col-md-6 help_points">
            <h1>Uh Oh! Having An Issue?</h1>
              <p>  Let us know if you run into any glitches while using our software. Your feedback helps us fix issues and make things smoother for everyone!</p>
              <h5> How to report an issue:</h5>
              <li>Briefly explain what went wrong.</li>
              <li>If you can, show us how to make the bug happen again (step-by-step).</li>
              <li>Copy and paste any error messages that pop up.</li>

              <h5 className='mt-3'> How to Report:</h5>
              Still need guidance? <Link to="/userLogin" className='geneTicketLink'> Generate a ticket</Link> of your problem and our support team will take you through the process to resolve your issue.
            </div>
            <div className="col-md-5">
              <img src={issueImg} alt="" className='img-fluid' />
            </div>
          </div>
        </div >
      </div>
      {/* FAQ start */}
      <section section id="faq" className="faq section-bg py-4" >
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
      </section >
      {/* FAQ end */}
    </div >
  )
}
