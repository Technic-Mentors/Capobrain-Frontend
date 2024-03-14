import React from 'react'
import { Helmet } from 'react-helmet';

export default function Passout() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Passout Students" />
        <meta property="og:description" content="If you want to enter the data of passout students, you may do so by searching the student by ID and then entering the reason for passout. After you withdraw that student," />
        <meta property="og:image" content="https://capobrain.com/img/passout-students" />
        <meta property="og:url" content="https://capobrain.com/user-manual/passout-students" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Passout Students" />
        <meta name="twitter:description" content="If you want to enter the data of passout students, you may do so by searching the student by ID and then entering the reason for passout. After you withdraw that student," />
        <meta name="twitter:image" content="https://capobrain.com/img/passout-students" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/passout-students",
            "name": "Capobrain",
            "description": "If you want to enter the data of passout students, you may do so by searching the student by ID and then entering the reason for passout. After you withdraw that student," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/passout-students" />
        <meta name="description" content="If you want to enter the data of passout students, you may do so by searching the student by ID and then entering the reason for passout. After you withdraw that student," />
      </Helmet>

<h1 className='manual-h1'>Passout Students</h1>
<p>If you want to enter the data of passout students, you may do so by searching the student by ID and then entering the reason for passout. After you withdraw that student, it will be removed from the student list and it will show you in the list of passout students.</p>
 <img src="/img/Add-passout-Student.png" className='img-fluid' alt="Add-Passout-Student" />  
</div>
  )
}
