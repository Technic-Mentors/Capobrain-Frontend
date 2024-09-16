import React from 'react'
import { Helmet } from 'react-helmet';

export default function Typesp() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Sports Type" />
        <meta property="og:description" content="You only need to select the branch name and the sports type in this module, such as the types of sports that will be played in this branch." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Sport-Type.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/sports-type" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Sports Type" />
        <meta name="twitter:description" content="You only need to select the branch name and the sports type in this module, such as the types of sports that will be played in this branch." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Sport-Type.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/sports-type",
            "name": "Capobrain",
            "description": "You only need to select the branch name and the sports type in this module, such as the types of sports that will be played in this branch." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/sports-type" />
        <meta name="description" content="You only need to select the branch name and the sports type in this module, such as the types of sports that will be played in this branch." />
      </Helmet>

      <h2 className='manual-h1'>Sports Type</h2>
      <p>You only need to select the branch name and the sports type in this module, such as the types of sports that will be played in this branch. This sports type will be required when you add the sports detail, and you can view, edit, or delete it whenever you like. If you select that type, the sports detail will also be updated.</p>
      <img src="/img/Add-Sport-Type.avif" className='img-fluid' alt="Add-Sport-Type" />
    </div>
  )
}
