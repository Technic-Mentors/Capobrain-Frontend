import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentaccadj() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Account Adjustment" />
        <meta property="og:description" content="In student account adjustment, if you want to adjust the transport, inventory or fee amount and there is another option adjustment type like debit to student or credit to student" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Student-Account-Adjustment.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-account-adjust" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Account Adjustment" />
        <meta name="twitter:description" content="In student account adjustment, if you want to adjust the transport, inventory or fee amount and there is another option adjustment type like debit to student or credit to student" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Student-Account-Adjustment.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-account-adjust",
            "name": "Capobrain",
            "description": "In student account adjustment, if you want to adjust the transport, inventory or fee amount and there is another option adjustment type like debit to student or credit to student" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-account-adjust" />
        <meta name="description" content="In student account adjustment, if you want to adjust the transport, inventory or fee amount and there is another option adjustment type like debit to student or credit to student" />
      </Helmet>

      <h2 className='manual-h1'>Student Account Adjustment</h2>
      <p>In student account adjustment, if you want to adjust the transport, inventory or fee amount and there is another option adjustment type like debit to student or credit to student and then you have to add the adjustment reason and that transaction will be shown in account.</p>
      <img src="/img/Add-Student-Account-Adjustment.avif" className='img-fluid' alt="Add-Student-Account-Adjustment" />
    </div>
  )
}
