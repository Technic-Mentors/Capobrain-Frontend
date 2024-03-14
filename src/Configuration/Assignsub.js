import React from 'react'
import { Helmet } from 'react-helmet';

export default function Assignsub() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Assign Subject" />
        <meta property="og:description" content="The subjects you enter in this module's subject module will now be assigned to classes, and you can allocate several subjects to the same class. After selecting the branch," />
        <meta property="og:image" content="https://capobrain.com/img/Assign-Subject.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/assign-subject" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Assign Subject" />
        <meta name="twitter:description" content="The subjects you enter in this module's subject module will now be assigned to classes, and you can allocate several subjects to the same class. After selecting the branch," />
        <meta name="twitter:image" content="https://capobrain.com/img/Assign-Subject.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/assign-subject",
            "name": "Capobrain",
            "description": "The subjects you enter in this module's subject module will now be assigned to classes, and you can allocate several subjects to the same class. After selecting the branch," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/assign-subject" />
        <meta name="description" content="The subjects you enter in this module's subject module will now be assigned to classes, and you can allocate several subjects to the same class. After selecting the branch," />
      </Helmet>

      <h1 className='manual-h1'>Assign Subject</h1>
      <p>The subjects you enter in this module's subject module will now be assigned to classes, and you can allocate several subjects to the same class. After selecting the branch, class, and section, you will check the subject that you will teach in the chosen class. You can also view, edit, and delete those subjects, but you cannot directly delete a subject that has been assigned to a class without first receiving an alert. Only subjects that aren't assigned to anyone can be deleted.</p>
      <img src="/img/Assign-Subject.png" className='img-fluid' alt="Assign-Subject" />
    </div>
  )
}
