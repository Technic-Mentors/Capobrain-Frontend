import React from 'react'
import { Helmet } from 'react-helmet';

export default function Uploadmaterial() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Upload Material" />
        <meta property="og:description" content="This is where a school user can add a help material for any subject. They can send it to everyone if you want them to. If you wish to send it to a certain class, subject, or teacher," />
        <meta property="og:image" content="https://capobrain.com/img/Upload-Material.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/upload-material" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Upload Material" />
        <meta name="twitter:description" content="This is where a school user can add a help material for any subject. They can send it to everyone if you want them to. If you wish to send it to a certain class, subject, or teacher," />
        <meta name="twitter:image" content="https://capobrain.com/img/Upload-Material.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/upload-material",
            "name": "Capobrain",
            "description": "This is where a school user can add a help material for any subject. They can send it to everyone if you want them to. If you wish to send it to a certain class, subject, or teacher," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/upload-material" />
        <meta name="description" content="This is where a school user can add a help material for any subject. They can send it to everyone if you want them to. If you wish to send it to a certain class, subject, or teacher," />
      </Helmet>

      <h1 className='manual-h1'>Upload Material</h1>
      <p>This is where a school user can add a help material for any subject. They can send it to everyone if you want them to. If you wish to send it to a certain class, subject, or teacher, they can do so as well. You will choose a title, a file to upload, a date, and who you want to send it to. As a result, everyone has access to this content through their own portal.</p>
      <img src="/img/Upload-Material.avif" className='img-fluid' alt="Upload-Material" />
    </div>
  )
}
