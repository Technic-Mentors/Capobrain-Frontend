import React from 'react'
import { Helmet } from 'react-helmet';

export default function Questionbank() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Question Bank" />
        <meta property="og:description" content="We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Question-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/question-bank" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Question Bank" />
        <meta name="twitter:description" content="We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Question-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/question-bank",
            "name": "Capobrain",
            "description": "We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/question-bank" />
        <meta name="description" content="We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions." />
      </Helmet>

      <h1 className='manual-h1'>Question Bank</h1>
      <p>We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions. You can add several questions, and these questions will be displayed at the time of admission. You will select the branch name, the class and section, the subject, and finally the question. You can decide how many questions you wish to include.</p>
      <img src="/img/Add-Question-Detail.avif" className='img-fluid' alt="Add-Question-Detail" />
    </div>
  )
}
