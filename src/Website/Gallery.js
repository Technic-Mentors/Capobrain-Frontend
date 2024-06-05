import React from 'react'
import { Helmet } from 'react-helmet';

export default function Gallery() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Gallery" />
        <meta property="og:description" content="In gallery submodule, we can add images, title and description about the gallery page. The images that we will add here, will be displayed on the Gallery section of the website on the front page." />
        <meta property="og:image" content="https://capobrain.com/img/Add-School-Galery-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/gallery" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Gallery" />
        <meta name="twitter:description" content="In gallery submodule, we can add images, title and description about the gallery page. The images that we will add here, will be displayed on the Gallery section of the website on the front page." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-School-Galery-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/gallery",
            "name": "Capobrain",
            "description": "In gallery submodule, we can add images, title and description about the gallery page. The images that we will add here, will be displayed on the Gallery section of the website on the front page." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/gallery" />
        <meta name="description" content="In gallery submodule, we can add images, title and description about the gallery page. The images that we will add here, will be displayed on the Gallery section of the website on the front page." />
      </Helmet>

      <h1 className='manual-h1'>Gallery</h1>
      <p>In gallery submodule, we can add images, title and description about the gallery page. The images that we will add here, will be displayed on the Gallery section of the website on the front page. We can change, update or delete the images whenever needed.</p>
      <img src="/img/Add-School-Galery-Detail.avif" className='img-fluid' alt="Add-School-Galery-Detail" />
    </div>
  )
}
