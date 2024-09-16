import React from 'react'
import { Helmet } from 'react-helmet';

export default function Sections() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Sections" />
        <meta property="og:description" content="Classes use section modules. You will undoubtedly add the part after adding the classes. Multiple sections of the same class may be added." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Section.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/sections" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Sections" />
        <meta name="twitter:description" content="Classes use section modules. You will undoubtedly add the part after adding the classes. Multiple sections of the same class may be added." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Section.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/sections",
            "name": "Capobrain",
            "description": "Classes use section modules. You will undoubtedly add the part after adding the classes. Multiple sections of the same class may be added." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/sections" />
        <meta name="description" content="Classes use section modules. You will undoubtedly add the part after adding the classes. Multiple sections of the same class may be added." />
      </Helmet>

      <h2 className='manual-h1'>Sections</h2>
      <p>Classes use section modules. You will undoubtedly add the part after adding the classes. Multiple sections of the same class may be added. You can add through this section module, for instance, if a Class 1 has Section A and Section B.</p>
      <img src="/img/Add-Section.avif" className='img-fluid' alt="Add-Section" />
    </div>
  )
}
