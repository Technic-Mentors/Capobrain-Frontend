import React from 'react'
import { Helmet } from 'react-helmet';

export default function Users() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Users" />
        <meta property="og:description" content="Before adding any users, the roles must first be created. Because when adding a user, you may choose their role. Your user name, father name, CNIC, phone number, email address, role," />
        <meta property="og:image" content="https://capobrain.com/img/Add-User.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/users" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Users" />
        <meta name="twitter:description" content="Before adding any users, the roles must first be created. Because when adding a user, you may choose their role. Your user name, father name, CNIC, phone number, email address, role," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-User.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/users",
            "name": "Capobrain",
            "description": "Before adding any users, the roles must first be created. Because when adding a user, you may choose their role. Your user name, father name, CNIC, phone number, email address, role," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/users" />
        <meta name="description" content="Before adding any users, the roles must first be created. Because when adding a user, you may choose their role. Your user name, father name, CNIC, phone number, email address, role," />
      </Helmet>

      <h2 className='manual-h1'>Users</h2>
      <p>Before adding any users, the roles must first be created. Because when adding a user, you may choose their role. Your user name, father name, CNIC, phone number, email address, role, and photo can all be found here. For instance, you must first add the role of branch user before providing the user's details if you want to add a branch user. An email address and password are needed to log in. As a result, you can quickly determine which user plays which role. </p>
      <img src="/img/Add-User.avif" className='img-fluid' alt="Add-User" />
    </div>
  )
}
