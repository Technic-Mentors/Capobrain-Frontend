import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import elevateImg from "../img/elevate-education.webp"
import greeningImg from "../img/greening-education.webp"

export default function Pricing() {

  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div className="elevateGreeing">
      <div className="elevateGreeing-overlay">
        <div className="mt-5 mb-4">
          <div className="container py-4">
            <div className="row justify-content-between">
              <div className="col-md-7">
                <h2>Smarter Solutions for Modern Education</h2>
                <p style={{ textAlign: "justify" }}>Transform your educational institution with Capobrain's best school/college management software. Our advanced school management system streamlines administrative tasks, enhances communication, and improves resource management. As a comprehensive college management system, Capobrain also ensures seamless operations across campuses, making it the perfect campus management system for schools, colleges, and universities aiming for excellence.</p>
              </div>
              <div className="col-md-4">
                <img src={elevateImg} alt="elevate-img" width="360" height="300" className="img-fluid" loading="lazy"></img>
              </div>
            </div>
            <div className="row justify-content-between reverse-order">
              <div className="col-md-4">
                <img src={greeningImg} alt="greeningImg" width="360" height="300" className="img-fluid" loading="lazy"></img>
              </div>
              <div className="col-md-7">
                <h2>Embrace Sustainability with Capobrain</h2>
                <p style={{ textAlign: "justify" }}>Experience a paperless revolution with Capobrain. By automating all administrative tasks, our school management system eliminates the need for manual paperwork, significantly reducing paper waste. This not only enhances operational efficiency but also promotes an eco-friendly campus environment. Embrace sustainability while streamlining processes at your school or college. With Capobrain, you support a greener planet and modernize your institution's operations seamlessly, paving the way for a sustainable future.</p>
              </div>

            </div>
          </div>
          {/* <!-- Pricing End --> */}
        </div>
      </div>
    </div>
  );
}
