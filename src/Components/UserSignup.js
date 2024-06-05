import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function UserSignup() {
    const navigate = useNavigate()
    const formRef = useRef()
    const [credentials, setCedentials] = useState({
        name: "",
        email: "",
        number: "",
        schoolName: ""
    })
    const Signup = async (e) => {
        e.preventDefault()
        const { name, email, schoolName, number } = credentials
        const nameI = document.getElementById("nameI");
        const emailI = document.getElementById("emailI");
        const numberI = document.getElementById("numberI");
        const schoolnameI = document.getElementById("schoolnameI");
        let Error = false;
        if (!name) {
            nameI.innerText = "Please enter name"
            Error = true
        } else {
            nameI.innerText = ""
        }
        if (!email) {
            emailI.innerText = "Please enter email"
            Error = true
        } else {
            emailI.innerText = ""
        }
        if (!number) {
            numberI.innerText = "Please enter contact number"
            Error = true
        } else {
            numberI.innerText = ""
        }
        if (!schoolName) {
            schoolnameI.innerText = "Please enter email"
            Error = true
        } else {
            schoolnameI.innerText = ""
        }
        if (Error) {
            return;
        }
        const res = await fetch("https://capobrain-backend.vercel.app/api/auth/signUpUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, schoolName, number })
        })
        const data = await res.json()
        console.log(data)
        if (res.ok) {
            navigate("/demo")
            sessionStorage.setItem("signUser", JSON.stringify(data.user))
        }

        emailjs
            .sendForm(
                "service_922xtbv",
                "template_ce4uvoh",
                formRef.current,
                "IbhvChmY_-f7TeB2E"
            )

        setCedentials({
            name: "",
            email: "",
            number: "",
            schoolName: ""
        })
    }

    const onchange = (e) => {
        if (e.target.name === 'number') {
            if (!/^\d*$/.test(e.target.value)) {
                setCedentials((user) => ({ ...user, [e.target.name]: e.target.value.replace(/\D/g, '') }));
                return;
            }
        }
        setCedentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container py-3">
                <h2 className="text-center">Hang On A Minute!</h2>
                <p className="text-center">You're almost there, just fill in this information to get the credentials for the demo.</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={Signup} ref={formRef}>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={credentials.name}
                                onChange={onchange}
                                placeholder="Your Name"
                            />
                            <div id="nameI" style={{ color: "red" }}></div>
                            <input
                                className="form-control mt-4"
                                type="email"
                                name="email"
                                value={credentials.email}
                                onChange={onchange}
                                placeholder="Your Email"
                            />
                            <div id="emailI" style={{ color: "red" }}></div>
                            <input
                                className="form-control mt-4"
                                type="tel"
                                name="number"
                                value={credentials.number}
                                onChange={onchange}
                                placeholder="Contact Number"
                            />
                            <div id="numberI" style={{ color: "red" }}></div>
                            <input
                                className="form-control mt-4"
                                type="name"
                                name="schoolName"
                                value={credentials.schoolName}
                                onChange={onchange}
                                placeholder="School Name"
                            />
                            <div id="schoolnameI" style={{ color: "red" }}></div>
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
    )
}