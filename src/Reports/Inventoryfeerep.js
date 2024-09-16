import React from 'react'
import { Helmet } from 'react-helmet';

export default function Inventoryfeerep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Inventory Fee Report" />
        <meta property="og:description" content=" This report is useful for tracking and managing expenses related to maintaining a stock of goods or products. The inventory fee report displays student information such as name, student ID, father's name, class, section," />
        <meta property="og:image" content="https://capobrain.com/img/Inventory-Fee-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/inventory-fee-repport" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Inventory Fee Report" />
        <meta name="twitter:description" content=" This report is useful for tracking and managing expenses related to maintaining a stock of goods or products. The inventory fee report displays student information such as name, student ID, father's name, class, section," />
        <meta name="twitter:image" content="https://capobrain.com/img/Inventory-Fee-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/inventory-fee-repport",
            "name": "Capobrain",
            "description": " This report is useful for tracking and managing expenses related to maintaining a stock of goods or products. The inventory fee report displays student information such as name, student ID, father's name, class, section," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/inventory-fee-repport" />
        <meta name="description" content=" This report is useful for tracking and managing expenses related to maintaining a stock of goods or products. The inventory fee report displays student information such as name, student ID, father's name, class, section," />
      </Helmet>

    <h2 className='manual-h1'>Inventory Fee Report</h2>
    <p>An "inventory fee report" typically refers to a report that provides information about the fees associated with inventory management or the cost of holding inventory within a organization. This report is useful for tracking and managing expenses related to maintaining a stock of goods or products. The inventory fee report displays student information such as name, student ID, father's name, class, section, and monthly inventory fee and paid amount along with the date. You can search for the record using any date, as well as by name.</p>
    <img src="/img/Inventory-Fee-Report.avif" className='img-fluid' alt="Inventory-Fee-Report" />
  </div>
  )
}
