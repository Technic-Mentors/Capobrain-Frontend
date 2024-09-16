import React from 'react'
import { Helmet } from 'react-helmet';

export default function List() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Result List" />
        <meta property="og:description" content="It will offer you a list of all results where you may examine the information and proper result card of any student. You can also change the subject's marks." />
        <meta property="og:image" content="https://capobrain.com/img/Result-List.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/result-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Result List" />
        <meta name="twitter:description" content="It will offer you a list of all results where you may examine the information and proper result card of any student. You can also change the subject's marks." />
        <meta name="twitter:image" content="https://capobrain.com/img/Result-List.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/result-list",
            "name": "Capobrain",
            "description": "It will offer you a list of all results where you may examine the information and proper result card of any student. You can also change the subject's marks." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/result-list" />
        <meta name="description" content="It will offer you a list of all results where you may examine the information and proper result card of any student. You can also change the subject's marks." />
      </Helmet>

      <h2 className='manual-h1'>Result List</h2>
      <p>It will offer you a list of all results where you may examine the information and proper result card of any student. You can also change the subject's marks. Students can access their result cards through their portal, and parents can access their child's result card as well.</p>
      <img src="/img/Result-List.avif" className='img-fluid' alt="Result-List" />
    </div>
  )
}
