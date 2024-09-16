import React from 'react'
import { Helmet } from 'react-helmet';

export default function Fedbackrecord() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Feedback Record" />
        <meta property="og:description" content="If a school user wants to post a review about any of the student, they may search by ID and there is a box for feedback where they can give input and then save it," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Students-Feedback.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/feedback-record" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Feedback Record" />
        <meta name="twitter:description" content="If a school user wants to post a review about any of the student, they may search by ID and there is a box for feedback where they can give input and then save it," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Students-Feedback.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/feedback-record",
            "name": "Capobrain",
            "description": "If a school user wants to post a review about any of the student, they may search by ID and there is a box for feedback where they can give input and then save it," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/feedback-record" />
        <meta name="description" content="If a school user wants to post a review about any of the student, they may search by ID and there is a box for feedback where they can give input and then save it," />
      </Helmet>

<h2 className='manual-h1'>Feedback Record</h2>
<p>If a school user wants to post a review about any of the student, they may search by ID and there is a box for feedback where they can give input and then save it, and it will display a list of all the student comments.</p>
 <img src="/img/Add-Students-Feedback.avif" className='img-fluid' alt="Add-Students-Feedback" />  
</div>
  )
}
