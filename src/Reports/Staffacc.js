import React from 'react'
import { Helmet } from 'react-helmet';

export default function Staffacc() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Accounts" />
        <meta property="og:description" content="This report offers a detailed record of each staff member's account, including payable amounts, payments made, and the resulting balance." />
        <meta property="og:image" content="https://capobrain.com/img/Staff-Accounts.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-accounts" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Accounts" />
        <meta name="twitter:description" content="This report offers a detailed record of each staff member's account, including payable amounts, payments made, and the resulting balance." />
        <meta name="twitter:image" content="https://capobrain.com/img/Staff-Accounts.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-accounts",
            "name": "Capobrain",
            "description": "This report offers a detailed record of each staff member's account, including payable amounts, payments made, and the resulting balance." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-accounts" />
        <meta name="description" content="This report offers a detailed record of each staff member's account, including payable amounts, payments made, and the resulting balance." />
      </Helmet>

    <h1 className='manual-h1'>Staff Accounts</h1>
    <p>The "Staff Account" reporting module provides a comprehensive overview of all staff transactions, encompassing both inventory-related activities and other financial payments. This report offers a detailed record of each staff member's account, including payable amounts, payments made, and the resulting balance. Users can easily search for specific records by date or staff member, allowing for efficient tracking and management of financial interactions within the organization.</p>
    <img src="/img/Staff-Accounts.avif" className='img-fluid' alt="Staff-Accounts" />
  </div>
  )
}
