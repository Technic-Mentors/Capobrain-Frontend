import React from 'react'
import { Helmet } from 'react-helmet';

export default function Familywise() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Family Wise Account" />
        <meta property="og:description" content="Because every student adds family details in their admission form and parent ID will be assigned at the end of student acceptance, the family wise account will be formed and it will reveal their kid account detail such as ID," />
        <meta property="og:image" content="https://capobrain.com/img/Family-Account-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/family-wise-account" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Family Wise Account" />
        <meta name="twitter:description" content="Because every student adds family details in their admission form and parent ID will be assigned at the end of student acceptance, the family wise account will be formed and it will reveal their kid account detail such as ID," />
        <meta name="twitter:image" content="https://capobrain.com/img/Family-Account-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/family-wise-account",
            "name": "Capobrain",
            "description": "Because every student adds family details in their admission form and parent ID will be assigned at the end of student acceptance, the family wise account will be formed and it will reveal their kid account detail such as ID," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/family-wise-account" />
        <meta name="description" content="Because every student adds family details in their admission form and parent ID will be assigned at the end of student acceptance, the family wise account will be formed and it will reveal their kid account detail such as ID," />
      </Helmet>

      <h2 className='manual-h1'>Family Wise Account</h2>
      <p>Because every student adds family details in their admission form and parent ID will be assigned at the end of student acceptance, the family wise account will be formed and it will reveal their kid account detail such as ID, name, class, section, and overall balance. This information is also available to parents via their portal.</p>
      <img src="/img/Family-Account-Detail.avif" className='img-fluid' alt="Family-Account-Detail" />
      
    </div>
  )
}
