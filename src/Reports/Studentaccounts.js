import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentaccounts() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Accounts" />
        <meta property="og:description" content="This feature enables users to access a detailed transaction history, including payable amounts, payments made, and outstanding balances." />
        <meta property="og:image" content="https://capobrain.com/img/Student-Accounts.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-accounts" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Accounts" />
        <meta name="twitter:description" content="This feature enables users to access a detailed transaction history, including payable amounts, payments made, and outstanding balances." />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Accounts.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-accounts",
            "name": "Capobrain",
            "description": "This feature enables users to access a detailed transaction history, including payable amounts, payments made, and outstanding balances." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-accounts" />
        <meta name="description" content="This feature enables users to access a detailed transaction history, including payable amounts, payments made, and outstanding balances." />
      </Helmet>

      <h1 className='manual-h1'>Student Accounts</h1>
      <p>The "Student Accounts" module provides a comprehensive overview of all student transactions, encompassing inventory and fee-related activities. This feature enables users to access a detailed transaction history, including payable amounts, payments made, and outstanding balances. Users can filter and search records by specifying date ranges, branch, class, section, and individual student names, ensuring efficient and precise tracking of financial activities within the educational institution.</p>
      <img src="/img/Student-Accounts.png" className='img-fluid' alt="Student-Accounts" />
    </div>
  )
}
