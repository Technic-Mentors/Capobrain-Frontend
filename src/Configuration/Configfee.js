import React from 'react'
import { Helmet } from 'react-helmet';

export default function Configfee() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Fee" />
        <meta property="og:description" content="In this you will configure fee structure according to the types. There are different types of fees are involved like admission fee, security fees etc." />
        <meta property="og:image" content="https://capobrain.com/img/Configure-Fee-Structure.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-fee" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Fee" />
        <meta name="twitter:description" content="In this you will configure fee structure according to the types. There are different types of fees are involved like admission fee, security fees etc." />
        <meta name="twitter:image" content="https://capobrain.com/img/Configure-Fee-Structure.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-fee",
            "name": "Capobrain",
            "description": "In this you will configure fee structure according to the types. There are different types of fees are involved like admission fee, security fees etc." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-fee" />
        <meta name="description" content="In this you will configure fee structure according to the types. There are different types of fees are involved like admission fee, security fees etc." />
      </Helmet>

      <h2 className='manual-h1'>Configure Fee</h2>
      <p>In this you will configure fee structure according to the types. There are different types of fees are involved like admission fee, security fees etc. You will fill all the fields with amount according to the fee structure type. Type will be like monthly or may be yearly it depends on your school. The purpose of configure fee is when a student get admission in the school then at the end of the form you will applied the fee type to that school and every month it will take the monthly fee from this structure. You can also view, edit and delete any fee structure but you can also update the monthly fee from fee module.</p>
      <img src="/img/Configure-Fee-Structure.avif" className='img-fluid' alt="Configure-Fee-Structure" />
    </div>
  )
}
