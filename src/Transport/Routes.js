import React from 'react'
import { Helmet } from 'react-helmet';

export default function Routess() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Routes" />
        <meta property="og:description" content="The first module in the transport module is route, where you will enter the routes. Routes will be chosen when you allocate a vehicle to a student, so choose the route for the address." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Routes.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/routes" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Routes" />
        <meta name="twitter:description" content="The first module in the transport module is route, where you will enter the routes. Routes will be chosen when you allocate a vehicle to a student, so choose the route for the address." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Routes.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/routes",
            "name": "Capobrain",
            "description": "The first module in the transport module is route, where you will enter the routes. Routes will be chosen when you allocate a vehicle to a student, so choose the route for the address." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/routes" />
        <meta name="description" content="The first module in the transport module is route, where you will enter the routes. Routes will be chosen when you allocate a vehicle to a student, so choose the route for the address." />
      </Helmet>

      <h1 className='manual-h1'>Routes</h1>
      <p>The first module in the transport module is route, where you will enter the routes. Routes will be chosen when you allocate a vehicle to a student, so choose the route for the address. So simply enter the route name in this field. You can also browse, change, or remove those routes.</p>
      <img src="/img/Add-Routes.avif" className='img-fluid' alt="Add-Routes" />
    </div>
  )
}
