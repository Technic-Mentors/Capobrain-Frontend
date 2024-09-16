import React from 'react'
import { Helmet } from 'react-helmet';

export default function Assignveh() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Dashboard" />
        <meta property="og:description" content="This module determines which car is assigned to which student and what route is taken, so it works. You will first search the student by ID, which will load the data of that student," />
        <meta property="og:image" content="https://capobrain.com/img/Assign-Vehicle.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/assign-vehicles" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Dashboard" />
        <meta name="twitter:description" content="This module determines which car is assigned to which student and what route is taken, so it works. You will first search the student by ID, which will load the data of that student," />
        <meta name="twitter:image" content="https://capobrain.com/img/Assign-Vehicle.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/assign-vehicles",
            "name": "Capobrain",
            "description": "This module determines which car is assigned to which student and what route is taken, so it works. You will first search the student by ID, which will load the data of that student," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/assign-vehicles" />
        <meta name="description" content="This module determines which car is assigned to which student and what route is taken, so it works. You will first search the student by ID, which will load the data of that student," />
      </Helmet>

      <h2 className='manual-h1'>Assign Vehicle</h2>
      <p>This module determines which car is assigned to which student and what route is taken, so it works. You will first search the student by ID, which will load the data of that student, then you will select the vehicle that you will assign to that student, then you will select the route, and the most important thing is that you must add pick up and drop off times, and then you will add the transport charges for that student with an effective date, and the transport charges will work according to that date.</p>
      <img src="/img/Assign-Vehicle.avif" className='img-fluid' alt="Assign-Vehicle" />
    </div>
  )
}
