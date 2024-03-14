import React from 'react'
import { Helmet } from 'react-helmet';

export default function Summerwork() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Summer Home Work" />
        <meta property="og:description" content="This module allows school users to enter summer homework details for any subject. You will select the branch, class, and subject, and then add the information of the homework" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Summer-Homework.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/summer-home-work" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Summer Home Work" />
        <meta name="twitter:description" content="This module allows school users to enter summer homework details for any subject. You will select the branch, class, and subject, and then add the information of the homework" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Summer-Homework.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/summer-home-work",
            "name": "Capobrain",
            "description": "This module allows school users to enter summer homework details for any subject. You will select the branch, class, and subject, and then add the information of the homework" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/summer-home-work" />
        <meta name="description" content="This module allows school users to enter summer homework details for any subject. You will select the branch, class, and subject, and then add the information of the homework" />
      </Helmet>

      <h1 className='manual-h1'>Summer Home Work</h1>
      <p>This module allows school users to enter summer homework details for any subject. You will select the branch, class, and subject, and then add the information of the homework and their grades so that summer homework details may be viewed by students on their site.</p>
      <img src="/img/Add-Summer-Homework.png" className='img-fluid' alt="Add-Summer-Homework" />
    </div>
  )
}
