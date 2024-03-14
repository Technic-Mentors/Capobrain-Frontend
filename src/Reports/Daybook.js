import React from 'react'
import { Helmet } from 'react-helmet';

export default function Daybook() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Day Book" />
        <meta property="og:description" content="A day book report, in the context of accounting and financial management, is a document or summary that provides a detailed record of daily financial transactions within an organization." />
        <meta property="og:image" content="https://capobrain.com/img/Day-Book.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/day-book" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Day Book" />
        <meta name="twitter:description" content="A day book report, in the context of accounting and financial management, is a document or summary that provides a detailed record of daily financial transactions within an organization." />
        <meta name="twitter:image" content="https://capobrain.com/img/Day-Book.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/day-book",
            "name": "Capobrain",
            "description": "A day book report, in the context of accounting and financial management, is a document or summary that provides a detailed record of daily financial transactions within an organization." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/day-book" />
        <meta name="description" content="A day book report, in the context of accounting and financial management, is a document or summary that provides a detailed record of daily financial transactions within an organization." />
      </Helmet>

    <h1 className='manual-h1'>Day Book</h1>
    <p>A day book report, in the context of accounting and financial management, is a document or summary that provides a detailed record of daily financial transactions within an organization. It typically includes information on all monetary inflows and outflows, such as sales, purchases, expenses, and payments, for a specific day. This report serves as a fundamental module for tracking financial activities, maintaining accuracy in accounting records, and ensuring transparency in daily financial operations, making it an essential part of the bookkeeping process.</p>
    <img src="/img/Day-Book.png" className='img-fluid' alt="Day-Book" />
  </div>
  )
}
