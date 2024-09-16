import React from 'react'
import { Helmet } from 'react-helmet';

export default function Homeworkmark() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Home Work Marking" />
        <meta property="og:description" content="This module enables school administrators to enter summer homework marking. When you click on the summer homework marking list, you will select a branch, class, section," />
        <meta property="og:image" content="https://capobrain.com/img/Summer-Vacation-Homework-Marking.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/home-work-marking" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Home Work Marking" />
        <meta name="twitter:description" content="This module enables school administrators to enter summer homework marking. When you click on the summer homework marking list, you will select a branch, class, section," />
        <meta name="twitter:image" content="https://capobrain.com/img/Summer-Vacation-Homework-Marking.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/home-work-marking",
            "name": "Capobrain",
            "description": "This module enables school administrators to enter summer homework marking. When you click on the summer homework marking list, you will select a branch, class, section," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/home-work-marking" />
        <meta name="description" content="This module enables school administrators to enter summer homework marking. When you click on the summer homework marking list, you will select a branch, class, section," />
      </Helmet>

      <h2 className='manual-h1'>Home Work Marking</h2>
      <p>This module enables school administrators to enter summer homework marking. When you click on the summer homework marking list, you will select a branch, class, section, and subject before clicking the load button, which will display a list of students based on the filters you have chosen, after which you will enter the homework marking, which students and parents can view on their portal and teachers can do from their portal.</p>
      <img src="/img/Summer-Vacation-Homework-Marking.avif" className='img-fluid' alt="Summer-Vacation-Homework-Marking" />
    </div>
  )
}
