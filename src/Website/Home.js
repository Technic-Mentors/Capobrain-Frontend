import React from 'react'
import { Helmet } from 'react-helmet';

export default function Home2() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="When we click on home module it will show you the form which contain the fields related to school information which will display on website. You will enter address," />
        <meta property="og:image" content="https://capobrain.com/img/Add-School-Home-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/home" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Home" />
        <meta name="twitter:description" content="When we click on home module it will show you the form which contain the fields related to school information which will display on website. You will enter address," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-School-Home-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/home",
            "name": "Capobrain",
            "description": "When we click on home module it will show you the form which contain the fields related to school information which will display on website. You will enter address," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/home" />
        <meta name="description" content="When we click on home module it will show you the form which contain the fields related to school information which will display on website. You will enter address," />
      </Helmet>

      <h1 className='manual-h1'>Home</h1>
      <p>When we click on home module it will show you the form which contain the fields related to school information which will display on website. You will enter address, email, phone no, social links, school logo, banner & description and footer description. You can view, edit & delete this information too.</p>
      <img src="/img/Add-School-Home-Detail.avif" className='img-fluid' alt="Add-School-Home-Detail" />
    </div>
  )
}
