import React from 'react'
import { Helmet } from 'react-helmet';

export default function Updatefee() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Update Fee" />
        <meta property="og:description" content="In update fee module if you want to update the fee of any student then search the student through ID and then enter the fee amount in the monthly fee amount and then select the with effect date" />
        <meta property="og:image" content="https://capobrain.com/img/Update-Fee.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/update-fee" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Update Fee" />
        <meta name="twitter:description" content="In update fee module if you want to update the fee of any student then search the student through ID and then enter the fee amount in the monthly fee amount and then select the with effect date" />
        <meta name="twitter:image" content="https://capobrain.com/img/Update-Fee.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/update-fee",
            "name": "Capobrain",
            "description": "In update fee module if you want to update the fee of any student then search the student through ID and then enter the fee amount in the monthly fee amount and then select the with effect date" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/update-fee" />
        <meta name="description" content="In update fee module if you want to update the fee of any student then search the student through ID and then enter the fee amount in the monthly fee amount and then select the with effect date" />
      </Helmet>

      <h1 className='manual-h1'>Update Fee</h1>
      <p>In update fee module if you want to update the fee of any student then search the student through ID and then enter the fee amount in the monthly fee amount and then select the with effect date when you will select the with effect date then that transaction will be process according with that date.</p>
      <img src="/img/Update-Fee.avif" className='img-fluid' alt="Update-Fee" />
    </div>
  )
}
