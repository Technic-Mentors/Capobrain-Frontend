import React from 'react'
import { Helmet } from 'react-helmet';

export default function Commitmentli() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Fee Commitment List" />
        <meta property="og:description" content="Search the student by student ID in the fee commitment list, and it will show you the record of that student as well as the payment amount. You will then select the commitment date for the fee," />
        <meta property="og:image" content="https://capobrain.com/img/Fee-Comitment-List.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/fee-comitment-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Fee Commitment List" />
        <meta name="twitter:description" content="Search the student by student ID in the fee commitment list, and it will show you the record of that student as well as the payment amount. You will then select the commitment date for the fee," />
        <meta name="twitter:image" content="https://capobrain.com/img/Fee-Comitment-List.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/fee-comitment-list",
            "name": "Capobrain",
            "description": "Search the student by student ID in the fee commitment list, and it will show you the record of that student as well as the payment amount. You will then select the commitment date for the fee," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/fee-comitment-list" />
        <meta name="description" content="Search the student by student ID in the fee commitment list, and it will show you the record of that student as well as the payment amount. You will then select the commitment date for the fee," />
      </Helmet>

      <h1 className='manual-h1'>Fee Commitment List</h1>
      <p>Search the student by student ID in the fee commitment list, and it will show you the record of that student as well as the payment amount. You will then select the commitment date for the fee, and there is another option to show the fee commitment list.</p>
      <img src="/img/Fee-Comitment-List.png" className='img-fluid' alt="Fee-Comitment-List" />
    </div>
  )
}
