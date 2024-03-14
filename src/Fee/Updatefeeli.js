import React from 'react'
import { Helmet } from 'react-helmet';

export default function Updatefeeli() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Update Fee List" />
        <meta property="og:description" content="It will show you the update fee list of all students and when you will click on view button it will show you the proper details of fee like update fee, date, class and section of that student." />
        <meta property="og:image" content="https://capobrain.com/img/Update-Fee-List.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/update-fee-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Update Fee List" />
        <meta name="twitter:description" content="It will show you the update fee list of all students and when you will click on view button it will show you the proper details of fee like update fee, date, class and section of that student." />
        <meta name="twitter:image" content="https://capobrain.com/img/Update-Fee-List.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/update-fee-list",
            "name": "Capobrain",
            "description": "It will show you the update fee list of all students and when you will click on view button it will show you the proper details of fee like update fee, date, class and section of that student." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/update-fee-list" />
        <meta name="description" content="It will show you the update fee list of all students and when you will click on view button it will show you the proper details of fee like update fee, date, class and section of that student." />
      </Helmet>

      <h1 className='manual-h1'>Update Fee List</h1>
      <p>It will show you the update fee list of all students and when you will click on view button it will show you the proper details of fee like update fee, date, class and section of that student.</p>
      <img src="/img/Update-Fee-List.png" className='img-fluid' alt="Update-Fee-List" />
    </div>
  )
}
