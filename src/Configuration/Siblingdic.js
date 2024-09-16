import React from 'react'
import { Helmet } from 'react-helmet';

export default function Siblingdic() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Sibling Discount" />
        <meta property="og:description" content="The sibling discount will be applied to any student who has siblings enrolled at this institution. As a result, you can update and delete this discount as well as configure the discount's amount." />
        <meta property="og:image" content="https://capobrain.com/img/Update-Sibling-Discount.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/sibling-discount" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Sibling Discount" />
        <meta name="twitter:description" content="The sibling discount will be applied to any student who has siblings enrolled at this institution. As a result, you can update and delete this discount as well as configure the discount's amount." />
        <meta name="twitter:image" content="https://capobrain.com/img/Update-Sibling-Discount.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/sibling-discount",
            "name": "Capobrain",
            "description": "The sibling discount will be applied to any student who has siblings enrolled at this institution. As a result, you can update and delete this discount as well as configure the discount's amount." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/sibling-discount" />
        <meta name="description" content="The sibling discount will be applied to any student who has siblings enrolled at this institution. As a result, you can update and delete this discount as well as configure the discount's amount." />
      </Helmet>

      <h2 className='manual-h1'>Sibling Discount</h2>
      <p>The sibling discount will be applied to any student who has siblings enrolled at this institution. As a result, you can update and delete this discount as well as configure the discount's amount.</p>
      <img src="/img/Update-Sibling-Discount.avif" className='img-fluid' alt="Update-Sibling-Discount" />
    </div>
  )
}
