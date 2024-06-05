import React from 'react'
import { Helmet } from 'react-helmet';

export default function Staffrevrep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Review Report" />
        <meta property="og:description" content="A staff review report is a document that provides an overview of teacher performance within a specific branch or educational institution." />
        <meta property="og:image" content="https://capobrain.com/img/Staff-Review-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-review-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Review Report" />
        <meta name="twitter:description" content="A staff review report is a document that provides an overview of teacher performance within a specific branch or educational institution." />
        <meta name="twitter:image" content="https://capobrain.com/img/Staff-Review-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-review-report",
            "name": "Capobrain",
            "description": "A staff review report is a document that provides an overview of teacher performance within a specific branch or educational institution." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-review-report" />
        <meta name="description" content="A staff review report is a document that provides an overview of teacher performance within a specific branch or educational institution." />
      </Helmet>

    <h1 className='manual-h1'>Staff Review Report</h1>
    <p>A staff review report is a document that provides an overview of teacher performance within a specific branch or educational institution. It typically includes information such as the branch name, teacher details (including their name, class, section, and identification number), a rating in the form of stars, and a status indicating their performance or evaluation. This report serves as a valuable tool for assessing and monitoring the effectiveness of educators, facilitating data-driven decision-making and continuous improvement in the educational system.</p>
    <img src="/img/Staff-Review-Report.avif" className='img-fluid' alt="Staff-Review-Report" />
  </div>
  )
}
