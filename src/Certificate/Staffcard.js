import React from 'react'
import { Helmet } from 'react-helmet';

export default function Staffcard() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff ID Card" />
        <meta property="og:description" content="When you add a teacher, the teacher ID card is generated in the certificate module. It will provide you a list of all teachers who have an ID card, which you may view and print." />
        <meta property="og:image" content="https://capobrain.com/img/Staff-Id-Card.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-id-card" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff ID Card" />
        <meta name="twitter:description" content="When you add a teacher, the teacher ID card is generated in the certificate module. It will provide you a list of all teachers who have an ID card, which you may view and print." />
        <meta name="twitter:image" content="https://capobrain.com/img/Staff-Id-Card.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-id-card",
            "name": "Capobrain",
            "description": "When you add a teacher, the teacher ID card is generated in the certificate module. It will provide you a list of all teachers who have an ID card, which you may view and print." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-id-card" />
        <meta name="description" content="When you add a teacher, the teacher ID card is generated in the certificate module. It will provide you a list of all teachers who have an ID card, which you may view and print." />
      </Helmet>

      <h1 className='manual-h1'>Staff ID Card</h1>
      <p>When you add a teacher, the teacher ID card is generated in the certificate module. It will provide you a list of all teachers who have an ID card, which you may view and print. The ID card will display the Teacher ID, name, and branch name.</p>
      <img src="/img/Staff-ID-Card.png" className='img-fluid' alt="Staff-Id-Card" />
    </div>
  )
}
