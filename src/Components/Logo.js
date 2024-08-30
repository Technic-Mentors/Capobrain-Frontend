import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Logo() {

  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <div>
      <div>
        <div
        >
          <div>
            <div className="container logo-container py-3">
              <div className="row d-flex align-items-center justify-content-center justify-content-between">

                <div className="col-md-12 col-12 logo-text">
                  <h2 className="mb-4 text-center">
                    Our Trusted Clients
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    style={{ textAlign: "justify" }}
                  >
                    Capobrain takes pride in serving diverse clients, specializing in educational institutions and management solutions. Our digital tools empower schools by automating administrative tasks, enhancing communication, and streamlining processes. <a
                      target="blank"
                      href="https://technicmentors.com/"
                      style={{ textDecoration: "underline", color: "#00B6C7" }}
                    >
                      Technic Mentors
                    </a>{" "} It is not just a school software, any education institute can benefit from the cutting-edge AI-based features offered by Capobrain online school software.
                  </p>
                </div>
                
              </div>
              <div className="row px-5">
                  <div className="custom-slider">
                    <div className="row g-3">
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client0.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />{" "}
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client1.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client2.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client3.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client4.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client5.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client6.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client7.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client8.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client9.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client0.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />{" "}
                      </div>
                      <div className="col-md-2">
                        <img
                          className=" img-fluid client-img"
                          src="img/client1.avif"
                          alt="Client Logo"
                          width="220"
                          height="100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}
