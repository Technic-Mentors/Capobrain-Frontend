import React from 'react'
import { Helmet } from 'react-helmet';

export default function Lecture() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Lecture" />
        <meta property="og:description" content="Lectures are the first module of an LMS. In this section, you will include lecture details for any subject so that students can access them via their portal. " />
        <meta property="og:image" content="https://capobrain.com/img/Add-Lecture-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/lecture" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Lecture" />
        <meta name="twitter:description" content="Lectures are the first module of an LMS. In this section, you will include lecture details for any subject so that students can access them via their portal. " />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Lecture-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/lecture",
            "name": "Capobrain",
            "description": "Lectures are the first module of an LMS. In this section, you will include lecture details for any subject so that students can access them via their portal. " ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/lecture" />
        <meta name="description" content="Lectures are the first module of an LMS. In this section, you will include lecture details for any subject so that students can access them via their portal. " />
      </Helmet>

      <h1 className='manual-h1'>Lecture</h1>
      <p>Lectures are the first module of an LMS. In this section, you will include lecture details for any subject so that students can access them via their portal. You will choose a branch, class, section, and subject before adding a lecture description. Following that, you will be able to view, change, and remove this lecture as well. </p>
      <img src="/img/Add-Lecture-Detail.avif" className='img-fluid' alt="Add-Lecture-Detail" />
    </div>
  )
}
