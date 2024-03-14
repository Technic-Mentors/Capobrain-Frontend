import React from 'react'
import { Helmet } from 'react-helmet';

export default function Issue() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Issue Inventory" />
        <meta property="og:description" content="When it comes to inventory, there are two options: provide it to students or give it to staff. When issuing inventory to a student, you must first search for the student by ID." />
        <meta property="og:image" content="https://capobrain.com/img/Issue-Inventory.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/issue-inventory" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Issue Inventory" />
        <meta name="twitter:description" content="When it comes to inventory, there are two options: provide it to students or give it to staff. When issuing inventory to a student, you must first search for the student by ID." />
        <meta name="twitter:image" content="https://capobrain.com/img/Issue-Inventory.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/issue-inventory",
            "name": "Capobrain",
            "description": "When it comes to inventory, there are two options: provide it to students or give it to staff. When issuing inventory to a student, you must first search for the student by ID." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/issue-inventory" />
        <meta name="description" content="When it comes to inventory, there are two options: provide it to students or give it to staff. When issuing inventory to a student, you must first search for the student by ID." />
      </Helmet>

      <h1 className='manual-h1'>Issue Inventory</h1>
      <p>When it comes to inventory, there are two options: provide it to students or give it to staff. When issuing inventory to a student, you must first search for the student by ID. All of the data will be loaded automatically in the fields, and then you must select the inventory to be sent to that student. The transaction will be added to the student account, and invoices will be displayed in the invoice list. You can define whether inventory is chargeable or non-chargeable when you deliver it to a teacher. If we choose non-inventory, the transaction will never be recorded; if we choose charged, the correct price will be presented or the transaction will be recorded in the teacher's account.</p>
      <img src="/img/Issue-Inventory.png" className='img-fluid mt-5' alt="Issue-Inventory" />
    </div>
  )
}
