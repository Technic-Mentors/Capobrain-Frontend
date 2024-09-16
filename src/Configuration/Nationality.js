import React from 'react'
import { Helmet } from 'react-helmet';

export default function Nationality() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Nationality" />
        <meta property="og:description" content="In this module you can simply add the generic nationality country, It will show you the list of all nationality so you can view, update and delete anyone from this.

" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Nationality.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/nationality" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Nationality" />
        <meta name="twitter:description" content="In this module you can simply add the generic nationality country, It will show you the list of all nationality so you can view, update and delete anyone from this.

" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Nationality.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/nationality",
            "name": "Capobrain",
            "description": "In this module you can simply add the generic nationality country, It will show you the list of all nationality so you can view, update and delete anyone from this.

" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/nationality" />
        <meta name="description" content="In this module you can simply add the generic nationality country, It will show you the list of all nationality so you can view, update and delete anyone from this.

" />
      </Helmet>

      <h2 className='manual-h1'>Nationality</h2>
      <p>In this module you can simply add the generic nationality country, It will show you the list of all nationality so you can view, update and delete anyone from this.</p>
      <img src="/img/Add-Nationality.avif" className='img-fluid' alt="Add-Nationality" />
    </div>
  )
}
