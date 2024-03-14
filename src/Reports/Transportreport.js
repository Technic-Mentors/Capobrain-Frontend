import React from 'react'
import { Helmet } from 'react-helmet';

export default function Transportreport() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Transport Report" />
        <meta property="og:description" content="A transport report provides a concise summary of student transportation information within an educational institution. This report typically includes crucial details such as student information," />
        <meta property="og:image" content="https://capobrain.com/img/Transport-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/transreport-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Transport Report" />
        <meta name="twitter:description" content="A transport report provides a concise summary of student transportation information within an educational institution. This report typically includes crucial details such as student information," />
        <meta name="twitter:image" content="https://capobrain.com/img/Transport-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/transreport-report",
            "name": "Capobrain",
            "description": "A transport report provides a concise summary of student transportation information within an educational institution. This report typically includes crucial details such as student information," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/transreport-report" />
        <meta name="description" content="A transport report provides a concise summary of student transportation information within an educational institution. This report typically includes crucial details such as student information," />
      </Helmet>

    <h1 className='manual-h1'>Transport Report</h1>
    <p>A transport report provides a concise summary of student transportation information within an educational institution. This report typically includes crucial details such as student information, assigned vehicle information (e.g., bus number or driver details), and specific pickup and drop-off times. It serves as a vital tool for both school administrators and parents, ensuring the safe and efficient transportation of students to and from school.</p>
    <img src="/img/Transport-Report.png" className='img-fluid' alt="Transport-Report" />
  </div>
  )
}
