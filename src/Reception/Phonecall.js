import React from 'react'
import { Helmet } from 'react-helmet';

export default function Phonecall() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Phone Call Log" />
        <meta property="og:description" content="There is an option in the call log to enter all incoming and outgoing school calls. In this module, you must enter the person's name, phone number, duration of the call," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Postal-Dispatch.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/phone-call-log" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Phone Call Log" />
        <meta name="twitter:description" content="There is an option in the call log to enter all incoming and outgoing school calls. In this module, you must enter the person's name, phone number, duration of the call," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Postal-Dispatch.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/phone-call-log",
            "name": "Capobrain",
            "description": "There is an option in the call log to enter all incoming and outgoing school calls. In this module, you must enter the person's name, phone number, duration of the call," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/phone-call-log" />
        <meta name="description" content="There is an option in the call log to enter all incoming and outgoing school calls. In this module, you must enter the person's name, phone number, duration of the call," />
      </Helmet>

      <h2 className='manual-h1'>Call Log</h2>
      <p>There is an option in the call log to enter all incoming and outgoing school calls. In this module, you must enter the person's name, phone number, duration of the call, and call status to complete the call's details. In Add call log all the fields are mandatory and it will show you the list of all the call detail.</p>
      <img src="/img/Call-log.avif" className='img-fluid' alt="Add-Call-Log" />
    </div>
  )
}
