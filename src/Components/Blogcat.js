import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet';

export default function Blogcat() {
  const { postSlug } = useParams()
  const [posts, setPosts] = useState({})
  useEffect(() => {
    const postData = async () => {
      await fetch(`https://capobrain-backend.vercel.app/api/auth/getpost/${postSlug}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setPosts(data));
    };
    postData();
  }, [postSlug]);
  const sanitizedContent = { __html: DOMPurify.sanitize(posts.content) };
  return (
    <div>
      <Helmet>
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

      <div className="home-container">
        <div
          style={{backgroundColor:"#133D78"}}
        >
          <div className=" d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn py-6"
              >
                {posts.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container blog-container">
        <div className='mt-5' dangerouslySetInnerHTML={sanitizedContent}></div>
      </div>
    </div>
  )
}
