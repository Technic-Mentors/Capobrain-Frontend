import { Helmet } from 'react-helmet';import React from 'react'


export default function Notice() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Notice" />
        <meta property="og:description" content="The announcement module contains two submodules: news and notices. In the notices submodule, you can add any notice for everyone. You will enter the notice title, link, date," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Notice.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/notice" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Notice" />
        <meta name="twitter:description" content="The announcement module contains two submodules: news and notices. In the notices submodule, you can add any notice for everyone. You will enter the notice title, link, date," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Notice.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/notice",
            "name": "Capobrain",
            "description": "The announcement module contains two submodules: news and notices. In the notices submodule, you can add any notice for everyone. You will enter the notice title, link, date," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/notice" />
        <meta name="description" content="The announcement module contains two submodules: news and notices. In the notices submodule, you can add any notice for everyone. You will enter the notice title, link, date," />
      </Helmet>

      <h1 className='manual-h1'>Notice</h1>
      <p>The announcement module contains two submodules: news and notices. In the notices submodule, you can add any notice for everyone. You will enter the notice title, link, date, added by, and description and save it; this notice will be displayed to everyone on their portal. Any notice can be seen, updated, or deleted at any moment.  </p>
      <img src="/img/Add-Notice.png" className='img-fluid' alt="Add-Notice" />
    </div>
  )
}
