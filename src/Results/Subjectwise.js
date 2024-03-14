import React from 'react'
import { Helmet } from 'react-helmet';

export default function Subjectwise() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Subject Wise Result" />
        <meta property="og:description" content="You will add the subject wise result of any class in this module. You will first select the branch, exam type, class, and section, subject and then click the load button," />
        <meta property="og:image" content="https://capobrain.com/img/Subject-Wise-Result.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/subject-wise-result" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Subject Wise Result" />
        <meta name="twitter:description" content="You will add the subject wise result of any class in this module. You will first select the branch, exam type, class, and section, subject and then click the load button," />
        <meta name="twitter:image" content="https://capobrain.com/img/Subject-Wise-Result.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/subject-wise-result",
            "name": "Capobrain",
            "description": "You will add the subject wise result of any class in this module. You will first select the branch, exam type, class, and section, subject and then click the load button," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/subject-wise-result" />
        <meta name="description" content="You will add the subject wise result of any class in this module. You will first select the branch, exam type, class, and section, subject and then click the load button," />
      </Helmet>

      <h1 className='manual-h1'>Subject Wise Result</h1>
      <p>You will add the subject wise result of any class in this module. You will first select the branch, exam type, class, and section, subject and then click the load button, which will load the subject according to the search filters. You will then enter the marks of the subject and then save the result, which will display the record in the relevant result card in the result list.</p>
      <img src="/img/Subject-Wise-Result.png" className='img-fluid' alt="Subject-Wise-Result" />
    </div>
  )
}
