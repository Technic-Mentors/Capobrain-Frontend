import React from 'react'
import { Helmet } from 'react-helmet';

export default function Aboutus() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="This module will contain the information of about us page. What kind of image or title you want to display on it. First you will add title, content picture, banner and description and then save it." />
        <meta property="og:image" content="https://capobrain.com/img/Add-School-About-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/about-us" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="About Us" />
        <meta name="twitter:description" content="This module will contain the information of about us page. What kind of image or title you want to display on it. First you will add title, content picture, banner and description and then save it." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-School-About-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/about-us",
            "name": "Capobrain",
            "description": "This module will contain the information of about us page. What kind of image or title you want to display on it. First you will add title, content picture, banner and description and then save it." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/about-us" />
        <meta name="description" content="This module will contain the information of about us page. What kind of image or title you want to display on it. First you will add title, content picture, banner and description and then save it." />
      </Helmet>

      <h1 className='manual-h1'>About  Us</h1>
      <p>This module will contain the information of about us page. What kind of image or title you want to display on it. First you will add title, content picture, banner and description and then save it. It will update the information on about us page of the website. You can view, edit, and delete this information too.</p>
      <img src="/img/Add-School-About-Detail.avif" className='img-fluid' alt="Add-School-About-Detail" />
    </div>
  )
}
