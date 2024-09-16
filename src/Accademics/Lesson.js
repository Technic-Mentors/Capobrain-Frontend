import React from 'react'
import { Helmet } from 'react-helmet';

export default function Lesson() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Lesson Planning" />
        <meta property="og:description" content="You will include the lesson plan for the relevant subject in lesson preparation. You will select the branch, class, section, subject, and date, then the file and the appropriate lesson detail." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Lesson-Plan.jpg" />
        <meta property="og:url" content="https://capobrain.com/user-manual/lesson-planning" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Lesson Planning" />
        <meta name="twitter:description" content="You will include the lesson plan for the relevant subject in lesson preparation. You will select the branch, class, section, subject, and date, then the file and the appropriate lesson detail." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Lesson-Plan.jpg" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/lesson-planning",
            "name": "Capobrain",
            "description": "You will include the lesson plan for the relevant subject in lesson preparation. You will select the branch, class, section, subject, and date, then the file and the appropriate lesson detail." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/lesson-planning" />
        <meta name="description" content="You will include the lesson plan for the relevant subject in lesson preparation. You will select the branch, class, section, subject, and date, then the file and the appropriate lesson detail." />
      </Helmet>

      <h2 className='manual-h1'>Lesson Planning</h2>
      <p>You will include the lesson plan for the relevant subject in lesson preparation. You will select the branch, class, section, subject, and date, then the file and the appropriate lesson detail. It will provide a list of all the lesson plans that you can view. You can also search by branch name, class, and date, and it will display the data according on the search filters.</p>
      <img src="/img/Add-Lesson-Plan.avif" className='img-fluid' alt="Add-Lesson-Plan" />
    </div>
  )
}
