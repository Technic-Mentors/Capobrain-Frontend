import React from 'react'
import { Helmet } from 'react-helmet';

export default function Innventory() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Inventory" />
        <meta property="og:description" content="In this module, you will enter the name of the inventory, as well as its cost and sale price. It will also display a list of all inventory to which you will be provided." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Inventory.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/inventory" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Inventory" />
        <meta name="twitter:description" content="In this module, you will enter the name of the inventory, as well as its cost and sale price. It will also display a list of all inventory to which you will be provided." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Inventory.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/inventory",
            "name": "Capobrain",
            "description": "In this module, you will enter the name of the inventory, as well as its cost and sale price. It will also display a list of all inventory to which you will be provided." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/inventory" />
        <meta name="description" content="In this module, you will enter the name of the inventory, as well as its cost and sale price. It will also display a list of all inventory to which you will be provided." />
      </Helmet>

      <h1 className='manual-h1'>Inventory</h1>
      <p>In this module, you will enter the name of the inventory, as well as its cost and sale price. It will also display a list of all inventory to which you will be provided.</p>
      <img src="/img/Add-Inventory.png" className='img-fluid' alt="Add-Inventory" />
    </div>
  )
}
