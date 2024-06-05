import React from 'react'
import { Helmet } from 'react-helmet';

export default function Staffcerti() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Certificate" />
        <meta property="og:description" content="In staff certificate, it will show you the list of all the staff with proper information Branch, teacher ID, and name, Gender, Class, Section, and Father Name" />
        <meta property="og:image" content="https://capobrain.com/img/Staff-Certificate.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-certificate" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Certificate" />
        <meta name="twitter:description" content="In staff certificate, it will show you the list of all the staff with proper information Branch, teacher ID, and name, Gender, Class, Section, and Father Name" />
        <meta name="twitter:image" content="https://capobrain.com/img/Staff-Certificate.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-certificate",
            "name": "Capobrain",
            "description": "In staff certificate, it will show you the list of all the staff with proper information Branch, teacher ID, and name, Gender, Class, Section, and Father Name" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-certificate" />
        <meta name="description" content="In staff certificate, it will show you the list of all the staff with proper information Branch, teacher ID, and name, Gender, Class, Section, and Father Name" />
      </Helmet>

      <h1 className='manual-h1'>Staff Certificate</h1>
      <p>In staff certificate, it will show you the list of all the staff with proper information Branch, teacher ID, and name, Gender, Class, Section, and Father Name but in action field it shows the status “Not Available” because the certificate will be available only in the case when we configure first.</p>
      <img src="/img/Staff-Certificate.avif" className='img-fluid' alt="Staff-Certificate" />
    </div>
  )
}
