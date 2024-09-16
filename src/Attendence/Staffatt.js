import React from 'react'
import { Helmet } from 'react-helmet';

export default function Staffatt() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Attendance" />
        <meta property="og:description" content="This is the opportunity to mark staff attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When you will click on Mark staff Attendance" />
        <meta property="og:image" content="https://capobrain.com/img/Staff-Attendance.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-attendance" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Attendance" />
        <meta name="twitter:description" content="This is the opportunity to mark staff attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When you will click on Mark staff Attendance" />
        <meta name="twitter:image" content="https://capobrain.com/img/Staff-Attendance.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-attendance",
            "name": "Capobrain",
            "description": "This is the opportunity to mark staff attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When you will click on Mark staff Attendance" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-attendance" />
        <meta name="description" content="This is the opportunity to mark staff attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When you will click on Mark staff Attendance" />
      </Helmet>

      <h2 className='manual-h1'>Staff Attendance</h2>
      <p>This is the opportunity to mark staff attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When you will click on Mark staff Attendance you can search the staff through ID and then you will enter the clock in or clock out time and the status.</p>
      <img src="/img/Staff-Attendance.avif" className='img-fluid' alt="Staff-Attendance" />
    </div>
  )
}
