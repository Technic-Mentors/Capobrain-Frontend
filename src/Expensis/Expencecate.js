import React from 'react'
import { Helmet } from 'react-helmet';

export default function Expencecate() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Expense Category" />
        <meta property="og:description" content="In the expense category, you will simply add the category that you selected when adding the expense, and you will be able to inspect, modify, or remove this as well.

" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Expence-Category.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/expence-category" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Expense Category" />
        <meta name="twitter:description" content="In the expense category, you will simply add the category that you selected when adding the expense, and you will be able to inspect, modify, or remove this as well.

" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Expence-Category.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/expence-category",
            "name": "Capobrain",
            "description": "In the expense category, you will simply add the category that you selected when adding the expense, and you will be able to inspect, modify, or remove this as well.

" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/expence-category" />
        <meta name="description" content="In the expense category, you will simply add the category that you selected when adding the expense, and you will be able to inspect, modify, or remove this as well.

" />
      </Helmet>

      <h2 className='manual-h1'>Expense Category</h2>
      <p>In the expense category, you will simply add the category that you selected when adding the expense, and you will be able to inspect, modify, or remove this as well. </p>
      <img src="/img/Add-Expence-Category.avif" className='img-fluid' alt="Add-Expence-Category" />
    </div>
  )
}
