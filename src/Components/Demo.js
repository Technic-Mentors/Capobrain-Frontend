import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from 'react-helmet';

export default function Demo() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    schoolname: "",
    phoneno: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const resetForm = () => {
    setCredentials({
      name: "",
      email: "",
      schoolname: "",
      phoneno: "",
      message: "",
    });
  };
  const formRef = useRef();

  const sendEmail = () => {
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const schoolname = form.schoolname.value.trim();
    const number = form.phoneno.value.trim();
    const message = form.message.value.trim();

    const nameI = document.getElementById("nameI");
    const emailI = document.getElementById("emailI");
    const schoolnameI = document.getElementById("schoolnameI");
    const numberI = document.getElementById("numberI");
    const messageI = document.getElementById("messageI");

    let hasError = false;

    if (!name) {
      nameI.innerText = "please fill name field";
      hasError = true;
    } else {
      nameI.innerText = " ";
    }
    if (!email) {
      emailI.innerText = "please fill email field";
      hasError = true;
    } else {
      emailI.innerText = " ";
    }
    if (!schoolname) {
      schoolnameI.innerText = "please fill school name field";
      hasError = true;
    } else {
      schoolnameI.innerText = " ";
    }
    if (!number) {
      numberI.innerText = "please fill number field";
      hasError = true;
    } else {
      numberI.innerText = " ";
    }
    if (!message) {
      messageI.innerText = "please fill message field";
      hasError = true;
    } else {
      messageI.innerText = " ";
    }

    if (hasError) {
      return;
    }
    emailjs
      .sendForm(
        "service_pj93zyr",
        "template_jude9n9",
        formRef.current,
        "2IXZCnlGYrCJooOAK"
      )
      .then((response) => {
        formRef.current.reset();
        resetForm();
        setSuccessMessage("Request sent successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
  };
  const userSend = async () => {
    const { name, email, schoolname, phoneno, message } = credentials;
    await fetch("https://capobrain-backend.vercel.app/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, schoolname, phoneno, message }),
    });
    setCredentials({
      name: "",
      email: "",
      schoolname: "",
      phoneno: "",
      message: "",
    });
  };
  const onSubmission = (e) => {
    e.preventDefault();
    userSend();
    sendEmail();
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Helmet>
        <title>Request A Demo - Capobrain</title>
        {/* open grapgh tag */}
        <meta property="og:title" content="Demo Request" />
        <meta property="og:description" content="Let’s Have A Live Demo
See for yourself how our best school management system works:

Demo Link : https://demo.capobrain.com/
Demo Credentials
School User.." />
        <meta property="og:image" content="https://demo.capobrain.com/" />
        <meta property="og:url" content="https://capobrain.com/demo" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Demo Request" />
        <meta name="twitter:description" content="Let’s Have A Live Demo
See for yourself how our best school management system works:

Demo Link : https://demo.capobrain.com/
Demo Credentials
School User.." />
        <meta name="twitter:image" content="https://demo.capobrain.com/" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/demo",
            "name": "Capobrain",
            "description": "Let’s Have A Live Demo
See for yourself how our best school management system works:

Demo Link : https://demo.capobrain.com/
Demo Credentials
School User.." ,
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

        <link rel="canonical" href="https://capobrain.com/demo" />
        <meta name="description" content="Let’s Have A Live Demo
See for yourself how our best school management system works:

Demo Link : https://demo.capobrain.com/
Demo Credentials
School User.." />
      </Helmet>

      <div className="home-container">
        <div
          style={{
            backgroundColor: "#133D78"
          }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <h1 className="head text-white text-center animate__animated animate__zoomIn py-6">
                Schedule Your Software Demo Now
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="background-img3">
        <div style={{ backgroundColor: "rgb(246 249 255)" }}>
          <div className="container">
            <div>
              <div className="row d-flex-row justify-content-center">
                <div className="col-md-6 demo-1">
                  <h2>Let’s Have A Live Demo</h2>
                  <p>
                    See for yourself how our best school management system
                    works:
                  </p>
                  Demo Link :{" "}
                  <a
                    style={{
                      textDecoration: "underline",
                      color: "#00B6C7",
                      fontSize: "20px",
                    }}
                    href="https://demo.capobrain.com/"
                    target="blank"
                  >
                    {" "}
                    https://demo.capobrain.com/
                  </a>
                  <h4 className="mt-2">Demo Credentials</h4>
                  <div className="row">
                    <div className="col-md-5">
                      <h5 style={{ color: "#00B6C7" }}>School User</h5>
                      <p>Username: CAPOUSER</p>
                      <p>Password: 12345678</p>
                    </div>
                    <div className="col-md-5">
                      <h5 style={{ color: "#00B6C7" }}>Student Login</h5>
                      <p>Username: CAPO0923S001</p>
                      <p>Password: 12345678</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <h5 style={{ color: "#00B6C7" }}>Teacher Login</h5>
                      <p>Username: CAPO0923T001</p>
                      <p>Password: 12345678</p>
                    </div>
                    <div className="col-md-5">
                      <h5 style={{ color: "#00B6C7" }}>Parents Login</h5>
                      <p>Username: CAPO0923P001</p>
                      <p>Password: 12345678</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 demo-2"
                  style={{
                    color: "#00B6C7",
                  }}
                >
                  <div>
                    <h2 className="mb-3">Contact For Software Demo</h2>
                    <form ref={formRef} onSubmit={onSubmission}>
                      {successMessage && (
                        <div className="alert alert-info">{successMessage}</div>
                      )}
                      <input
                        className="form-control border-0"
                        type="text"
                        name="name"
                        value={credentials.name}
                        onChange={onchange}
                        placeholder="Your Name"
                      />
                      <div id="nameI" style={{ color: "red" }}></div>
                      <input
                        className="form-control border-0 mt-4"
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={onchange}
                        placeholder="Your Email"
                      />
                      <div id="emailI" style={{ color: "red" }}></div>
                      <input
                        className="form-control border-0 mt-4"
                        type="number"
                        name="phoneno"
                        value={credentials.phoneno}
                        onChange={onchange}
                        placeholder="Whatsapp Number"
                      />
                      <div id="numberI" style={{ color: "red" }}></div>
                      <input
                        className="form-control border-0 mt-4"
                        type="name"
                        name="schoolname"
                        value={credentials.schoolname}
                        onChange={onchange}
                        placeholder="School Name"
                      />
                      <div id="schoolnameI" style={{ color: "red" }}></div>
                      <textarea
                        className="form-control border-0 mt-4"
                        name="message"
                        rows={6}
                        value={credentials.message}
                        onChange={onchange}
                        placeholder="Message"
                      />
                      <div id="messageI" style={{ color: "red" }}></div>
                      <div className="text-start d-flex justify-content-center mt-5">
                        <button className="btn btn1" type="submit">
                          Send Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
