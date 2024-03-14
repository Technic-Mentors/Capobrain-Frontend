import React from 'react'
import { Helmet } from 'react-helmet';

export default function Vehicle() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Vehicle" />
        <meta property="og:description" content="In vehicles, you will include information on any vehicles that the school owns. You will enter the car number, model, year of manufacture, registration number," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Vehicles.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/vehicles" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Vehicle" />
        <meta name="twitter:description" content="In vehicles, you will include information on any vehicles that the school owns. You will enter the car number, model, year of manufacture, registration number," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Vehicles.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/vehicles",
            "name": "Capobrain",
            "description": "In vehicles, you will include information on any vehicles that the school owns. You will enter the car number, model, year of manufacture, registration number," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/vehicles" />
        <meta name="description" content="In vehicles, you will include information on any vehicles that the school owns. You will enter the car number, model, year of manufacture, registration number," />
      </Helmet>

      <h1 className='manual-h1'>Vehicle</h1>
      <p>In vehicles, you will include information on any vehicles that the school owns. You will enter the car number, model, year of manufacture, registration number, maximum seating capacity, driver name, licence, contact information, image, and description. This car is simple to see, amend, or delete.</p>
      <img src="/img/Add-Vehicles.png" className='img-fluid' alt="Add-Vehicles" />
    </div>
  )
}
