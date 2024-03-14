import React from 'react'
import { Helmet } from 'react-helmet';

export default function Purchase() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Purchase List" />
        <meta property="og:description" content="In the purchase list, it will display a list of all purchases, as well as an action column that displays the invoice when we click on the invoice icon, it will display the appropriate invoice for that transaction." />
        <meta property="og:image" content="https://capobrain.com/img/Purchase-List.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/purchase-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Purchase List" />
        <meta name="twitter:description" content="In the purchase list, it will display a list of all purchases, as well as an action column that displays the invoice when we click on the invoice icon, it will display the appropriate invoice for that transaction." />
        <meta name="twitter:image" content="https://capobrain.com/img/Purchase-List.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/purchase-list",
            "name": "Capobrain",
            "description": "In the purchase list, it will display a list of all purchases, as well as an action column that displays the invoice when we click on the invoice icon, it will display the appropriate invoice for that transaction." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/purchase-list" />
        <meta name="description" content="In the purchase list, it will display a list of all purchases, as well as an action column that displays the invoice when we click on the invoice icon, it will display the appropriate invoice for that transaction." />
      </Helmet>

      <h1 className='manual-h1'>Purchase List</h1>
      <p>In the purchase list, it will display a list of all purchases, as well as an action column that displays the invoice when we click on the invoice icon, it will display the appropriate invoice for that transaction.</p>
      <img src="/img/Purchase-List.png" className='img-fluid mt-5' alt="Purchase-List" />
    </div>
  )
}
