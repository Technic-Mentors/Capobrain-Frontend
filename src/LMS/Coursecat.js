import React from 'react'
import { Helmet } from 'react-helmet';

export default function Coursecat() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Course Category" />
        <meta property="og:description" content="We must first add the course category before we can add the course, thus add the course category first, followed by the course. Simply input the category name," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Course-Category.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/course-category" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Course Category" />
        <meta name="twitter:description" content="We must first add the course category before we can add the course, thus add the course category first, followed by the course. Simply input the category name," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Course-Category.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/course-category",
            "name": "Capobrain",
            "description": "We must first add the course category before we can add the course, thus add the course category first, followed by the course. Simply input the category name," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/course-category" />
        <meta name="description" content="We must first add the course category before we can add the course, thus add the course category first, followed by the course. Simply input the category name," />
      </Helmet>

      <h1 className='manual-h1'>Course Category</h1>
      <p>We must first add the course category before we can add the course, thus add the course category first, followed by the course. Simply input the category name, and it will display a list of all the categories that you have, allowing you to see, edit, and delete them.</p>
      <img src="/img/Add-Course-Category.avif" className='img-fluid' alt="Add-Course-Category" />
    </div>
  )
}
