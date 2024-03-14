import React from 'react'
import { Helmet } from 'react-helmet';

export default function Courses() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Courses" />
        <meta property="og:description" content="We absolutely need the course category before we can add the course, thus add the course category first, then the course. After you enter the title, outcomes, and description of the course," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Course.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/courses" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Courses" />
        <meta name="twitter:description" content="We absolutely need the course category before we can add the course, thus add the course category first, then the course. After you enter the title, outcomes, and description of the course," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Course.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/courses",
            "name": "Capobrain",
            "description": "We absolutely need the course category before we can add the course, thus add the course category first, then the course. After you enter the title, outcomes, and description of the course," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/courses" />
        <meta name="description" content="We absolutely need the course category before we can add the course, thus add the course category first, then the course. After you enter the title, outcomes, and description of the course," />
      </Helmet>

      <h1 className='manual-h1'>Courses</h1>
      <p>We absolutely need the course category before we can add the course, thus add the course category first, then the course. After you enter the title, outcomes, and description of the course, you will select the branch, class, and teacher who will teach the course, as well as whether the course will be paid or free. After you save it, it will display a list of all courses for you to view, edit, and delete.</p>
      <img src="/img/Add-Course.png" className='img-fluid' alt="Add-Course" />
    </div>
  )
}
