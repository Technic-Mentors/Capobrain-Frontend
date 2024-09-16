import React from 'react'
import { Helmet } from 'react-helmet';

export default function Classwiseque() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Class Wise Question" />
        <meta property="og:description" content="We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions." />
        <meta property="og:image" content="https://capobrain.com/img/Class-Wise-Question-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/class-wise-question" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Class Wise Question" />
        <meta name="twitter:description" content="We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions." />
        <meta name="twitter:image" content="https://capobrain.com/img/Class-Wise-Question-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/class-wise-question",
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

        <link rel="canonical" href="https://capobrain.com/user-manual/class-wise-question" />
        <meta name="description" content="We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions." />
      </Helmet>

      <h2 className='manual-h1'>Class Wise Question</h2>
      <p>We all know that when applying to schools, they will ask some questions for analysis, therefore this module is for this. In this module, you will utilize the question bank to add questions. You will select the branch name, the class and section, the subject, and finally the question. You can decide how many questions you wish to include. If we select class 1 when adding questions, then if any student wants to acquire admission in class 1, those questions will be displayed that you will configure for the class 1. This is how question banks and class-specific questions differ from one other.</p>
      <img src="/img/Class-Wise-Question-Detail.avif" className='img-fluid' alt="Class-Wise-Question-Detail" />
    </div>
  )
}
