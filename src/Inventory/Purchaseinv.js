import React from 'react'
import { Helmet } from 'react-helmet';

export default function Purchaseinv() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Purchase Inventory" />
        <meta property="og:description" content="You will purchase inventory from a supplier in this module, but first we must add the supplier from the supplier page. When you first select the inventory, it will automatically load the quantity," />
        <meta property="og:image" content="https://capobrain.com/img/Purchase-Inventory.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/purchase-inventory" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Purchase Inventory" />
        <meta name="twitter:description" content="You will purchase inventory from a supplier in this module, but first we must add the supplier from the supplier page. When you first select the inventory, it will automatically load the quantity," />
        <meta name="twitter:image" content="https://capobrain.com/img/Purchase-Inventory.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/purchase-inventory",
            "name": "Capobrain",
            "description": "You will purchase inventory from a supplier in this module, but first we must add the supplier from the supplier page. When you first select the inventory, it will automatically load the quantity," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/purchase-inventory" />
        <meta name="description" content="You will purchase inventory from a supplier in this module, but first we must add the supplier from the supplier page. When you first select the inventory, it will automatically load the quantity," />
      </Helmet>

      <h1 className='manual-h1'>Purchase Inventory</h1>
      <p>You will purchase inventory from a supplier in this module, but first we must add the supplier from the supplier page. When you first select the inventory, it will automatically load the quantity, cost price, or sale price. When you click the submit button, the product will be added to the grid, and when you click the checkout button, the purchase invoice and all purchase amount data will be shown in the supplier account.</p>
      <img src="/img/Purchase-Inventory.png" className='img-fluid mt-5' alt="" />
    </div>
  )
}
