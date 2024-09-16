import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentcard() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student ID Card" />
        <meta property="og:description" content="When a student gets admitted to school, his or her student ID card is generated in the certificate module. It will display a list of all students who have an ID card," />
        <meta property="og:image" content="https://capobrain.com/img/Student-Id-Card.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-id-card" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student ID Card" />
        <meta name="twitter:description" content="When a student gets admitted to school, his or her student ID card is generated in the certificate module. It will display a list of all students who have an ID card," />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Id-Card.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-id-card",
            "name": "Capobrain",
            "description": "When a student gets admitted to school, his or her student ID card is generated in the certificate module. It will display a list of all students who have an ID card," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-id-card" />
        <meta name="description" content="When a student gets admitted to school, his or her student ID card is generated in the certificate module. It will display a list of all students who have an ID card," />
      </Helmet>

      <h2 className='manual-h1'>Student ID Card</h2>
      <p>When a student gets admitted to school, his or her student ID card is generated in the certificate module. It will display a list of all students who have an ID card, allowing you to view and print the ID card. The ID card will have your student ID, name, father's name, class, section, and branch name. </p>
      <img src="/img/Student-ID-Card.avif" className='img-fluid' alt="Student-Id-Card" />
    </div>
  )
}
