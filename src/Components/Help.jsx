import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import issueImg from "../img/help-img.avif"

export default function Help() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div >
      <div className="home-container">
        <div className="home-container-overlay">
          <div className="container">
            <div className="row d-flex justify-content-center px-5">
              <div className="col-md-6 py-6">
                <div>
                  <div>
                    <div>
                      <h1 className="animate__animated animate__zoomIn">
                       Capobrain Help Center
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
            <p className='seo-heading-h3'>Streamlined Ticketing</p>
            <p> Easily log and track issues for swift resolution and seamless communication.</p>
          </div>
          <div className="col-md-3">
            <i className='fas fa-headset'></i>
            <p className='seo-heading-h3'>Tailored Support</p>
            <p>Get tailored assistance for your school's unique challenges.</p>

          </div>
          <div className="col-md-3">
            <i className='fas fa-chart-line'></i>
            <p className='seo-heading-h3'>Continuous Improvements</p>
            <p> Share your experiences and suggestions for continuous software improvement.</p>

          </div>
        </div>
      </div >

      <div className='help-bg'>
        <div className="container py-4">
          <div className="row help-card align-items-center justify-content-between">
            <div className="col-md-6 help_points">
            <h2>Uh Oh! Having An Issue?</h2>
              <p>  Let us know if you run into any glitches while using our software. Your feedback helps us fix issues and make things smoother for everyone!</p>
              <h3 className='seo-heading-h3'> How to report an issue:</h3>
              <li>Briefly explain what went wrong.</li>
              <li>If you can, show us how to make the bug happen again (step-by-step).</li>
              <li>Copy and paste any error messages that pop up.</li>

              
              Still need guidance? <Link to="/userLogin" className='geneTicketLink'> Generate a ticket</Link> of your problem at help center and our support team will take you through the process to resolve your issue.
            </div>
            <div className="col-md-5">
              <img src={issueImg} alt="capobrain-help-center" className='img-fluid' />
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
            <h2 className="subtitle text-center">F.A.Q</h2>
            <p className='text-center' style={{ color: "initial", fontSize: "18px", fontWeight: 'bold' }}> Frequently Asked <span>Questions</span> </p>
            <p className='text-center' style={{ color: "initial", fontSize: "18px", fontWeight: 'bold' }}>
              Our curated list of the most frequently asked questions about us.
            </p>
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
                    Yes, CapoBrain is designed to cater to the needs of both schools and colleges, offering modules tailored to each educational setting. It provides flexible features that accommodate the administrative, academic, and communication requirements of both institutions, ensuring smooth operations regardless of size or complexity.
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
                    The Postal Dispatch feature allows you to manage outgoing mail, track deliveries, and maintain a record of dispatched items. It helps ensure that important documents and packages are sent on time and provides tracking updates to monitor their status. Additionally, it keeps an organized log of all dispatches for easy reference and accountability.
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
                    Yes, CapoBrain's Phone Call Log feature enables you to keep track of all incoming and outgoing phone calls efficiently. You can record details such as the date, time, caller information, and purpose of the call, ensuring a comprehensive log for future reference. This feature helps improve communication management and provides easy access to call history when needed.
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
                    You can easily add teaching and non-teaching staff profiles using the Staff module and assign relevant roles and responsibilities. The module allows you to input detailed information, such as contact details and qualifications, while also providing options to categorize staff and manage their access levels within the system.
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
                    The Staff ToDo's feature helps staff members manage their tasks, set priorities, and track progress on various assignments. It allows for better organization by setting deadlines, categorizing tasks, and sending reminders to ensure timely completion. This feature enhances productivity by keeping staff focused and on track with their daily responsibilities.
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
