import React from 'react'
import { Helmet } from 'react-helmet';

export default function Roles() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Roles" />
        <meta property="og:description" content="Before adding any users, the roles must first be created. because when adding a user, you may choose their role. Therefore, you will just declare the roles in this module." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Role.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/roles" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Roles" />
        <meta name="twitter:description" content="Before adding any users, the roles must first be created. because when adding a user, you may choose their role. Therefore, you will just declare the roles in this module." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Role.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/roles",
            "name": "Capobrain",
            "description": "Before adding any users, the roles must first be created. because when adding a user, you may choose their role. Therefore, you will just declare the roles in this module." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/roles" />
        <meta name="description" content="Before adding any users, the roles must first be created. because when adding a user, you may choose their role. Therefore, you will just declare the roles in this module." />
      </Helmet>

      <h2 className='manual-h1'>Roles</h2>
      <p>Before adding any users, the roles must first be created. because when adding a user, you may choose their role. Therefore, you will just declare the roles in this module. You may also view, edit, and remove this position.</p>
      <img src="/img/Add-Role.avif" className='img-fluid' alt="Add-Role" />
    </div>
  )
}
