import React from 'react'
import { Helmet } from 'react-helmet';

export default function Recieve() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Recieve Fee" />
        <meta property="og:description" content="When you search for a student by ID, you have two alternatives for payment: total payment or payment per category, such as transportation or inventory." />
        <meta property="og:image" content="https://capobrain.com/img/Recieve-Fee.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/recieve-fee" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Recieve Fee" />
        <meta name="twitter:description" content="When you search for a student by ID, you have two alternatives for payment: total payment or payment per category, such as transportation or inventory." />
        <meta name="twitter:image" content="https://capobrain.com/img/Recieve-Fee.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/recieve-fee",
            "name": "Capobrain",
            "description": "When you search for a student by ID, you have two alternatives for payment: total payment or payment per category, such as transportation or inventory." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/recieve-fee" />
        <meta name="description" content="When you search for a student by ID, you have two alternatives for payment: total payment or payment per category, such as transportation or inventory." />
      </Helmet>

      <h2 className='manual-h1'>Recieve Fee</h2>
      <p>When you search for a student by ID, you have two alternatives for payment: total payment or payment per category, such as transportation or inventory. If you simply enter the transport payment, it will display in the student account's transport column; but, if we enter the payment in the inventory column, it will appear in the inventory field. During payment, you can also select a payment method (cash, bank transfer, or Easy paisa). And if we enter the total amount in the payable amount area, it will appear in the paid amount in the student account.</p>
      <img src="/img/Recieve-Fee.avif" className='img-fluid' alt="Recieve-Fee" />
    </div>
  )
}
