import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentfed() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Feedback" />
        <meta property="og:description" content="A student feedback report is a summary that combines student feedback on their educational experience. This input can come from a variety of sources, including surveys," />
        <meta property="og:image" content="https://capobrain.com/img/Student-Feedback.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-feedback" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Feedback" />
        <meta name="twitter:description" content="A student feedback report is a summary that combines student feedback on their educational experience. This input can come from a variety of sources, including surveys," />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Feedback.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-feedback",
            "name": "Capobrain",
            "description": "A student feedback report is a summary that combines student feedback on their educational experience. This input can come from a variety of sources, including surveys," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-feedback" />
        <meta name="description" content="A student feedback report is a summary that combines student feedback on their educational experience. This input can come from a variety of sources, including surveys," />
      </Helmet>

      <h1 className='manual-h1'>Student Feedback</h1>
      <p>A student feedback report is a summary that combines student feedback on their educational experience. This input can come from a variety of sources, including surveys, evaluations, questionnaires, and face-to-face contact with students. A student feedback report's major goal is to gather information about the quality of education, teaching techniques, and overall learning experience. This report will show you the student's information as well as the name of the individual who added the criticism. You can look for any student feedback by class and section.</p>
      <img src="/img/Student-Feedback.avif" className='img-fluid' alt="Student-Feedback" />
    </div>
  )
}
