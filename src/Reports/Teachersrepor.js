import React from 'react'
import { Helmet } from 'react-helmet';

export default function Teachersrepor() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Report" />
        <meta property="og:description" content=" This functionality enables efficient tracking and retrieval of relevant staff records, and users can further generate and print reports, enhancing the school's administrative and record-keeping capabilities." />
        <meta property="og:image" content="https://capobrain.com/img/Staff-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Report" />
        <meta name="twitter:description" content=" This functionality enables efficient tracking and retrieval of relevant staff records, and users can further generate and print reports, enhancing the school's administrative and record-keeping capabilities." />
        <meta name="twitter:image" content="https://capobrain.com/img/Staff-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-report",
            "name": "Capobrain",
            "description": " This functionality enables efficient tracking and retrieval of relevant staff records, and users can further generate and print reports, enhancing the school's administrative and record-keeping capabilities." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-report" />
        <meta name="description" content=" This functionality enables efficient tracking and retrieval of relevant staff records, and users can further generate and print reports, enhancing the school's administrative and record-keeping capabilities." />
      </Helmet>

    <h2 className='manual-h1'>Staff Report</h2>
    <p>The "Staff Report" module provides comprehensive data accessibility, allowing users to filter and view specific staff information based on Email, contact and class. This functionality enables efficient tracking and retrieval of relevant staff records, and users can further generate and print reports, enhancing the school's administrative and record-keeping capabilities.</p>
    <img src="/img/Staff-Report.avif" className='img-fluid' alt="Staff-Report" />
  </div>
  )
}
