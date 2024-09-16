import React from 'react'
import { Helmet } from 'react-helmet';

export default function Config() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Certificate" />
        <meta property="og:description" content="In configure certificate, there is two options one is configure certificate for student or configure certificate for staff. You will add the title of the certificate which you are going to configure" />
        <meta property="og:image" content="https://capobrain.com/img/Configure-Certificate.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-certificate" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Certificate" />
        <meta name="twitter:description" content="In configure certificate, there is two options one is configure certificate for student or configure certificate for staff. You will add the title of the certificate which you are going to configure" />
        <meta name="twitter:image" content="https://capobrain.com/img/Configure-Certificate.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-certificate",
            "name": "Capobrain",
            "description": "In configure certificate, there is two options one is configure certificate for student or configure certificate for staff. You will add the title of the certificate which you are going to configure" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-certificate" />
        <meta name="description" content="In configure certificate, there is two options one is configure certificate for student or configure certificate for staff. You will add the title of the certificate which you are going to configure" />
      </Helmet>

      <h2 className='manual-h1'>Configure Certificate</h2>
      <p>In configure certificate, there is two options one is configure certificate for student or configure certificate for staff. You will add the title of the certificate which you are going to configure for example student of the month or Teacher of the month. So, first you will select student or staff then you will enter the title and reason of the certificate.</p>
      <img src="/img/Configure-Certificate.avif" className='img-fluid' alt="Configure-Certificate" />
    </div>
  )
}
