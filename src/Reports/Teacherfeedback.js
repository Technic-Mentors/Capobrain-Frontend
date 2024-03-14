import React from "react";
import { Helmet } from 'react-helmet';

export default function Teacherfeedback() {
  return (
    <div className="container">
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Feedback" />
        <meta property="og:description" content="A staff feedback report is a document that summarizes and presents feedback, comments, or evaluations provided by employees about their workplace, job, colleagues," />
        <meta property="og:image" content="https://capobrain.com/img/Teacher-Feedback.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/teacher-feedback" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Feedback" />
        <meta name="twitter:description" content="A staff feedback report is a document that summarizes and presents feedback, comments, or evaluations provided by employees about their workplace, job, colleagues," />
        <meta name="twitter:image" content="https://capobrain.com/img/Teacher-Feedback.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/teacher-feedback",
            "name": "Capobrain",
            "description": "A staff feedback report is a document that summarizes and presents feedback, comments, or evaluations provided by employees about their workplace, job, colleagues," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/teacher-feedback" />
        <meta name="description" content="A staff feedback report is a document that summarizes and presents feedback, comments, or evaluations provided by employees about their workplace, job, colleagues," />
      </Helmet>

      <h1 className='manual-h1'>Staff Feedback</h1>
      <p>
        A staff feedback report is a document that summarizes and presents
        feedback, comments, or evaluations provided by employees about their
        workplace, job, colleagues, and other aspects of their employment. These
        reports are typically created by management to assess employee
        satisfaction, identify areas for improvement, and make informed
        decisions to enhance the working environment. This report will show you
        the staff detail and the rating stars of that staff. You can search any
        staff by select their branch, class, section and name.
      </p>
      <img src="/img/Teacher-Feedback.png" className="img-fluid" alt="" />
    </div>
  );
}
