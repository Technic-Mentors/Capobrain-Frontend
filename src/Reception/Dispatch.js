import React from 'react'
import { Helmet } from 'react-helmet';

export default function Dispatch() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Dashboard" />
        <meta property="og:description" content="In the postal dispatch module, you may enter all postal dispatch details such as the title, from title, reference number, address, and date. In postal dispatch all the fields are mandatory." />
        <meta property="og:image" content="https://capobrain.com/img/dash.jpg" />
        <meta property="og:url" content="https://capobrain.com/user-manual/postal-dispatch" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Dashboard" />
        <meta name="twitter:description" content="In the postal dispatch module, you may enter all postal dispatch details such as the title, from title, reference number, address, and date. In postal dispatch all the fields are mandatory." />
        <meta name="twitter:image" content="https://capobrain.com/img/dash.jpg" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/postal-dispatch",
            "name": "Capobrain",
            "description": "In the postal dispatch module, you may enter all postal dispatch details such as the title, from title, reference number, address, and date. In postal dispatch all the fields are mandatory." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/postal-dispatch" />
        <meta name="description" content="In the postal dispatch module, you may enter all postal dispatch details such as the title, from title, reference number, address, and date. In postal dispatch all the fields are mandatory." />
      </Helmet>

      <h1 className='manual-h1'>Postal Dispatch</h1>
      <p>In the postal dispatch module, you may enter all postal dispatch details such as the title, from title, reference number, address, and date. In postal dispatch all the fields are mandatory. This is the option where you may add all postal dispatches and examine the list of postal dispatches. You can also update the details of any postal dispatch.</p>
      <img src="/img/Add-Postal-Dispatch.png" className='img-fluid' alt="Add-Postal-Dispatch" />
    </div>
  )
}
