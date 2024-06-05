import React from 'react'
import { Helmet } from 'react-helmet';

export default function Postalreport() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Postal Report" />
        <meta property="og:description" content="A postal report is a report that provides essential information about a specific postal item or package. It typically includes details such as a reference number, title or description of the contents," />
        <meta property="og:image" content="https://capobrain.com/img/Postal-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/postal-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Postal Report" />
        <meta name="twitter:description" content="A postal report is a report that provides essential information about a specific postal item or package. It typically includes details such as a reference number, title or description of the contents," />
        <meta name="twitter:image" content="https://capobrain.com/img/Postal-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/postal-report",
            "name": "Capobrain",
            "description": "A postal report is a report that provides essential information about a specific postal item or package. It typically includes details such as a reference number, title or description of the contents," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/postal-report" />
        <meta name="description" content="A postal report is a report that provides essential information about a specific postal item or package. It typically includes details such as a reference number, title or description of the contents," />
      </Helmet>

    <h1 className='manual-h1'>Postal Report</h1>
    <p>A postal report is a report that provides essential information about a specific postal item or package. It typically includes details such as a reference number, title or description of the contents, the date of dispatch or receipt, and the current postal status of the item, which may indicate whether it has been delivered, is in transit, or facing any issues in the postal system. This report serves as a concise summary of the item's postal journey and status, making it easier for recipients and senders to track and manage their mail or packages.</p>
    <img src="/img/Postal-Report.avif" className='img-fluid' alt="Postal-Report" />
  </div>
  )
}
