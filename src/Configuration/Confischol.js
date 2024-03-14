import React from 'react'
import { Helmet } from 'react-helmet';

export default function Confischol() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Scholorship" />
        <meta property="og:description" content="Scholarships are given out for many reasons. Merit scholarships, essay scholarships, academic achievement scholarships, and athletic scholarships are all options." />
        <meta property="og:image" content="https://capobrain.com/img/Configure-Scholarship.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-scholarship" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Scholorship" />
        <meta name="twitter:description" content="Scholarships are given out for many reasons. Merit scholarships, essay scholarships, academic achievement scholarships, and athletic scholarships are all options." />
        <meta name="twitter:image" content="https://capobrain.com/img/Configure-Scholarship.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-scholarship",
            "name": "Capobrain",
            "description": "Scholarships are given out for many reasons. Merit scholarships, essay scholarships, academic achievement scholarships, and athletic scholarships are all options." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-scholarship" />
        <meta name="description" content="Scholarships are given out for many reasons. Merit scholarships, essay scholarships, academic achievement scholarships, and athletic scholarships are all options." />
      </Helmet>

      <h1 className='manual-h1'>Configure Scholorship</h1>
      <p>Scholarships are given out for many reasons. Merit scholarships, essay scholarships, academic achievement scholarships, and athletic scholarships are all options. You will select the branch, scholarship name, kind, and amount in this section. Scholarships are classified into two types: one-time and permanent. When you apply for a scholarship for a student, the scholarship amount is deducted from the student's account.</p>
      <img src="/img/Configure-Scholarship.png" className='img-fluid' alt="Configure-Scholarship" />
    </div>
  )
}
