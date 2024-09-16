import React from 'react'
import { Helmet } from 'react-helmet';

export default function Salarydeduct() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Salary Deduction" />
        <meta property="og:description" content="So the staff salary will be deducted on any basis, so this is the module to enter the detail search the staff by ID and then input the amount and reason of deduction so the amount will be deducted from account." />
        <meta property="og:image" content="https://capobrain.com/img/Deduct-Salary.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/salary-deduction" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Salary Deduction" />
        <meta name="twitter:description" content="So the staff salary will be deducted on any basis, so this is the module to enter the detail search the staff by ID and then input the amount and reason of deduction so the amount will be deducted from account." />
        <meta name="twitter:image" content="https://capobrain.com/img/Deduct-Salary.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/salary-deduction",
            "name": "Capobrain",
            "description": "So the staff salary will be deducted on any basis, so this is the module to enter the detail search the staff by ID and then input the amount and reason of deduction so the amount will be deducted from account." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/salary-deduction" />
        <meta name="description" content="So the staff salary will be deducted on any basis, so this is the module to enter the detail search the staff by ID and then input the amount and reason of deduction so the amount will be deducted from account." />
      </Helmet>

      <h2 className='manual-h1'>Salary Deduction</h2>
      <p>So the staff salary will be deducted on any basis, so this is the module to enter the detail search the staff by ID and then input the amount and reason of deduction so the amount will be deducted from account.</p>
      <img src="/img/Deduct-Salary.avif" className='img-fluid' alt="Deduct-Salary" />
    </div>
  )
}
