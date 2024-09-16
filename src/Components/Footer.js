import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/adminPanel/addblog" ||
    location.pathname === "/adminPanel/allposts" ||
    location.pathname === "/adminPanel/allcategory" ||
    location.pathname === "/adminPanel/addcategory" ||
    location.pathname === "/adminPanel/demoUsers" ||
    location.pathname === "/adminPanel/tickets" ||
    location.pathname === "/adminPanel/board"
  ) {
    return null;
  }
  const selectPath = location.pathname
  const handleClick = (path) => {
    if (path === selectPath) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <div>
      <div>
        {/* <!-- Footer Start --> */}
        <div
          className="footer"
          data-wow-delay=".3s"
        >
          <div>
            <div className="container pb-4">
              <div className="row d-flex justify-content-between">
                <div className="col-md-4 mt-5">
                  <h3
                    className="fw-bold d-block"
                  >
                    CapoBrain
                  </h3>
                  <p
                    className="mt-4"
                    style={{ textAlign: "justify", fontSize: "16px" }}
                  >
                    Capobrain is the most advanced AI-Powered education
                    management system that redefines educational administration
                    by seamlessly streamlining tasks and fostering robust
                    communication channels amongst educators, staff, and
                    parents. With a myriad of features and capabilities, it
                    revolutionizes the way educational institutions operate,
                    ensuring a harmonious and paper-free school environment.
                  </p>
                </div>
                <div className="col-md-5 mt-5">
                  <h3>Subscribe</h3>
                  <p>Stay updated on how future of technology is shaping</p>
                  <div className='d-flex'>
                    <input type='text' className='form-control bg-transparent py-4' placeholder='Enter Your Email Here'></input>
                    <button className='btn btnFill px-4' style={{ marginLeft: "2%" }}>Submit</button>
                  </div>

                </div>
                <div className="col-md-3 mt-5">
                  <h3>
                    Contact Us
                  </h3>
                  <div className="mt-4 d-flex flex-column contact-link">
                    <adiv
                      className="pb-2"
                      style={{ fontSize: "16px" }}
                    >
                      <i className="fas fa-map-marker-alt  me-2"></i> Mumtaz
                      Market, Main GT Road, Gujranwala
                    </adiv>
                    <div
                      className="py-2"
                      style={{ fontSize: "16px" }}
                    >
                      <i className="fa fa-phone me-2"></i> +923 111 122 144
                    </div>
                    <div
                      className="py-2 mb-2"
                      style={{ fontSize: "16px" }}
                    >
                      <i className="fas fa-envelope  me-2"></i>{" "}
                      info@capobrain.com
                    </div>
                  </div>
                  <h3 className="mb-3">
                    Follow Us
                  </h3>
                  <div className="d-flex footerSocialLinks">
                    <a
                      href="https://www.facebook.com/CapoBrainOfficial"
                      target="blank"
                      className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-facebook-f text-white"></i>
                      <span className="d-none">book</span>
                    </a>
                    <a
                      href="https://twitter.com/BrainCapo"
                      target="blank"
                      className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-twitter text-white"></i>
                      <span className="d-none">tter</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@CapoBrain"
                      target="blank"
                      className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-youtube text-white"></i>
                      <span className="d-none">Tube</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/CapoBrain/"
                      target="blank"
                      className="btn btn1 btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-linkedin-in text-white"></i>
                      <span className="d-none">In</span>
                    </a>
                    <a
                      href="https://www.instagram.com/CapoBrain"
                      target="blank"
                      className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                    >
                      <i className="fa-brands fa-instagram text-white"></i>
                      <span className="d-none">gram</span>
                    </a>
                    <a
                      href="https://wa.me/923111122144"
                      target="blank"
                      className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
                    >
                      <i className="fa-brands fa-whatsapp text-white"></i>
                      <span className="d-none">sapp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End --> */}
      </div>
      <div
        className="container-fluid footerBg pt-3 pb-3"
      >
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              <span className="text-white" style={{ fontSize: "16px" }}>
                <span>
                  <i className="fas fa-copyright text-white me-2"></i>
                  Capobrain
                </span>
                , All right reserved.
              </span>
              <span className="text-white" style={{ fontSize: "16px" }}>
                {" "}
                Developed With Love By
                <a
                  href="https://technicmentors.com/"
                  style={{ color: "initial" }}
                  target="blank"
                >
                  {" "}
                  Technic Mentors
                </a>
              </span>
            </div>
            <div className="col-md-3 d-flex align-items-center">
              <Link
                to="/privacy"
                style={{ fontSize: "16px" }}
                className="text-white me-2"
                onClick={() => handleClick("/privacy")}
              >
                Privacy
              </Link>
              <div
                className="border-start border-2 me-2"
                style={{ height: "13px" }}
              ></div>
              <Link
                to="/t&c"
                style={{ fontSize: "16px" }}
                className="text-white"
                onClick={() => handleClick("/t&c")}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
