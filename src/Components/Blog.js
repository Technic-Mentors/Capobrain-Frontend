import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../ContextApi/MyContext";

export default function Blog() {
  const { filterPosts, posts, uniqueCategory, setCategory } = useContext(MyContext)

  return (
    <div style={{ overflowX: "hidden" }}>

      <div className="home-container">
        <div className="home-container-overlay">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center px-5">
              <div className="col-md-9">
                <div
                >
                  <div className="py-6">
                    <div>
                      <h1 className="text-center animate__animated animate__zoomIn">
                        Blog Section
                      </h1>
                      <p>In this dedicated space, we invite you to explore a treasure trove of articles, tips, and stories crafted to inspire,
                        inform, and entertain. Whether you're seeking expert advice, industry trends, or simply looking for a good read,
                        our blog is your destination.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                            style={{ fontWeight: "normal", color: "initial" }}
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
