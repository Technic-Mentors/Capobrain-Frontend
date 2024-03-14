import React from 'react'
import { Helmet } from 'react-helmet';

export default function Expencerep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Expense Report" />
        <meta property="og:description" content="An expense report provides a summary of incurred expenses within a specified period. It typically includes details such as the expense category (e.g., travel, meals," />
        <meta property="og:image" content="https://capobrain.com/img/Expence-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/expense-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Expense Report" />
        <meta name="twitter:description" content="An expense report provides a summary of incurred expenses within a specified period. It typically includes details such as the expense category (e.g., travel, meals," />
        <meta name="twitter:image" content="https://capobrain.com/img/Expence-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/expense-report",
            "name": "Capobrain",
            "description": "An expense report provides a summary of incurred expenses within a specified period. It typically includes details such as the expense category (e.g., travel, meals," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/expense-report" />
        <meta name="description" content="An expense report provides a summary of incurred expenses within a specified period. It typically includes details such as the expense category (e.g., travel, meals," />
      </Helmet>

    <h1 className='manual-h1'>Expense Report</h1>
    <p>An expense report provides a summary of incurred expenses within a specified period. It typically includes details such as the expense category (e.g., travel, meals, and inventory supplies), the name or description of the expense, the amount spent, and the date on which the expense occurred. These reports are crucial for tracking and managing expenditures, budgeting, and ensuring financial transparency in both personal and organization finances. They enable individuals or organizations to review and analyze spending patterns, make informed financial decisions, and maintain accurate records for accounting purposes.</p>
    <img src="/img/Expence-Report.png" className='img-fluid' alt="Expence-Report" />
  </div>
  )
}
