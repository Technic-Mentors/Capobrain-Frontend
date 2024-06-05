import React from 'react'
import { Helmet } from 'react-helmet';

export default function Sportsdeta() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Sports Detail" />
        <meta property="og:description" content="You will enter the sports information in this module. You must first select a branch, after which you may see the types of sports available for that branch in the type box." />
        <meta property="og:image" content="https://capobrain.com/img/Sports-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/sports-detail" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Sports Detail" />
        <meta name="twitter:description" content="You will enter the sports information in this module. You must first select a branch, after which you may see the types of sports available for that branch in the type box." />
        <meta name="twitter:image" content="https://capobrain.com/img/Sports-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/sports-detail",
            "name": "Capobrain",
            "description": "You will enter the sports information in this module. You must first select a branch, after which you may see the types of sports available for that branch in the type box." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/sports-detail" />
        <meta name="description" content="You will enter the sports information in this module. You must first select a branch, after which you may see the types of sports available for that branch in the type box." />
      </Helmet>

      <h1 className='manual-h1'>Sports Detail</h1>
      <p>You will enter the sports information in this module. You must first select a branch, after which you may see the types of sports available for that branch in the type box. You must then select a class, section, student name, and a sport, as well as the date and time for that sport. You will see it.</p>
      <img src="/img/Sports-Detail.avif" className='img-fluid' alt="Sports-Detail" />
    </div>
  )
}
