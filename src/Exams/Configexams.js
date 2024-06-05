import React from 'react'
import { Helmet } from 'react-helmet';

export default function Configexams() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Exams" />
        <meta property="og:description" content="In this module, you will create an exam for any class in any branch, with the proper start and end dates, as well as the exam type, such as first term or annual." />
        <meta property="og:image" content="https://capobrain.com/img/Configure-Exams.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-exams" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Exams" />
        <meta name="twitter:description" content="In this module, you will create an exam for any class in any branch, with the proper start and end dates, as well as the exam type, such as first term or annual." />
        <meta name="twitter:image" content="https://capobrain.com/img/Configure-Exams.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-exams",
            "name": "Capobrain",
            "description": "In this module, you will create an exam for any class in any branch, with the proper start and end dates, as well as the exam type, such as first term or annual." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-exams" />
        <meta name="description" content="In this module, you will create an exam for any class in any branch, with the proper start and end dates, as well as the exam type, such as first term or annual." />
      </Helmet>

      <h1 className='manual-h1'>Configure Exams</h1>
      <p>In this module, you will create an exam for any class in any branch, with the proper start and end dates, as well as the exam type, such as first term or annual. You must include a class, section through configuration module, and students, though.</p>
      <img src="/img/Configure-Exams.avif" className='img-fluid' alt="Configure-Exams" />
    </div>
  )
}
