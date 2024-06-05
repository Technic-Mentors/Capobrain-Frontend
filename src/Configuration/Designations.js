import React from 'react'
import { Helmet } from 'react-helmet';

export default function Designations() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Designations" />
        <meta property="og:description" content="Designation is the process of selecting and appointing someone to hold a particular position of authority. You will therefore include all of the titles that the school has," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Designation.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/designation" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Designations" />
        <meta name="twitter:description" content="Designation is the process of selecting and appointing someone to hold a particular position of authority. You will therefore include all of the titles that the school has," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Designation.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/designation",
            "name": "Capobrain",
            "description": "Designation is the process of selecting and appointing someone to hold a particular position of authority. You will therefore include all of the titles that the school has," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/designation" />
        <meta name="description" content="Designation is the process of selecting and appointing someone to hold a particular position of authority. You will therefore include all of the titles that the school has," />
      </Helmet>

      <h1 className='manual-h1'>Designations</h1>
      <p>Designation is the process of selecting and appointing someone to hold a particular position of authority. You will therefore include all of the titles that the school has, such as librarian, sports teacher, and others, in this module. You may examine, modify, or remove this designation as well.</p>
      <img src="/img/Add-Designation.avif" className='img-fluid' alt="Add-Designation" />
    </div>
  )
}
