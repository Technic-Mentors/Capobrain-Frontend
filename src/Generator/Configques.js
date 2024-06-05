import React from 'react'
import { Helmet } from 'react-helmet';

export default function Configques() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Question" />
        <meta property="og:description" content="The third module in the paper generator's hierarchy is configure question. You can configure questions in this, but you must select the chapter and topic of the questions you intend to add first." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Topic-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-question" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Question" />
        <meta name="twitter:description" content="The third module in the paper generator's hierarchy is configure question. You can configure questions in this, but you must select the chapter and topic of the questions you intend to add first." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Topic-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-question",
            "name": "Capobrain",
            "description": "The third module in the paper generator's hierarchy is configure question. You can configure questions in this, but you must select the chapter and topic of the questions you intend to add first." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-question" />
        <meta name="description" content="The third module in the paper generator's hierarchy is configure question. You can configure questions in this, but you must select the chapter and topic of the questions you intend to add first." />
      </Helmet>

    <h1 className='manual-h1'>Configure Question</h1>
    <p>The third module in the paper generator's hierarchy is configure question. You can configure questions in this, but you must select the chapter and topic of the questions you intend to add first.  You will choose a branch, class, section, subject, chapter name, chapter topic, and then a question pertaining to that topic. You may include a number of queries. Any moment, you can quickly see, amend, or remove any question.</p>
    <img src="/img/Add-Topic-Detail.avif" className='img-fluid' alt="Add-Topic-Detail" />
  </div>
  )
}
