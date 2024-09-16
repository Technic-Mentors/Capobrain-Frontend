import React from 'react'
import { Helmet } from 'react-helmet';

export default function Printvoucher() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Print Voucher" />
        <meta property="og:description" content="Print vouchers will display certain options that must be selected in order to print the vouchers. After you select the session, it will show you the year based on the selected session," />
        <meta property="og:image" content="https://capobrain.com/img/Print-Vouchers.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/print-vouchers" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Print Voucher" />
        <meta name="twitter:description" content="Print vouchers will display certain options that must be selected in order to print the vouchers. After you select the session, it will show you the year based on the selected session," />
        <meta name="twitter:image" content="https://capobrain.com/img/Print-Vouchers.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/print-vouchers",
            "name": "Capobrain",
            "description": "Print vouchers will display certain options that must be selected in order to print the vouchers. After you select the session, it will show you the year based on the selected session," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/print-vouchers" />
        <meta name="description" content="Print vouchers will display certain options that must be selected in order to print the vouchers. After you select the session, it will show you the year based on the selected session," />
      </Helmet>

    <h2 className='manual-h1'>Print Voucher</h2>
    <p>Print vouchers will display certain options that must be selected in order to print the vouchers. After you select the session, it will show you the year based on the selected session, and after you select the year, it will show you a list of all the months. After that, you must select the branch, class, section, and student, and then click the print button. It will print the vouchers based on the options you specify.</p>
      <img src="/img/Print-Vouchers.avif" className='img-fluid' alt="Print-Voucher" />
    </div>
  )
}
