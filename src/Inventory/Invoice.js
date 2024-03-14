import React from 'react'
import { Helmet } from 'react-helmet';

export default function Invoice() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Invoices List" />
        <meta property="og:description" content="It will display a list of all invoices of issue inventory in the invoices list, as well as an action column that displays the invoice when we click on the view button," />
        <meta property="og:image" content="https://capobrain.com/img/Invoice-List.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/invoice-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Invoices List" />
        <meta name="twitter:description" content="It will display a list of all invoices of issue inventory in the invoices list, as well as an action column that displays the invoice when we click on the view button," />
        <meta name="twitter:image" content="https://capobrain.com/img/Invoice-List.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/invoice-list",
            "name": "Capobrain",
            "description": "It will display a list of all invoices of issue inventory in the invoices list, as well as an action column that displays the invoice when we click on the view button," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/invoice-list" />
        <meta name="description" content="It will display a list of all invoices of issue inventory in the invoices list, as well as an action column that displays the invoice when we click on the view button," />
      </Helmet>

      <h1 className='manual-h1'>Invoices List</h1>
      <p>It will display a list of all invoices of issue inventory in the invoices list, as well as an action column that displays the invoice when we click on the view button, and it will display the appropriate invoice for that transaction. On the invoice, you may see the customer information, inventory information, and payment information. You can also print that invoice.</p>
      <img src="/img/Invoice-List.png" className='img-fluid mt-5' alt="Invoice-List" />
    </div>
  )
}
