import React from 'react'
import { Helmet } from 'react-helmet';

export default function Calender1() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Calender" />
        <meta property="og:description" content="In calendar, you will add academic session and the starting month of the session and it will show you the list of all the months of that session then you will active the current month" />
        <meta property="og:image" content="https://capobrain.com/img/Calendar.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/calender" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Calender" />
        <meta name="twitter:description" content="In calendar, you will add academic session and the starting month of the session and it will show you the list of all the months of that session then you will active the current month" />
        <meta name="twitter:image" content="https://capobrain.com/img/Calendar.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/calender",
            "name": "Capobrain",
            "description": "In calendar, you will add academic session and the starting month of the session and it will show you the list of all the months of that session then you will active the current month" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/calender" />
        <meta name="description" content="In calendar, you will add academic session and the starting month of the session and it will show you the list of all the months of that session then you will active the current month" />
      </Helmet>

    <h1 className='manual-h1'>Calender</h1>
    <p>In calendar, you will add academic session and the starting month of the session and it will show you the list of all the months of that session then you will active the current month and it will show you the current academic session or month, fee transaction will be working according to current month.</p>
    <img src="/img/Calendar.avif" className='img-fluid' alt="Calendar" />
  </div>
  )
}
