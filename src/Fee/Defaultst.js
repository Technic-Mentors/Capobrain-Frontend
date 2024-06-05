import React from 'react'
import { Helmet } from 'react-helmet';

export default function Defaultst() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Default Students" />
        <meta property="og:description" content="If there are any students who have not paid their fees or commitments on time, their names will be displayed in the default student’s module." />
        <meta property="og:image" content="https://capobrain.com/img/Default-Students-List.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/default-students" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Default Students" />
        <meta name="twitter:description" content="If there are any students who have not paid their fees or commitments on time, their names will be displayed in the default student’s module." />
        <meta name="twitter:image" content="https://capobrain.com/img/Default-Students-List.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/default-students",
            "name": "Capobrain",
            "description": "If there are any students who have not paid their fees or commitments on time, their names will be displayed in the default student’s module." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/default-students" />
        <meta name="description" content="If there are any students who have not paid their fees or commitments on time, their names will be displayed in the default student’s module." />
      </Helmet>

      <h1 className='manual-h1'>Default Students</h1>
      <p>If there are any students who have not paid their fees or commitments on time, their names will be displayed in the default student’s module.</p>
      <img src="/img/Default-Students-List.avif" className='img-fluid' alt="Default-Students-List" />
    </div>
  )
}
