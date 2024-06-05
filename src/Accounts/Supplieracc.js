import React from 'react'
import { Helmet } from 'react-helmet';

export default function Supplieracc() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Supplier Account" />
        <meta property="og:description" content="We require suppliers to purchase inventory, thus the supplier account displays all transactions that we will purchase from them, including the payable amount, your paid amount," />
        <meta property="og:image" content="https://capobrain.com/img/Supplier-Account-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/supplier-account" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Supplier Account" />
        <meta name="twitter:description" content="We require suppliers to purchase inventory, thus the supplier account displays all transactions that we will purchase from them, including the payable amount, your paid amount," />
        <meta name="twitter:image" content="https://capobrain.com/img/Supplier-Account-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/supplier-account",
            "name": "Capobrain",
            "description": "We require suppliers to purchase inventory, thus the supplier account displays all transactions that we will purchase from them, including the payable amount, your paid amount," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/supplier-account" />
        <meta name="description" content="We require suppliers to purchase inventory, thus the supplier account displays all transactions that we will purchase from them, including the payable amount, your paid amount," />
      </Helmet>

      <h1 className='manual-h1'>Supplier Account</h1>
      <p>We require suppliers to purchase inventory, thus the supplier account displays all transactions that we will purchase from them, including the payable amount, your paid amount, and the leftover balance with relevant supplier data. Except that the supplier has the ability to add payment at any time, and the account will be updated based on that information.</p>
      <img src="/img/Supplier-Account-Detail.avif" className='img-fluid' alt="Supplier-Account-Detail" />
      <img src="/img/Add-Supplire-Payment.png" className='img-fluid mt-3' alt="Add-Supplire-Payment" />
    </div>
  )
}
