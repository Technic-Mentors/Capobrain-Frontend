import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import MyContext from "../ContextApi/MyContext";

export default function Blog() {
  const { filterPosts, posts, uniqueCategory, setCategory } = useContext(MyContext)

  return (
    <div style={{ overflowX: "hidden" }}>
      <Helmet>
        <title>Articles - Capobrain</title>
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

      <div style={{ backgroundColor: "#133D78" }}>
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <h1 className="head text-center text-white animate__animated animate__zoomIn py-6">
              Blog Section
            </h1>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <div
          >
            <div className="outlet">
              {posts &&
                [...uniqueCategory].map((category) => {
                  return (
                    <div className="mt-2">
                      <button
                        className="btn w-100 blog-btn blog-btn-text"
                        style={{ border: "1px solid #133D78" }}
                        onClick={() => setCategory(category)}
                      >
                        <div className="ms-2 text-start">
                          {category}
                        </div>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-md-9 py-3">
          <div className="container">
            <div className="row">
              <p style={{ backgroundColor: "rgb(227, 234, 247)", padding: "7px", display: "inline-block" }}> <strong> Note </strong>: Get insights about the tech world in English and Urdu languages at <a href="https://urdustem.com/" style={{ textDecoration: "underline" }} target="blank"> Urdu Stem</a>.</p>
              {filterPosts.map((post) => {
                return (
                  <div className="col-md-4 col-12 mt-3">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/blog/${post.slug}`}
                    >
                      <div className="card">
                        <div className="card-body">
                          <h5
                            className="card-title"
                            style={{ fontWeight: "normal" }}
                          >
                            {post.title.length > 40 ? post.title.slice(0, 40) + "..." : post.title}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
