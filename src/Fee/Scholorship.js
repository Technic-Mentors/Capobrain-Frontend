import React from 'react'
import { Helmet } from 'react-helmet';

export default function Scholorship() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Scholarship" />
        <meta property="og:description" content="In the scholarship module, you will apply the scholarship to the students by first configuring the scholarship name in the configuration module and then applying it in this module by selecting the scholarship name or amount" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Scholarship.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/scholarship" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Scholarship" />
        <meta name="twitter:description" content="In the scholarship module, you will apply the scholarship to the students by first configuring the scholarship name in the configuration module and then applying it in this module by selecting the scholarship name or amount" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Scholarship.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/scholarship",
            "name": "Capobrain",
            "description": "In the scholarship module, you will apply the scholarship to the students by first configuring the scholarship name in the configuration module and then applying it in this module by selecting the scholarship name or amount" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/scholarship" />
        <meta name="description" content="In the scholarship module, you will apply the scholarship to the students by first configuring the scholarship name in the configuration module and then applying it in this module by selecting the scholarship name or amount" />
      </Helmet>

      <h1 className='manual-h1'>Scholarship</h1>
      <p>In the scholarship module, you will apply the scholarship to the students by first configuring the scholarship name in the configuration module and then applying it in this module by selecting the scholarship name or amount and there are two types of scholarship one is permanent and the other is temporary and that scholarship transaction will be gone in the student account.</p>
      <img src="/img/Add-Scholarship.png" className='img-fluid' alt="Add-Scholarship" />
    </div>
  )
}
