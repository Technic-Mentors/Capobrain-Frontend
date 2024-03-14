import React from 'react'
import { Helmet } from 'react-helmet';

export default function Schooltiming() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="School Timing" />
        <meta property="og:description" content="In school timing, select the branch name before entering the start or end time. Anything can be added or changed at any moment. The School Manage module displays the school information" />
        <meta property="og:image" content="https://capobrain.com/img/Add-School-Timing.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/school-timing" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="School Timing" />
        <meta name="twitter:description" content="In school timing, select the branch name before entering the start or end time. Anything can be added or changed at any moment. The School Manage module displays the school information" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-School-Timing.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/school-timing",
            "name": "Capobrain",
            "description": "In school timing, select the branch name before entering the start or end time. Anything can be added or changed at any moment. The School Manage module displays the school information" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/school-timing" />
        <meta name="description" content="In school timing, select the branch name before entering the start or end time. Anything can be added or changed at any moment. The School Manage module displays the school information" />
      </Helmet>

      <h1 className='manual-h1'>School Timing</h1>
      <p>In school timing, select the branch name before entering the start or end time. Anything can be added or changed at any moment. The School Manage module displays the school information that was added by the super admin, and all of the fields are read-only; you cannot alter anything. It can be changed by the super admin.</p>
      <img src="/img/Add-School-Timing.png" className='img-fluid' alt="Add-School-Timing" />
    </div>
  )
}
