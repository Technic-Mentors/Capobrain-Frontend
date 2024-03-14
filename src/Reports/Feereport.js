import React from 'react'
import { Helmet } from 'react-helmet';

export default function Feereport() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Fee Report" />
        <meta property="og:description" content="A fee report is a report that contains information regarding monthly fees. It will display an overview of the student's financial account with the school." />
        <meta property="og:image" content="https://capobrain.com/img/Fee-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/fee-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Fee Report" />
        <meta name="twitter:description" content="A fee report is a report that contains information regarding monthly fees. It will display an overview of the student's financial account with the school." />
        <meta name="twitter:image" content="https://capobrain.com/img/Fee-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/fee-report",
            "name": "Capobrain",
            "description": "A fee report is a report that contains information regarding monthly fees. It will display an overview of the student's financial account with the school." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/fee-report" />
        <meta name="description" content="A fee report is a report that contains information regarding monthly fees. It will display an overview of the student's financial account with the school." />
      </Helmet>

    <h1 className='manual-h1'>Fee Report</h1>
    <p>A fee report is a report that contains information regarding monthly fees. It will display an overview of the student's financial account with the school. The fee report displays student information such as name, student ID, father's name, class, section, and monthly fee and paid amount along with the date. You can search for the record using any date, as well as by name.</p>
    <img src="/img/Fee-Report.png" className='img-fluid' alt="Fee-Report" />
  </div>
  )
}
