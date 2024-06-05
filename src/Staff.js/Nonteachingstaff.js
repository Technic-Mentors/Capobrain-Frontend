import React from 'react'
import { Helmet } from 'react-helmet';

export default function Nonteachingstaff() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Non Teachnig Staff" />
        <meta property="og:description" content="There is a form for non-teaching employees where you can enter all of the personnel's personal information as well as their job title. You can browse a list of all the non-teaching staff," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Non-Teachning-Staff.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/non-teaching-staff" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Non Teachnig Staff" />
        <meta name="twitter:description" content="There is a form for non-teaching employees where you can enter all of the personnel's personal information as well as their job title. You can browse a list of all the non-teaching staff," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Non-Teachning-Staff.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/non-teaching-staff",
            "name": "Capobrain",
            "description": "There is a form for non-teaching employees where you can enter all of the personnel's personal information as well as their job title. You can browse a list of all the non-teaching staff," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/non-teaching-staff" />
        <meta name="description" content="There is a form for non-teaching employees where you can enter all of the personnel's personal information as well as their job title. You can browse a list of all the non-teaching staff," />
      </Helmet>

<h1 className='manual-h1'>Non-Teaching Staff</h1>
<p>There is a form for non-teaching employees where you can enter all of the personnel's personal information as well as their job title. You can browse a list of all the non-teaching staff, and you can change anything in the form.</p>
     <img src="/img/Add-Non-Teachning-Staff.avif" className='img-fluid' alt="Add-Non-Teachning-Staff" /> 
    </div>
  )
}
