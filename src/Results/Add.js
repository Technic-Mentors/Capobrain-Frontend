import React from 'react'
import { Helmet } from 'react-helmet';

export default function Add() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Add Result" />
        <meta property="og:description" content="You will add the result of any class in this module. You will first select the branch, exam type, class, and section, and then click the load button, which will load all of the subjects in that class." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Result.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/add-result" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Add Result" />
        <meta name="twitter:description" content="You will add the result of any class in this module. You will first select the branch, exam type, class, and section, and then click the load button, which will load all of the subjects in that class." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Result.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/add-result",
            "name": "Capobrain",
            "description": "You will add the result of any class in this module. You will first select the branch, exam type, class, and section, and then click the load button, which will load all of the subjects in that class." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/add-result" />
        <meta name="description" content="You will add the result of any class in this module. You will first select the branch, exam type, class, and section, and then click the load button, which will load all of the subjects in that class." />
      </Helmet>

      <h1 className='manual-h1'>Add Result</h1>
      <p>You will add the result of any class in this module. You will first select the branch, exam type, class, and section, and then click the load button, which will load all of the subjects in that class. You will then enter the marks for each subject one by one, and then save the result, which will display the record in the relevant result card in the result list.</p>
      <img src="/img/Add-Result.png" className='img-fluid' alt="Add-Result" />
    </div>
  )
}
