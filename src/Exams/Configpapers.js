import React from 'react'
import { Helmet } from 'react-helmet';

export default function Configpapers() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Papers" />
        <meta property="og:description" content="You will add papers from the class for which you created examinations in this module; without exam setup, you will be unable to add any papers. " />
        <meta property="og:image" content="https://capobrain.com/img/Configure-Paper.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-papers" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Papers" />
        <meta name="twitter:description" content="You will add papers from the class for which you created examinations in this module; without exam setup, you will be unable to add any papers. " />
        <meta name="twitter:image" content="https://capobrain.com/img/Configure-Paper.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-papers",
            "name": "Capobrain",
            "description": "You will add papers from the class for which you created examinations in this module; without exam setup, you will be unable to add any papers. " ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-papers" />
        <meta name="description" content="You will add papers from the class for which you created examinations in this module; without exam setup, you will be unable to add any papers. " />
      </Helmet>

      <h1 className='manual-h1'>Configure Papers</h1>
      <p>You will add papers from the class for which you created examinations in this module; without exam setup, you will be unable to add any papers. So, before establishing exams and papers in this module, you must first add subjects to the configuration and assign subjects to classes. When you click on configure papers, you will be able to select the branch, the exam type for that branch, the classes that have configure exams, the class, section, and subject, and the grades for that paper.</p>
      <img src="/img/Configure-Paper.avif" className='img-fluid' alt="Configure-Paper" />
    </div>
  )
}
