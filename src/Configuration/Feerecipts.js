import React from 'react'
import { Helmet } from 'react-helmet';

export default function Feerecipts() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Fee Recipts" />
        <meta property="og:description" content="If you need to print a physical copy of the voucher, you can do so in a variety of formats depending on the size of the paper. So, in this section," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Fee-Voucher-Size.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-fee-recipients" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Fee Recipts" />
        <meta name="twitter:description" content="If you need to print a physical copy of the voucher, you can do so in a variety of formats depending on the size of the paper. So, in this section," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Fee-Voucher-Size.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-fee-recipients",
            "name": "Capobrain",
            "description": "If you need to print a physical copy of the voucher, you can do so in a variety of formats depending on the size of the paper. So, in this section," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-fee-recipients" />
        <meta name="description" content="If you need to print a physical copy of the voucher, you can do so in a variety of formats depending on the size of the paper. So, in this section," />
      </Helmet>

      <h1 className='manual-h1'>Configure Fee Recipts</h1>
      <p>If you need to print a physical copy of the voucher, you can do so in a variety of formats depending on the size of the paper. So, in this section, you will select whether you require a single, double, or triple voucher. The sort of coupon you choose will generate the voucher in the size and type you choose.</p>
      <img src="/img/Add-Fee-voucher-Size.png" className='img-fluid' alt="Add-Fee-Voucher-Size" />
    </div>
  )
}
