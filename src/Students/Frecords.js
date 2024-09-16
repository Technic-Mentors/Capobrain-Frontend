import React from 'react'
import { Helmet } from 'react-helmet';

export default function Frecords() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Family Record" />
        <meta property="og:description" content="It will provide a list of all the student's family in the family record. If you want to see how many students have the same family, this list is useful, and when we click on the view button," />
        <meta property="og:image" content="https://capobrain.com/img/Family-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/family-record" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Family Record" />
        <meta name="twitter:description" content="It will provide a list of all the student's family in the family record. If you want to see how many students have the same family, this list is useful, and when we click on the view button," />
        <meta name="twitter:image" content="https://capobrain.com/img/Family-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/family-record",
            "name": "Capobrain",
            "description": "It will provide a list of all the student's family in the family record. If you want to see how many students have the same family, this list is useful, and when we click on the view button," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/family-record" />
        <meta name="description" content="It will provide a list of all the student's family in the family record. If you want to see how many students have the same family, this list is useful, and when we click on the view button," />
      </Helmet>

<h2 className='manual-h1'>Family Record</h2>
<p>It will provide a list of all the student's family in the family record. If you want to see how many students have the same family, this list is useful, and when we click on the view button, it displays the student's name, ID, class, and section.</p>
     <img src="/img/Family-Detail.avif" className='img-fluid' alt="Family-Detail" />  
    </div>
  )
}
