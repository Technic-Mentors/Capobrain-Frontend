import React from 'react'
import { Helmet } from 'react-helmet';

export default function Supplier() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Supplier" />
        <meta property="og:description" content="In the Supplier module, we will add all of the school suppliers from whom we purchase inventory. There is a form in which you will enter the supplier's name, cell number, CNIC, and address," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Supplier.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/supplier" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Supplier" />
        <meta name="twitter:description" content="In the Supplier module, we will add all of the school suppliers from whom we purchase inventory. There is a form in which you will enter the supplier's name, cell number, CNIC, and address," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Supplier.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/supplier",
            "name": "Capobrain",
            "description": "In the Supplier module, we will add all of the school suppliers from whom we purchase inventory. There is a form in which you will enter the supplier's name, cell number, CNIC, and address," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/supplier" />
        <meta name="description" content="In the Supplier module, we will add all of the school suppliers from whom we purchase inventory. There is a form in which you will enter the supplier's name, cell number, CNIC, and address," />
      </Helmet>

      <h2 className='manual-h1'>Supplier</h2>
      <p>In the Supplier module, we will add all of the school suppliers from whom we purchase inventory. There is a form in which you will enter the supplier's name, cell number, CNIC, and address, and it will show you a list of all the suppliers, and you can view that information or change anything in the information using the update button.</p>
      <img src="/img/Add-Supplier.avif" className='img-fluid mt-5' alt="Add-Supplier" />
    </div>
  )
}
