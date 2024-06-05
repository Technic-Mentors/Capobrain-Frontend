import React from 'react'
import { Helmet } from 'react-helmet';

export default function Withdrawpay() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Withdraw Amount" />
        <meta property="og:description" content="Because employees can only withdraw the amount, the Withdraw Amount option is only available to them. First, choose the staff by ID, which will load the data in fields such as payable salary, " />
        <meta property="og:image" content="https://capobrain.com/img/Withdraw-Amount.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/withdraw-amount" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Withdraw Amount" />
        <meta name="twitter:description" content="Because employees can only withdraw the amount, the Withdraw Amount option is only available to them. First, choose the staff by ID, which will load the data in fields such as payable salary, " />
        <meta name="twitter:image" content="https://capobrain.com/img/Withdraw-Amount.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/withdraw-amount",
            "name": "Capobrain",
            "description": "Because employees can only withdraw the amount, the Withdraw Amount option is only available to them. First, choose the staff by ID, which will load the data in fields such as payable salary, " ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/withdraw-amount" />
        <meta name="description" content="Because employees can only withdraw the amount, the Withdraw Amount option is only available to them. First, choose the staff by ID, which will load the data in fields such as payable salary, " />
      </Helmet>

      <h1 className='manual-h1'>Withdraw Amount</h1>
      <p>Because employees can only withdraw the amount, the Withdraw Amount option is only available to them. First, choose the staff by ID, which will load the data in fields such as payable salary, then select the withdraw amount, payment methods, and put the person's name in the paid by field, so that the transaction amount will be deducted from the staff account.</p>
      <img src="/img/Withdraw-Amount.avif" className='img-fluid' alt="Withdraw-Amount" />
    </div>
  )
}
