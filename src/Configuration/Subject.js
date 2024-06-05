import React from 'react'
import { Helmet } from 'react-helmet';

export default function Subject() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Subject" />
        <meta property="og:description" content="In this module, you will enter all the subjects of all classes. It will show you the list of all the all the subjects so you can view, edit and delete any subject anytime." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Subject.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/subject" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Subject" />
        <meta name="twitter:description" content="In this module, you will enter all the subjects of all classes. It will show you the list of all the all the subjects so you can view, edit and delete any subject anytime." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Subject.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/subject",
            "name": "Capobrain",
            "description": "In this module, you will enter all the subjects of all classes. It will show you the list of all the all the subjects so you can view, edit and delete any subject anytime." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/subject" />
        <meta name="description" content="In this module, you will enter all the subjects of all classes. It will show you the list of all the all the subjects so you can view, edit and delete any subject anytime." />
      </Helmet>

      <h1 className='manual-h1'>Subject</h1>
      <p>In this module, you will enter all the subjects of all classes. It will show you the list of all the all the subjects so you can view, edit and delete any subject anytime.</p>
      <img src="/img/Add-Subject.avif" className='img-fluid' alt="Add-Subject" />
    </div>
  )
}
