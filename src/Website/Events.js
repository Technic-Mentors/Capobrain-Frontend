import React from 'react'
import { Helmet } from 'react-helmet';

export default function Events() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Events" />
        <meta property="og:description" content="In this module as we discuss that the website module will create the website for the school. Therefore, you will add the event details that you wish to display on your website to the event submodule. " />
        <meta property="og:image" content="https://capobrain.com/img/Add-School-Event-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/events" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Events" />
        <meta name="twitter:description" content="In this module as we discuss that the website module will create the website for the school. Therefore, you will add the event details that you wish to display on your website to the event submodule. " />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-School-Event-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/events",
            "name": "Capobrain",
            "description": "In this module as we discuss that the website module will create the website for the school. Therefore, you will add the event details that you wish to display on your website to the event submodule. " ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/events" />
        <meta name="description" content="In this module as we discuss that the website module will create the website for the school. Therefore, you will add the event details that you wish to display on your website to the event submodule. " />
      </Helmet>
      
      <h1 className='manual-h1'>Events</h1>
      <p>In this module as we discuss that the website module will create the website for the school. Therefore, you will add the event details that you wish to display on your website to the event submodule. You should provide the event's name, location, start and end dates, a picture, and a description. The event details will be displayed on the page that has the event name when you visit the website. This event can also be viewed, modified, or deleted, and any changes will also be reflected on the website.</p>
      <img src="/img/Add-School-Event-Detail.avif" className='img-fluid' alt="Add-School-Event-Detail" />
    </div>
  )
}
