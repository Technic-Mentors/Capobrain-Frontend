import React from 'react'
import { Helmet } from 'react-helmet';

export default function Classes() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Classes" />
        <meta property="og:description" content="You will enter all the classes offered by your school in this. After choosing the branch, enter each class one at a time. Classes can be added in accordance with the branches.

" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Class.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/dashboard" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Classes" />
        <meta name="twitter:description" content="You will enter all the classes offered by your school in this. After choosing the branch, enter each class one at a time. Classes can be added in accordance with the branches.

" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Class.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/dashboard",
            "name": "Capobrain",
            "description": "You will enter all the classes offered by your school in this. After choosing the branch, enter each class one at a time. Classes can be added in accordance with the branches.

" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/dashboard" />
        <meta name="description" content="You will enter all the classes offered by your school in this. After choosing the branch, enter each class one at a time. Classes can be added in accordance with the branches.

" />
      </Helmet>

      <h1 className='manual-h1'>Classes</h1>
      <p>You will enter all the classes offered by your school in this. After choosing the branch, enter each class one at a time. Classes can be added in accordance with the branches.</p>
      <img src="/img/Add-Class.png" className='img-fluid' alt="Add-Class" />
    </div>
  )
}
