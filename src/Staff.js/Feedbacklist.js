import React from 'react'
import { Helmet } from 'react-helmet';

export default function Feedbacklist() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Feedback List" />
        <meta property="og:description" content="If a school user wants to post a review about any of the staff, they may search by ID and there is a box for feedback where they can give input and then save it, and it will display a list of all the staff comments." />
        <meta property="og:image" content="https://capobrain.com/img/Add-fedback.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/feedback-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Feedback List" />
        <meta name="twitter:description" content="If a school user wants to post a review about any of the staff, they may search by ID and there is a box for feedback where they can give input and then save it, and it will display a list of all the staff comments." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-fedback.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/feedback-list",
            "name": "Capobrain",
            "description": "If a school user wants to post a review about any of the staff, they may search by ID and there is a box for feedback where they can give input and then save it, and it will display a list of all the staff comments." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/feedback-list" />
        <meta name="description" content="If a school user wants to post a review about any of the staff, they may search by ID and there is a box for feedback where they can give input and then save it, and it will display a list of all the staff comments." />
      </Helmet>

<h1 className='manual-h1'>Feedback List</h1>
<p>If a school user wants to post a review about any of the staff, they may search by ID and there is a box for feedback where they can give input and then save it, and it will display a list of all the staff comments.</p>
     <img src="/img/Fedback.avif" className='img-fluid' alt="Add-fedback" /> 
    </div>
  )
}
