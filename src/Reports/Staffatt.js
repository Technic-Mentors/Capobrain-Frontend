import React from 'react'
import { Helmet } from 'react-helmet';

export default function Staffatt2() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Attendence" />
        <meta property="og:description" content="The Staff Attendance reporting module allows users to access a comprehensive view of staff attendance records, filtered by specific date and staff name." />
        <meta property="og:image" content="https://capobrain.com/img/Staff-Attendance-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-attendnce" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Attendence" />
        <meta name="twitter:description" content="The Staff Attendance reporting module allows users to access a comprehensive view of staff attendance records, filtered by specific date and staff name." />
        <meta name="twitter:image" content="https://capobrain.com/img/Staff-Attendance-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-attendnce",
            "name": "Capobrain",
            "description": "The Staff Attendance reporting module allows users to access a comprehensive view of staff attendance records, filtered by specific date and staff name." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-attendnce" />
        <meta name="description" content="The Staff Attendance reporting module allows users to access a comprehensive view of staff attendance records, filtered by specific date and staff name." />
      </Helmet>

    <h1 className='manual-h1'>Staff Attendence</h1>
    <p>The Staff Attendance reporting module allows users to access a comprehensive view of staff attendance records, filtered by specific date and staff name. This module provides a convenient way to track and monitor attendance data, and users can generate printable reports for further analysis and record-keeping. It will show you the branch name, staff ID, Name, Class Detail and attendance status and clock-in & clock out time with date.</p>
    <img src="/img/Staff-Attendance-Report.png" className='img-fluid' alt="Staff-Attendance-Report" />
  </div>
  )
}
