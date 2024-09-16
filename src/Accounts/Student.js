import React from 'react'
import { Helmet } from 'react-helmet';

export default function Student() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Account" />
        <meta property="og:description" content="Students' accounts will be created at the end of the admission process since, in the final stage of the admission form, there is an option to select the fee structure, thus whether the student wishes to pay some amount or not," />
        <meta property="og:image" content="https://capobrain.com/img/Student-Ledger.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/students-account" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Account" />
        <meta name="twitter:description" content="Students' accounts will be created at the end of the admission process since, in the final stage of the admission form, there is an option to select the fee structure, thus whether the student wishes to pay some amount or not," />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Ledger.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/students-account",
            "name": "Capobrain",
            "description": "Students' accounts will be created at the end of the admission process since, in the final stage of the admission form, there is an option to select the fee structure, thus whether the student wishes to pay some amount or not," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/students-account" />
        <meta name="description" content="Students' accounts will be created at the end of the admission process since, in the final stage of the admission form, there is an option to select the fee structure, thus whether the student wishes to pay some amount or not," />
      </Helmet>

      <h2 className='manual-h1'>Student Account</h2>
      <p>Students' accounts will be created at the end of the admission process since, in the final stage of the admission form, there is an option to select the fee structure, thus whether the student wishes to pay some amount or not, the account must be created. There are two alternatives in the student account: add payment or refund money. In order to add payment, you must first search for a student by ID. This will load the data for that student, such as transportation, monthly fees, and due amounts, allowing you to submit payment overall or by category. If you only want to contribute transportation or inventory, you can do so. There is also the option of receiving a refund.  All transactions will be recorded in the student account, and the appropriate amount and balances will be displayed. And you can see all of the transactions in the account, and the student can see the account as well.</p>
      <img src="/img/Student-Ledger.avif" className='img-fluid' alt="Student-Ledger" />
    </div>
  )
}
