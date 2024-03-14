import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentatt2() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Attendence" />
        <meta property="og:description" content="The Student Attendance reporting module allows users to access a comprehensive view of student attendance records, filtered by specific dates, classes, sections, and individual student names." />
        <meta property="og:image" content="https://capobrain.com/img/Student-Attendance.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-attendnce" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Attendence" />
        <meta name="twitter:description" content="The Student Attendance reporting module allows users to access a comprehensive view of student attendance records, filtered by specific dates, classes, sections, and individual student names." />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Attendance.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-attendnce",
            "name": "Capobrain",
            "description": "The Student Attendance reporting module allows users to access a comprehensive view of student attendance records, filtered by specific dates, classes, sections, and individual student names." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-attendnce" />
        <meta name="description" content="The Student Attendance reporting module allows users to access a comprehensive view of student attendance records, filtered by specific dates, classes, sections, and individual student names." />
      </Helmet>

    <h1 className='manual-h1'>Student Attendence</h1>
    <p>The "Student Attendance" reporting module allows users to access a comprehensive view of student attendance records, filtered by specific dates, classes, sections, and individual student names. This module provides a convenient way to track and monitor attendance data, and users can generate printable reports for further analysis and record-keeping. It will show you the branch name, student ID, Name, Class Detail and attendance status with date.</p>
    <img src="/img/Student-Attendance.png" className='img-fluid' alt="" />
  </div>
  )
}
