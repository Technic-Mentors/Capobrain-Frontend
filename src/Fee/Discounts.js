import React from 'react'
import { Helmet } from 'react-helmet';

export default function Discounts() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Discounts" />
        <meta property="og:description" content="If you want to apply a discount to a specific student, first search for the student, then enter the fine amount and finally save it. The discounted amount will be shown in account." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Discount.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/discounts" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Discounts" />
        <meta name="twitter:description" content="If you want to apply a discount to a specific student, first search for the student, then enter the fine amount and finally save it. The discounted amount will be shown in account." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Discount.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/discounts",
            "name": "Capobrain",
            "description": "If you want to apply a discount to a specific student, first search for the student, then enter the fine amount and finally save it. The discounted amount will be shown in account." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/discounts" />
        <meta name="description" content="If you want to apply a discount to a specific student, first search for the student, then enter the fine amount and finally save it. The discounted amount will be shown in account." />
      </Helmet>

      <h2 className='manual-h1'>Discounts</h2>
      <p>If you want to apply a discount to a specific student, first search for the student, then enter the fine amount and finally save it. The discounted amount will be shown in account.</p>
      <img src="/img/Add-Discount.avif" className='img-fluid' alt="Add-Discount" />
    </div>
  )
}
