import React from 'react'
import { Helmet } from 'react-helmet';

export default function Papergen() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Paper Generator" />
        <meta property="og:description" content="This module creates the paper in accordance with the chosen chapter and topic. You must first choose the branch, then the class, section, and subject," />
        <meta property="og:image" content="https://capobrain.com/img/Show-Chapter-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/paper-generate" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Paper Generator" />
        <meta name="twitter:description" content="This module creates the paper in accordance with the chosen chapter and topic. You must first choose the branch, then the class, section, and subject," />
        <meta name="twitter:image" content="https://capobrain.com/img/Show-Chapter-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/paper-generate",
            "name": "Capobrain",
            "description": "This module creates the paper in accordance with the chosen chapter and topic. You must first choose the branch, then the class, section, and subject," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/paper-generate" />
        <meta name="description" content="This module creates the paper in accordance with the chosen chapter and topic. You must first choose the branch, then the class, section, and subject," />
      </Helmet>

    <h1 className='manual-h1'>Paper Generator</h1>
    <p>This module creates the paper in accordance with the chosen chapter and topic. You must first choose the branch, then the class, section, and subject, and finally the chapter and subject for which you wish to create the paper. It will pick each question from the chapter and topic and generate the paper.</p>
    <img src="/img/Show-Chapter-Detail.png" className='img-fluid' alt="" />
  </div>
  )
}
