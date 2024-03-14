import React from 'react'
import { Helmet } from 'react-helmet';

export default function Visitorsrep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Visitors Report" />
        <meta property="og:description" content="A visitor report provides a comprehensive record of individuals who have entered a school premises for various purposes. This report typically includes details such as the visitor's name," />
        <meta property="og:image" content="https://capobrain.com/img/Visitor-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/visitors-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Visitors Report" />
        <meta name="twitter:description" content="A visitor report provides a comprehensive record of individuals who have entered a school premises for various purposes. This report typically includes details such as the visitor's name," />
        <meta name="twitter:image" content="https://capobrain.com/img/Visitor-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/visitors-report",
            "name": "Capobrain",
            "description": "A visitor report provides a comprehensive record of individuals who have entered a school premises for various purposes. This report typically includes details such as the visitor's name," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/visitors-report" />
        <meta name="description" content="A visitor report provides a comprehensive record of individuals who have entered a school premises for various purposes. This report typically includes details such as the visitor's name," />
      </Helmet>
      
    <h1 className='manual-h1'>Visitors Report</h1>
    <p>A visitor report provides a comprehensive record of individuals who have entered a school premises for various purposes. This report typically includes details such as the visitor's name, the time they arrived (in time) and the time they departed (out time), as well as information about the person they came to meet. Depending on the nature of the visit, the report will reveal specific details about the visitor; for instance, if the visitor is a student, it will provide student-specific information, while if it's a staff member, it will contain staff-related details. Visitor reports are crucial for maintaining security, tracking attendance, and ensuring the safety of everyone within the school environment.</p>
    <img src="/img/Visitor-Report.png" className='img-fluid' alt="" />
  </div>
  )
}
