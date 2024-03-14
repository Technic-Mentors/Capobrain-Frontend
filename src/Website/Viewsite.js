import React from 'react'
import { Helmet } from 'react-helmet';

export default function Viewsite() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Visit Website" />
        <meta property="og:description" content="Simply select this option, and it will display the website's front page that was created using the information from your website. On the website, you may see information about the company," />
        <meta property="og:image" content="https://capobrain.com/img/Visit-Website.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/visit-website" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Visit Website" />
        <meta name="twitter:description" content="Simply select this option, and it will display the website's front page that was created using the information from your website. On the website, you may see information about the company," />
        <meta name="twitter:image" content="https://capobrain.com/img/Visit-Website.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/visit-website",
            "name": "Capobrain",
            "description": "Simply select this option, and it will display the website's front page that was created using the information from your website. On the website, you may see information about the company," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/visit-website" />
        <meta name="description" content="Simply select this option, and it will display the website's front page that was created using the information from your website. On the website, you may see information about the company," />
      </Helmet>

      <h1 className='manual-h1'>Visit Website</h1>
      <p>Simply select this option, and it will display the website's front page that was created using the information from your website. On the website, you may see information about the company, file a complaint with the school, apply for admission online, and access news, a photo gallery, upcoming events, and course information. Any changes you make in the backend will also update the front end.</p>
      <img src="/img/Visit-Website.png" className='img-fluid' alt="Visit-Website" />
    </div>
  )
}
