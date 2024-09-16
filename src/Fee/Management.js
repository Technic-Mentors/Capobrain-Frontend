import React from 'react'
import { Helmet } from 'react-helmet';

export default function Management() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Fine Management" />
        <meta property="og:description" content="If you want to apply a fine to a specific student, first search for the student, then enter the fine amount or cause for the fine, and finally save it. The student must pay the fine," />
        <meta property="og:image" content="https://capobrain.com/img/Fine-Management.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/fine-management" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Fine Management" />
        <meta name="twitter:description" content="If you want to apply a fine to a specific student, first search for the student, then enter the fine amount or cause for the fine, and finally save it. The student must pay the fine," />
        <meta name="twitter:image" content="https://capobrain.com/img/Fine-Management.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/fine-management",
            "name": "Capobrain",
            "description": "If you want to apply a fine to a specific student, first search for the student, then enter the fine amount or cause for the fine, and finally save it. The student must pay the fine," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/fine-management" />
        <meta name="description" content="If you want to apply a fine to a specific student, first search for the student, then enter the fine amount or cause for the fine, and finally save it. The student must pay the fine," />
      </Helmet>

      <h2 className='manual-h1'>Fine Management</h2>
      <p>If you want to apply a fine to a specific student, first search for the student, then enter the fine amount or cause for the fine, and finally save it. The student must pay the fine, and the amount will be indicated in the student account that the school has applied the fine to you.</p>
      <img src="/img/Fine-Management.avif" className='img-fluid' alt="Fine-Management" />
    </div>
  )
}
