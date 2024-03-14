import React from 'react'
import { Helmet } from 'react-helmet';

export default function Profitloss() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Profit & Loss" />
        <meta property="og:description" content="A profit and loss report, also known as an income statement, is a financial report that provides a summary of a organization’s revenues, costs, and expenses over a specific period," />
        <meta property="og:image" content="https://capobrain.com/img/Profit%20&%20Loss.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/profit%20&%20loss" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Profit & Loss" />
        <meta name="twitter:description" content="A profit and loss report, also known as an income statement, is a financial report that provides a summary of a organization’s revenues, costs, and expenses over a specific period," />
        <meta name="twitter:image" content="https://capobrain.com/img/Profit%20&%20Loss.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/profit%20&%20loss",
            "name": "Capobrain",
            "description": "A profit and loss report, also known as an income statement, is a financial report that provides a summary of a organization’s revenues, costs, and expenses over a specific period," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/profit%20&%20loss" />
        <meta name="description" content="A profit and loss report, also known as an income statement, is a financial report that provides a summary of a organization’s revenues, costs, and expenses over a specific period," />
      </Helmet>

    <h1 className='manual-h1'>Profit & Loss</h1>
    <p>A profit and loss report, also known as an income statement, is a financial report that provides a summary of a organization’s revenues, costs, and expenses over a specific period, typically a month, quarter, or year. It shows the net profit or loss by subtracting the total expenses from the total revenue, serving as a vital tool for assessing a business's financial performance and overall profitability. This report helps businesses track their financial health, make informed decisions, and communicate their financial status to stakeholders.</p>
    <img src="/img/Profit & Loss.png" className='img-fluid' alt="Profit & Loss" />
  </div>
  )
}
