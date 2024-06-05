import React from 'react'
import { Helmet } from 'react-helmet';

export default function Addexpense() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Add Expense" />
        <meta property="og:description" content="You must first add a cost category before you can add an expense. You will select a branch name, a cost category, an expense name, an amount, and a description." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Expence.jpg" />
        <meta property="og:url" content="https://capobrain.com/user-manual/add-expense" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Add Expense" />
        <meta name="twitter:description" content="You must first add a cost category before you can add an expense. You will select a branch name, a cost category, an expense name, an amount, and a description." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Expence.jpg" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/add-expense",
            "name": "Capobrain",
            "description": "You must first add a cost category before you can add an expense. You will select a branch name, a cost category, an expense name, an amount, and a description." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/add-expense" />
        <meta name="description" content="You must first add a cost category before you can add an expense. You will select a branch name, a cost category, an expense name, an amount, and a description." />
      </Helmet>

      <h1 className='manual-h1'>Add Expense</h1>
      <p>You must first add a cost category before you can add an expense. You will select a branch name, a cost category, an expense name, an amount, and a description. In this section, you will list all of your school expenses, whether they are linked to bills, food, or anything else.</p>
      <img src="/img/Add-Expence.png" className='img-fluid' alt="Add-Expence" />
    </div>
  )
}
