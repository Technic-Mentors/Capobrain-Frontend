import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    number: ""
  });
  let navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const nameError = document.getElementById("name-error")
    const emailError = document.getElementById("email-error")
    const passwordError = document.getElementById("password-error")
    const numberError = document.getElementById("number-error")
    const { email, password, number, name } = credentials;
    let Error;
    if (!name) {
      nameError.innerText = 'Please enter name'
      Error = true
    } else {
      nameError.innerText = ''
    }
    if (!email) {
      emailError.innerText = 'Please enter email'
      Error = true
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.innerText = 'Please enter a valid email address';
      Error = true;
    } else {
      emailError.innerText = ''
    }
    if (!number) {
      numberError.innerText = 'Please enter number'
      Error = true
    } else if (!/^\d+$/.test(number)) {
      numberError.innerText = 'Please enter a valid number';
      Error = true;
    } else {
      numberError.innerText = ''
    }
    if (!password) {
      passwordError.innerText = 'Please enter password'
      Error = true
    } else {
      passwordError.innerText = ''
    }
    if (Error) {
      return;
    }
    const res = await fetch("https://capobrain-backend.vercel.app/api/auth/signUpUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, number }),
    });
    if (res.ok) {
      navigate("/profile-login")
    }
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="home-container">
        <div className="home-container-overlay">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center px-5">
              <div className="col-md-6 py-6">
                <div
                >
                  <div className="">
                    <div>
                      <h1 className="animate__animated animate__zoomIn text-center">
                        Sign Up
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 py-5">

            <form onSubmit={handlesubmit}>
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={credentials.name}
                  onChange={onchange}
                  id="email"
                />
                <div className="text-danger" id="name-error"></div>
              </div>
              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={credentials.email}
                  onChange={onchange}
                  id="email"
                />
                <div className="text-danger" id="email-error"></div>
              </div>
              <div className="mb-1">
                <label htmlFor="number" className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  value={credentials.number}
                  onChange={onchange}
                  id="number"
                />
                <div className="text-danger" id="number-error"></div>
              </div>
              <div className="mb-1">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={credentials.password}
                  onChange={onchange}
                  id="password"
                />
                <div className="text-danger" id="password-error"></div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btnFill mb-2 mt-4 px-4"
                >
                  <i className='fas fa-arrow-right me-2 moveIcon text-white'></i>
                  Sign Up
                </button>
              </div>
            </form>
            <h6 className='text-center formButton'>
              Already Have Account? <Link to="/userLogin">Log In</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
