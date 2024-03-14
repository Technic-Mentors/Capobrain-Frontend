import React from 'react'
import { Helmet } from 'react-helmet';

export default function Assetstype() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Asset Type" />
        <meta property="og:description" content="A business asset is an item of value owned by a company. Business assets span many categories. They can be physical, tangible goods, such as vehicles, real estate, computers," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Asset-Type.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/asset-type" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Asset Type" />
        <meta name="twitter:description" content="A business asset is an item of value owned by a company. Business assets span many categories. They can be physical, tangible goods, such as vehicles, real estate, computers," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Asset-Type.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/asset-type",
            "name": "Capobrain",
            "description": "A business asset is an item of value owned by a company. Business assets span many categories. They can be physical, tangible goods, such as vehicles, real estate, computers," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/asset-type" />
        <meta name="description" content="A business asset is an item of value owned by a company. Business assets span many categories. They can be physical, tangible goods, such as vehicles, real estate, computers," />
      </Helmet>

      <h1 className='manual-h1'>Asset Type</h1>
      <p>A business asset is an item of value owned by a company. Business assets span many categories. They can be physical, tangible goods, such as vehicles, real estate, computers, office furniture, and other fixtures, or intangible items, such as intellectual property. In this you simply select the branch name and asset type. It will also provide a list of all asset types, which you may browse, alter, and delete.</p>
      <img src="/img/Add-Asset-Type.png" className='img-fluid' alt="Add-Asset-Type" />
    </div>
  )
}
