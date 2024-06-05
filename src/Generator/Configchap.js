import React from 'react'
import { Helmet } from 'react-helmet';

export default function Configchap() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Chapter" />
        <meta property="og:description" content="There are several submodules in paper generator, the first of which is configure chapter. You can set the chapter name and number here." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Chapter-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-chapter" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Chapter" />
        <meta name="twitter:description" content="There are several submodules in paper generator, the first of which is configure chapter. You can set the chapter name and number here." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Chapter-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-chapter",
            "name": "Capobrain",
            "description": "There are several submodules in paper generator, the first of which is configure chapter. You can set the chapter name and number here." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-chapter" />
        <meta name="description" content="There are several submodules in paper generator, the first of which is configure chapter. You can set the chapter name and number here." />
      </Helmet>

    <h1 className='manual-h1'>Configure Chapter</h1>
    <p>There are several submodules in paper generator, the first of which is configure chapter. You can set the chapter name and number here. The configuration chapter's goal is for you to be mentioned in the paper using information from this chapter.</p>
    <img src="/img/Add-Chapter-Detail.avif" className='img-fluid' alt="Add-Chapter-Detail" />
  </div>
  )
}
