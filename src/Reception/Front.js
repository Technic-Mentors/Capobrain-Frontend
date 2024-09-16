import React from 'react'
import { Helmet } from 'react-helmet';

export default function Front() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Front Office" />
        <meta property="og:description" content="This is the reception module settings; here you may add the meeting purpose that you will add during the visitors meeting detail, so you can add meeting purpose or description. " />
        <meta property="og:image" content="https://capobrain.com/img/Configure-Front-Office.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-front-office" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Front Office" />
        <meta name="twitter:description" content="This is the reception module settings; here you may add the meeting purpose that you will add during the visitors meeting detail, so you can add meeting purpose or description. " />
        <meta name="twitter:image" content="https://capobrain.com/img/Configure-Front-Office.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-front-office",
            "name": "Capobrain",
            "description": "This is the reception module settings; here you may add the meeting purpose that you will add during the visitors meeting detail, so you can add meeting purpose or description. " ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-front-office" />
        <meta name="description" content="This is the reception module settings; here you may add the meeting purpose that you will add during the visitors meeting detail, so you can add meeting purpose or description. " />
      </Helmet>

    <h2 className='manual-h1'>Configure Front Office</h2>
    <p>This is the reception module settings; here you may add the meeting purpose that you will add during the visitors meeting detail, so you can add meeting purpose or description. Both fields are mandatory.</p>
    <img src="/img/Configure-Front-Office.avif" className='img-fluid' alt="Configure-Front-Office" />
  </div>
  )
}
