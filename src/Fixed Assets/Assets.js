import React from 'react'
import { Helmet } from 'react-helmet';

export default function Assets() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Assets" />
        <meta property="og:description" content="A business asset is something that has current or future economic worth to the company. Assets are everything of value to a business that promotes productivity, efficiency, and revenue." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Asset.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/assets" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Assets" />
        <meta name="twitter:description" content="A business asset is something that has current or future economic worth to the company. Assets are everything of value to a business that promotes productivity, efficiency, and revenue." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Asset.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/assets",
            "name": "Capobrain",
            "description": "A business asset is something that has current or future economic worth to the company. Assets are everything of value to a business that promotes productivity, efficiency, and revenue." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/assets" />
        <meta name="description" content="A business asset is something that has current or future economic worth to the company. Assets are everything of value to a business that promotes productivity, efficiency, and revenue." />
      </Helmet>

      <h2 className='manual-h1'>Assets</h2>
      <p>A business asset is something that has current or future economic worth to the company.  Assets are everything of value to a business that promotes productivity, efficiency, and revenue. So, this module works precisely the same way. In this you will choose Branch name, asset type, asset name and amount. It will also provide a list of all asset types, which you may browse, alter, and delete.</p>
      <img src="/img/Add-Asset.avif" className='img-fluid' alt="Add-Asset" />
    </div>
  )
}
