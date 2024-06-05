import React from 'react'
import { Helmet } from 'react-helmet';

export default function Classtimetable() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Class Time Table" />
        <meta property="og:description" content="We all know that every school has a class schedule that shows which instructor will be lecturing in which class, and this module operates in the same way." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Class-Time.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/class-time-table" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Class Time Table" />
        <meta name="twitter:description" content="We all know that every school has a class schedule that shows which instructor will be lecturing in which class, and this module operates in the same way." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Class-Time.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/class-time-table",
            "name": "Capobrain",
            "description": "We all know that every school has a class schedule that shows which instructor will be lecturing in which class, and this module operates in the same way." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/class-time-table" />
        <meta name="description" content="We all know that every school has a class schedule that shows which instructor will be lecturing in which class, and this module operates in the same way." />
      </Helmet>

      <h1 className='manual-h1'>Class Time Table</h1>
      <p>We all know that every school has a class schedule that shows which instructor will be lecturing in which class, and this module operates in the same way. This is where you will choose the teacher, class, subject, and time for each subject. You will select the class time with instructor details so that teachers may quickly figure out the lecture time of any class.</p>
      <img src="/img/Add-Class-Time.avif" className='img-fluid' alt="Add-Class-Time" />
    </div>
  )
}
