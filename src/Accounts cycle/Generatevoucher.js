import React from 'react'
import { Helmet } from 'react-helmet';

export default function Generatevoucher() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Generate Voucher" />
        <meta property="og:description" content="When we click on generate voucher, we must first select the month, and then options such as monthly fee, transportation charges, event charges, inventory charges, and so on will be displayed." />
        <meta property="og:image" content="https://capobrain.com/img/Generate-Voucher.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/generate-vouchers" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Generate Voucher" />
        <meta name="twitter:description" content="When we click on generate voucher, we must first select the month, and then options such as monthly fee, transportation charges, event charges, inventory charges, and so on will be displayed." />
        <meta name="twitter:image" content="https://capobrain.com/img/Generate-Voucher.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/generate-vouchers",
            "name": "Capobrain",
            "description": "When we click on generate voucher, we must first select the month, and then options such as monthly fee, transportation charges, event charges, inventory charges, and so on will be displayed." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/generate-vouchers" />
        <meta name="description" content="When we click on generate voucher, we must first select the month, and then options such as monthly fee, transportation charges, event charges, inventory charges, and so on will be displayed." />
      </Helmet>

    <h1 className='manual-h1'>Generate Voucher</h1>
    <p>When we click on generate voucher, we must first select the month, and then options such as monthly fee, transportation charges, event charges, inventory charges, and so on will be displayed. It is entirely up to you the options you wish to appear on vouchers. When you select the options and click on generate vouchers, it will display the vouchers with all of the options that you selected and you can print those vouchers anytime.</p>
    <img src="/img/Generate-Voucher.png" className='img-fluid' alt="Generate-Voucher" />
  </div>
  )
}
