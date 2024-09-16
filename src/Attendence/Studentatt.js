import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentatt() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Attendance" />
        <meta property="og:description" content="This is the module to mark student attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When we click on Mark Student Attendance" />
        <meta property="og:image" content="https://capobrain.com/img/Student-Atendance.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-attendance" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Attendance" />
        <meta name="twitter:description" content="This is the module to mark student attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When we click on Mark Student Attendance" />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Atendance.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-attendance",
            "name": "Capobrain",
            "description": "This is the module to mark student attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When we click on Mark Student Attendance" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-attendance" />
        <meta name="description" content="This is the module to mark student attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When we click on Mark Student Attendance" />
      </Helmet>

      <h2 className='manual-h1'>Student Attendance</h2>
      <p>This is the module to mark student attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When we click on Mark Student Attendance then you have to select a branch, class, and section, then click the load button, it will display the status of the attendance, which you can change to present, absent, or leave.</p>
      <img src="/img/Student-Atendance.avif" className='img-fluid' alt="Student-Atendance" />
    </div>
  )
}
