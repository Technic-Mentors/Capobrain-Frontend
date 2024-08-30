import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import headerImg from "../img/header-img.webp"

export default function FeaturePage() {
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
                        Ensuring AI-Powered Paperless Environment
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
      {/* <!-- Services Start --> */}
      <div className="container-fluid services mt-5 py-5 mb-2">
        <div className="container">
          <div
            className="text-center mx-auto mb-4"
            style={{ maxWidth: "550px" }}
          >
            <h2>
              {/* Our<span style={{ color: "#00B6C7" }}> Features</span>{" "} */}
              Standout Features Of Our School Software
            </h2>
          </div>
          <p className="mb-4" style={{ textAlign: "justify" }}>Discover the innovative features that set Capobrain apart as a leading Education Management System (EMS). From streamlined enrollment and automated attendance tracking to comprehensive grade management, our platform simplifies administrative tasks. Real-time communication tools foster collaboration among educators, students, and parents, while advanced analytics provide valuable insights for informed decision-making. Experience an efficient and transparent approach to school management with Capobrain.</p>
          <div className="row g-3 services-inner">
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-cloud fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Cloud-Based System</h3>
                    <p className="mb-4">
                      Access Capobrain from anywhere with our secure and reliable cloud-based system, ensuring data is always up-to-date and accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-memory fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Latest Cutting-Edge Technologies</h3>
                    <p className="mb-4">
                      Experience unparalleled performance with Capobrain, utilizing the latest cutting-edge technologies to deliver a seamless and efficient management system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-computer fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Computer-Based Exam Solutions</h3>
                    <p className="mb-4">
                      Streamline your assessment process with Capobrain's computer-based exam solutions, offering automated grading and instant results for enhanced efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-robot fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Artificial Intelligence Based</h3>
                    <p className="mb-4">
                      Enhance decision-making and automate routine tasks with Capobrain's artificial intelligence-based features, providing intelligent insights and personalized experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-file-shield fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Data Security</h3>
                    <p className="mb-4">
                      Safeguard sensitive information with Capobrain's robust data security measures, ensuring comprehensive protection and privacy for all users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-users fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Students & Parent Portals</h3>
                    <p className="mb-4">
                      Empower students and parents with Capobrain's dedicated portals, providing easy access to academic records, schedules, and communication tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="far fa-calendar-alt fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Online Daily Diary</h3>
                    <p className="mb-4">
                      Stay organized and informed with Capobrain's online daily diary feature, allowing students and teachers to record tasks, deadlines, and progress updates effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-mobile-screen-button fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Mobile App Support</h3>
                    <p className="mb-4">
                      Stay connected on the go with Capobrain's mobile app support, enabling access to key features and updates anytime, anywhere for ultimate convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-brands fa-whatsapp fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">WhatsApp Messaging</h3>
                    <p className="mb-4">
                      Effortlessly communicate with students, parents, and staff through Capobrain's integrated WhatsApp messaging feature, facilitating instant updates and announcements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-clipboard-user fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Biometric Attendance</h3>
                    <p className="mb-4">
                      Ensure accurate attendance tracking with Capobrain's biometric attendance feature, providing a secure and efficient method for monitoring student and staff presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-money-check-alt fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Salary & Fee Management</h3>
                    <p className="mb-4">
                      Efficiently manage salaries and fees with Capobrain's integrated system, simplifying payroll processing and financial transactions for staff and students alike.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-box-open fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Inventory Management</h3>
                    <p className="mb-4">
                      Keep track of resources seamlessly with Capobrain's inventory management feature, enabling efficient monitoring and replenishment of school supplies and equipment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-file-invoice-dollar fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Student & Staff Ledgers</h3>
                    <p className="mb-4">
                      Maintain detailed financial records for students and staff with Capobrain's ledger management feature, providing transparency and accuracy in accounting processes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="far fa-bell fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Reminders For Fee Collection</h3>
                    <p className="mb-4">
                      Never miss a payment deadline with Capobrain's fee collection reminder feature, ensuring timely notifications for students and parents to stay on top of financial obligations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-chart-pie fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Expense & Assets Management</h3>
                    <p className="mb-4">
                      Efficiently track expenses and manage assets with Capobrain's comprehensive management tools, providing insights and control over financial resources for optimized school operations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="far fa-file-alt fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Online Paper Generation</h3>
                    <p className="mb-4">
                      Generate exams and assignments effortlessly with Capobrain's online paper generation feature, enabling teachers to create and distribute digital assessments with ease.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-clipboard-list fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Exams & Results Management</h3>
                    <p className="mb-4">
                      Streamline the examination process and manage results effectively with Capobrain's comprehensive exams and results management module, ensuring smooth administration.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-chart-bar fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Comprehensive Reporting</h3>
                    <p className="mb-4">
                      Gain insights with Capobrain's comprehensive reporting, offering analytics and customizable reports for informed school performance decisions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-sitemap fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">Multi Branches/ Campuses</h3>
                    <p className="mb-4">
                      Effortlessly manage multiple branches or campuses with Capobrain's integrated system, enabling centralized administration and coordination across diverse locations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-2 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-globe fa-3x mb-4 "></i>
                    <h3 className="mb-3 seo-heading-h3">School/ College Front Website</h3>
                    <p className="mb-4">
                      Showcase your school or college with Capobrain's customizable front website feature, highlighting information, events, and achievements for a professional online presence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* contact start */}
      <div className="home-container">
        <div className="home-container-overlay">
          <div className="d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-between pt-5 pb-5 mt-3">
                <div className="col-md-8">
                  <h4 style={{ color: "initial", fontSize: "35px", fontWeight: "bold" }}>Learn more about our advanced Education Management Software!
                  </h4>
                </div>
                <div className="col-md-3 text-center">
                  <Link to="/contact">
                    <button className="btn btnFill">
                      Get In Touch With Us!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
