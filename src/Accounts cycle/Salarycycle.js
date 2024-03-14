import React from 'react'
import { Helmet } from 'react-helmet';

export default function Salarycycle() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Salary Cycle" />
        <meta property="og:description" content="In salary cycle, we will choose the month for start the salary cycle and that month will be activate, and then salary transaction will be working according to current month which will be active." />
        <meta property="og:image" content="https://capobrain.com/img/Salary-Cycle.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/salary-cycle" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Salary Cycle" />
        <meta name="twitter:description" content="In salary cycle, we will choose the month for start the salary cycle and that month will be activate, and then salary transaction will be working according to current month which will be active." />
        <meta name="twitter:image" content="https://capobrain.com/img/Salary-Cycle.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/salary-cycle",
            "name": "Capobrain",
            "description": "In salary cycle, we will choose the month for start the salary cycle and that month will be activate, and then salary transaction will be working according to current month which will be active." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/salary-cycle" />
        <meta name="description" content="In salary cycle, we will choose the month for start the salary cycle and that month will be activate, and then salary transaction will be working according to current month which will be active." />
      </Helmet>

    <h1 className='manual-h1'>Salary Cycle</h1>
    <p>In salary cycle, we will choose the month for start the salary cycle and that month will be activate, and then salary transaction will be working according to current month which will be active. Current month will be shown with the status active and remaining months status will be shown non-active. </p>
      <img src="/img/Salary-Cycle.png" className='img-fluid' alt="Salary-Cycle" />
    </div>
  )
}
