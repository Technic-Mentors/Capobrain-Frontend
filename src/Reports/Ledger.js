import React from 'react'
import { Helmet } from 'react-helmet';

export default function Ledger() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="General Ledger" />
        <meta property="og:description" content="The General Ledger Report summarizes every transaction that enters and exits your accounts on an accrual basis. When you issue invoices, track expenses, or receive payments," />
        <meta property="og:image" content="https://capobrain.com/img/General-Ledger.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/general-ledger" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="General Ledger" />
        <meta name="twitter:description" content="The General Ledger Report summarizes every transaction that enters and exits your accounts on an accrual basis. When you issue invoices, track expenses, or receive payments," />
        <meta name="twitter:image" content="https://capobrain.com/img/General-Ledger.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/general-ledger",
            "name": "Capobrain",
            "description": "The General Ledger Report summarizes every transaction that enters and exits your accounts on an accrual basis. When you issue invoices, track expenses, or receive payments," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/general-ledger" />
        <meta name="description" content="The General Ledger Report summarizes every transaction that enters and exits your accounts on an accrual basis. When you issue invoices, track expenses, or receive payments," />
      </Helmet>

    <h1 className='manual-h1'>General Ledger</h1>
    <p>The General Ledger Report summarizes every transaction that enters and exits your accounts on an accrual basis. When you issue invoices, track expenses, or receive payments, these transactions are generated. It is essentially a master of all your company's accounts and is mostly used to track your company's financial activity. You may see the date, party, kind, cash in and out, opening balance, and overall balance in the general ledger report.</p>
    <img src="/img/General-Ledger.avif" className='img-fluid' alt="General-Ledger" />
  </div>
  )
}
