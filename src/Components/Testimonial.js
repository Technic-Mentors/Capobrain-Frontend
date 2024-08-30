import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonial() {
  const [showDots, setShowDots] = useState(true);
  useEffect(() => {
    AOS.init();
    const handleResize = () => {
      setShowDots(window.innerWidth >= 765);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    autoplay: true,
    infinite: true,
    dots: showDots,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <ul style={{ display: "flex", justifyContent: "center" }}>
        {dots
          .filter((dot, index) => index < 6)
          .map((dot, index) => (
            <li key={index} style={{ listStyle: "none", margin: "0 5px" }}>
              {dot}
            </li>
          ))}
      </ul>
    ),
  };

  return (
    <div className="testimonialBg">
      {/* <!-- Testimonial Start --> */}
      
      <div className="container-xxl py-3">
        <div className="container py-3">
          <div
            className="text-center mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h1>
              What Our Clients Say!
            </h1>
          </div>
          <Slider
            {...settings}
            className="owl-carousel testimonial-carousel"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="testimonial-item  text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/image2.avif"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p className="text-white">
                  CapoBrain's user-friendly interface has made it easy for us to
                  manage student information, schedule classes, and track
                  attendance without any hassle.
                </p>
                <h3 className="mb-1 text-white seo-heading-h3">Nimra Ihsan </h3>
                <span className="fst-italic text-white">Manager HR <span className="occupation">(The Educators)</span></span>
              </div>
            </div>
            <div className="testimonial-item  text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/image1.avif"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p className="text-white">
                  CapoBrain has revolutionized the way our school manages
                  administrative tasks. It has made our work easier, more
                  efficient, and allowed us to focus on student success.
                </p>
                <h3 className="mb-1 text-white seo-heading-h3">Asim Rasool</h3>
                <span className="fst-italic text-white">Director<span className="occupation">  (Apex College)</span></span>
              </div>
            </div>
            <div className="testimonial-item  text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/sikandar.webp"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p className="text-white">
                  With CapoBrain, our teachers have been able to easily assign
                  tasks and communicate with parents, creating a more
                  collaborative learnign environment.
                </p>
                <h3 className="mb-1 text-white seo-heading-h3">Sikandar Nawaz Cheema</h3>
                <span className="fst-italic text-white">
                Principal <span className="occupation">(Falcon Central School)</span>
                </span>
              </div>
            </div>
            <div className="testimonial-item  text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/Faizan MInhas.webp"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p className="text-white">
                  CapoBrain has helped us enhance our communication & build
                  stronger relationships, leading to parents engagement and
                  involvement in child's education.
                </p>
                <h3 className="mb-1 text-white seo-heading-h3">Faizan Minhas</h3>
                <span className="fst-italic text-white">
                General Manager <span className="occupation"> (Dar e Arqam Schools)</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </div>
  );
}
