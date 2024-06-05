import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentcerti() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Certificate" />
        <meta property="og:description" content="In student certificate, it will show you the list of all the student with proper information Branch, student ID, name, Gender, Class, Section, Father name, B-form" />
        <meta property="og:image" content="https://capobrain.com/img/Student-Certificate.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-certificate" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Certificate" />
        <meta name="twitter:description" content="In student certificate, it will show you the list of all the student with proper information Branch, student ID, name, Gender, Class, Section, Father name, B-form" />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Certificate.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-certificate",
            "name": "Capobrain",
            "description": "In student certificate, it will show you the list of all the student with proper information Branch, student ID, name, Gender, Class, Section, Father name, B-form" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-certificate" />
        <meta name="description" content="In student certificate, it will show you the list of all the student with proper information Branch, student ID, name, Gender, Class, Section, Father name, B-form" />
      </Helmet>

      <h1 className='manual-h1'>Student Certificate</h1>
      <p>In student certificate, it will show you the list of all the student with proper information Branch, student ID, name, Gender, Class, Section, Father name, B-form No  but in action field it shows the status “Not Available” because the certificate will be available only in the case when we configure first. </p>
      <img src="/img/Student-Certificate.avif" className='img-fluid' alt="Student-Certificate" />
    </div>
  )
}
