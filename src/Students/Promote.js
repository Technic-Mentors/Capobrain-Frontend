import React from "react";
import { Helmet } from 'react-helmet';

export default function Promote() {
  return (
    <div className="container">
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Promote Students" />
        <meta property="og:description" content="There are two options for student promotion: single student promotion and promoting students as a full class. So, if you want to promote a single student to the next class," />
        <meta property="og:image" content="https://capobrain.com/img/Promote-Student.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/promote-students" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Promote Students" />
        <meta name="twitter:description" content="There are two options for student promotion: single student promotion and promoting students as a full class. So, if you want to promote a single student to the next class," />
        <meta name="twitter:image" content="https://capobrain.com/img/Promote-Student.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/promote-students",
            "name": "Capobrain",
            "description": "There are two options for student promotion: single student promotion and promoting students as a full class. So, if you want to promote a single student to the next class," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/promote-students" />
        <meta name="description" content="There are two options for student promotion: single student promotion and promoting students as a full class. So, if you want to promote a single student to the next class," />
      </Helmet>

      <h1 className='manual-h1'>Promote Students</h1>
      <p>
        There are two options for student promotion: single student promotion
        and promoting students as a full class. So, if you want to promote a
        single student to the next class, use the single student promotion
        option. You can search for a student by ID and then select the class and
        section to which the student will be promoted.
      </p>
      <ul>
        <li>First add classes, and section to the configuration module.</li>
        <li>Select single student promotion and promote students</li>
      </ul>
      <img src="/img/Promote-Student.avif" className="img-fluid" alt="Promote-Student" />
    </div>
  );
}
