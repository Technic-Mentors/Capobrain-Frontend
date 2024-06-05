import React from 'react'
import { Helmet } from 'react-helmet';

export default function Configtopic() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Topic" />
        <meta property="og:description" content="After logging in successfully, a dashboard will appear representing all the importing highlights regarding the school. We can filter this information by choosing the school branch." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Topic-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-topic" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Topic" />
        <meta name="twitter:description" content="After logging in successfully, a dashboard will appear representing all the importing highlights regarding the school. We can filter this information by choosing the school branch." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Topic-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-topic",
            "name": "Capobrain",
            "description": "After logging in successfully, a dashboard will appear representing all the importing highlights regarding the school. We can filter this information by choosing the school branch." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-topic" />
        <meta name="description" content="After logging in successfully, a dashboard will appear representing all the importing highlights regarding the school. We can filter this information by choosing the school branch." />
      </Helmet>

    <h1 className='manual-h1'>Configure Topic</h1>
    <p>Paper generator has a number of submodules, the second of which is configure topic. The topic name can be changed from the chapter. The purpose of the configuration topic is to get you mentioned in the paper utilizing data from this chapter.</p>
    <img src="/img/Add-Topic-Detail.avif" className='img-fluid' alt="Add-Topic-Detail" />
  </div>
  )
}
