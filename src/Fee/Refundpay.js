import React from 'react'
import { Helmet } from 'react-helmet';

export default function Refundpay() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Refund Payment" />
        <meta property="og:description" content="If you want to refund a payment to a student, first search for the student by ID, it will load the data of that student automatically in the fields and it will also show you the payable amount" />
        <meta property="og:image" content="https://capobrain.com/img/Refund-Payment.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/refund-payment" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Refund Payment" />
        <meta name="twitter:description" content="If you want to refund a payment to a student, first search for the student by ID, it will load the data of that student automatically in the fields and it will also show you the payable amount" />
        <meta name="twitter:image" content="https://capobrain.com/img/Refund-Payment.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/refund-payment",
            "name": "Capobrain",
            "description": "If you want to refund a payment to a student, first search for the student by ID, it will load the data of that student automatically in the fields and it will also show you the payable amount" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/refund-payment" />
        <meta name="description" content="If you want to refund a payment to a student, first search for the student by ID, it will load the data of that student automatically in the fields and it will also show you the payable amount" />
      </Helmet>

      <h1 className='manual-h1'>Refund Payment</h1>
      <p>If you want to refund a payment to a student, first search for the student by ID, it will load the data of that student automatically in the fields and it will also show you the payable amount and remaining balance of that student and then pick the payment type and refund payment, and the transaction will be recorded in the student's account.</p>
      <img src="/img/Refund-Payment.png" className='img-fluid' alt="Refund-Payment" />
    </div>
  )
}
