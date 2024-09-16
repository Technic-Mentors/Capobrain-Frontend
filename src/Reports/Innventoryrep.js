import React from 'react'
import { Helmet } from 'react-helmet';

export default function Innventoryrep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Inventory Report" />
        <meta property="og:description" content="Inventory report provides a summary of an organization's inventory, which is a detailed list of goods, products, or materials it holds in stock at a specific point in time." />
        <meta property="og:image" content="https://capobrain.com/img/Inventory-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/inventory-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Inventory Report" />
        <meta name="twitter:description" content="Inventory report provides a summary of an organization's inventory, which is a detailed list of goods, products, or materials it holds in stock at a specific point in time." />
        <meta name="twitter:image" content="https://capobrain.com/img/Inventory-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/inventory-report",
            "name": "Capobrain",
            "description": "Inventory report provides a summary of an organization's inventory, which is a detailed list of goods, products, or materials it holds in stock at a specific point in time." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/inventory-report" />
        <meta name="description" content="Inventory report provides a summary of an organization's inventory, which is a detailed list of goods, products, or materials it holds in stock at a specific point in time." />
      </Helmet>

    <h2 className='manual-h1'>Inventory Report</h2>
    <p>Inventory report provides a summary of an organization's inventory, which is a detailed list of goods, products, or materials it holds in stock at a specific point in time. Inventory reports are essential tools for organization to monitor and manage their inventory levels efficiently. The report typically includes the following information inventory name, cost price, sale price and quantity. </p>
    <img src="/img/Inventory-Report.avif" className='img-fluid' alt="Inventory-Report" />
  </div>
  )
}
