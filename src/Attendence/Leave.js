import React from 'react'
import { Helmet } from 'react-helmet';

export default function Leave() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Leave Request" />
        <meta property="og:description" content="If a student or teacher wants to take a leave and applied for it through their portal, this is the option that school users can view. School users have the right to accept or reject the leave request," />
        <meta property="og:image" content="https://capobrain.com/img/Update-Leave.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/leave-request" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Leave Request" />
        <meta name="twitter:description" content="If a student or teacher wants to take a leave and applied for it through their portal, this is the option that school users can view. School users have the right to accept or reject the leave request," />
        <meta name="twitter:image" content="https://capobrain.com/img/Update-Leave.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/leave-request",
            "name": "Capobrain",
            "description": "If a student or teacher wants to take a leave and applied for it through their portal, this is the option that school users can view. School users have the right to accept or reject the leave request," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/leave-request" />
        <meta name="description" content="If a student or teacher wants to take a leave and applied for it through their portal, this is the option that school users can view. School users have the right to accept or reject the leave request," />
      </Helmet>

      <h2 className='manual-h1'>Leave Request</h2>
      <p>If a student or teacher wants to take a leave and applied for it through their portal, this is the option that school users can view. School users have the right to accept or reject the leave request, and the status of the leave can be viewed through their portals.</p>
      <img src="/img/Update-Leave.avif" className='img-fluid' alt="Update-Leave" />
    </div>
  )
}
