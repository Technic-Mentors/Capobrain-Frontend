import React from 'react'
import { Helmet } from 'react-helmet';

export default function Datesheet() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Date Sheet" />
        <meta property="og:description" content="To begin, fill out the date sheet one subject at a time with the appropriate date and time. Following that, you will select the branch, class, and section for which you will create a datesheet." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Datesheet.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/date-sheet" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Date Sheet" />
        <meta name="twitter:description" content="To begin, fill out the date sheet one subject at a time with the appropriate date and time. Following that, you will select the branch, class, and section for which you will create a datesheet." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Datesheet.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/date-sheet",
            "name": "Capobrain",
            "description": "To begin, fill out the date sheet one subject at a time with the appropriate date and time. Following that, you will select the branch, class, and section for which you will create a datesheet." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/date-sheet" />
        <meta name="description" content="To begin, fill out the date sheet one subject at a time with the appropriate date and time. Following that, you will select the branch, class, and section for which you will create a datesheet." />
      </Helmet>

      <h1 className='manual-h1'>Date Sheet</h1>
      <p>To begin, fill out the date sheet one subject at a time with the appropriate date and time. Following that, you will select the branch, class, and section for which you will create a datesheet. As a result, the student can access that datesheet through their portal.</p>
      <img src="/img/Add-Subject.avif" className='img-fluid' alt="Add-Subject" />
      <img src="/img/Add-Datesheet.png" className='img-fluid mt-3' alt="Add-Datesheet" />
    </div>
  )
}
