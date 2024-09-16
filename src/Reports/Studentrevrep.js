import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentrevrep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Review Report" />
        <meta property="og:description" content="A student review report provides information about a student's performance and experience in a particular branch or department of an educational institution." />
        <meta property="og:image" content="https://capobrain.com/img/Student-Review-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-review-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Review Report" />
        <meta name="twitter:description" content="A student review report provides information about a student's performance and experience in a particular branch or department of an educational institution." />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Review-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-review-report",
            "name": "Capobrain",
            "description": "A student review report provides information about a student's performance and experience in a particular branch or department of an educational institution." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-review-report" />
        <meta name="description" content="A student review report provides information about a student's performance and experience in a particular branch or department of an educational institution." />
      </Helmet>

    <h2 className='manual-h1'>Student Review Report</h2>
    <p>A student review report provides information about a student's performance and experience in a particular branch or department of an educational institution. It typically includes details such as the branch or course name, the student's class and section, the name of their father or guardian, a rating or evaluation in the form of stars or a numerical score, and a status that reflects the student's overall standing or progress within that branch or department. This report is often used to assess and communicate a student's academic and personal development within a specific area of study.</p>
    <img src="/img/Student-Review-Report.avif" className='img-fluid' alt="Student-Review-Report" />
  </div>
  )
}
