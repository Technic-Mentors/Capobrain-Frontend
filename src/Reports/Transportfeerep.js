import React from 'react'
import { Helmet } from 'react-helmet';

export default function Transportfeerep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Transport Fee Report" />
        <meta property="og:description" content="a transport fee report would detail the fees charged to students or parents for using the school's transportation services, such as school buses." />
        <meta property="og:image" content="https://capobrain.com/img/Transport-Fee-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/transport-fee-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Transport Fee Report" />
        <meta name="twitter:description" content="a transport fee report would detail the fees charged to students or parents for using the school's transportation services, such as school buses." />
        <meta name="twitter:image" content="https://capobrain.com/img/Transport-Fee-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/transport-fee-report",
            "name": "Capobrain",
            "description": "a transport fee report would detail the fees charged to students or parents for using the school's transportation services, such as school buses." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/transport-fee-report" />
        <meta name="description" content="a transport fee report would detail the fees charged to students or parents for using the school's transportation services, such as school buses." />
      </Helmet>

    <h1 className='manual-h1'>Transport Fee Report</h1>
    <p>A "transport fee report" typically refers to a summary that provides information about the fees associated with transportation services. In the context of schools or educational institutions, a transport fee report would detail the fees charged to students or parents for using the school's transportation services, such as school buses.  The fee report displays student information such as name, student ID, father's name, class, section, and monthly transport fee and paid amount along with the date. You can search for the record using any date, as well as by name.</p>
    <img src="/img/Transport-Fee-Report.avif" className='img-fluid' alt="Transport-Fee-Report" />
  </div>
  )
}
