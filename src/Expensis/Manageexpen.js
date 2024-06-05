import React from 'react'
import { Helmet } from 'react-helmet';

export default function Manageexpen() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Manage Expense" />
        <meta property="og:description" content="You must first enter an expense, and then it will display a list of all the expenses for you to manage. For example, if you want to view the detail of the expense, you can do so," />
        <meta property="og:image" content="https://capobrain.com/img/Manage-Expence.jpg" />
        <meta property="og:url" content="https://capobrain.com/user-manual/manage-expense" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Manage Expense" />
        <meta name="twitter:description" content="You must first enter an expense, and then it will display a list of all the expenses for you to manage. For example, if you want to view the detail of the expense, you can do so," />
        <meta name="twitter:image" content="https://capobrain.com/img/Manage-Expence.jpg" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/manage-expense",
            "name": "Capobrain",
            "description": "You must first enter an expense, and then it will display a list of all the expenses for you to manage. For example, if you want to view the detail of the expense, you can do so," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/manage-expense" />
        <meta name="description" content="You must first enter an expense, and then it will display a list of all the expenses for you to manage. For example, if you want to view the detail of the expense, you can do so," />
      </Helmet>

      <h1 className='manual-h1'>Manage Expense</h1>
      <p>You must first enter an expense, and then it will display a list of all the expenses for you to manage. For example, if you want to view the detail of the expense, you can do so, or if you want to change anything in the expense, such as the amount or other detail, you can do so, and you can also delete any expense.</p>
      <img src="/img/Manage-Expence.avif" className='img-fluid' alt="Manage-Expence" />
    </div>
  )
}
