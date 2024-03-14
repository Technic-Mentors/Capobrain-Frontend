import React from 'react'
import { Helmet } from 'react-helmet';

export default function Assignclass() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Assign Classes" />
        <meta property="og:description" content="The module for assigning courses to teachers includes information on which class each teacher has been given. You must first choose the branch name, instructor," />
        <meta property="og:image" content="https://capobrain.com/img/Assign-Class.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/assign-classes" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Assign Classes" />
        <meta name="twitter:description" content="The module for assigning courses to teachers includes information on which class each teacher has been given. You must first choose the branch name, instructor," />
        <meta name="twitter:image" content="https://capobrain.com/img/Assign-Class.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/assign-classes",
            "name": "Capobrain",
            "description": "The module for assigning courses to teachers includes information on which class each teacher has been given. You must first choose the branch name, instructor," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/assign-classes" />
        <meta name="description" content="The module for assigning courses to teachers includes information on which class each teacher has been given. You must first choose the branch name, instructor," />
      </Helmet>

      <h1 className='manual-h1'>Assign Classes</h1>
      <p>The module for assigning courses to teachers includes information on which class each teacher has been given. You must first choose the branch name, instructor, and class or section that you want to assign to that teacher. The first instructor you assign will be in control of the class if you assign numerous teachers to the same class. So you can easily figure out which class has assign to which teacher. You can also change or remove this data. </p>
      <img src="/img/Assign-Class.png" className='img-fluid' alt="Assign-Class" />
    </div>
  )
}
