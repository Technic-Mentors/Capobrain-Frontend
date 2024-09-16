import React from "react";
import { Helmet } from 'react-helmet';

export default function Teaching() {
  return (
    <div className="container">
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Teachning Staff" />
        <meta property="og:description" content="In teaching staff, there is a form for teachers to fill out, and there is an option to add teacher personal details, academic details, work experience and talents, and so on." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Teacher.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/teaching-staff" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Teachning Staff" />
        <meta name="twitter:description" content="In teaching staff, there is a form for teachers to fill out, and there is an option to add teacher personal details, academic details, work experience and talents, and so on." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Teacher.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/teaching-staff",
            "name": "Capobrain",
            "description": "In teaching staff, there is a form for teachers to fill out, and there is an option to add teacher personal details, academic details, work experience and talents, and so on." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/teaching-staff" />
        <meta name="description" content="In teaching staff, there is a form for teachers to fill out, and there is an option to add teacher personal details, academic details, work experience and talents, and so on." />
      </Helmet>

      <h2 className='manual-h1'>Teaching Staff</h2>
      <p>
        In teaching staff, there is a form for teachers to fill out, and there
        is an option to add teacher personal details, academic details, work
        experience and talents, and so on. You must first add Nationality,
        Religion, and Designation to the configuration module. You can enter all
        of the teacher's information step by step, and in the final step, you
        will select which class the teacher has applied for. When we click the
        submit button, it will display the Teacher ID that the teacher will use
        to connect to their portal, which will be unique for all of the
        teachers.
      </p>
      <ul>
        <li>
          First, add Nationality, Religion, and Designation to the configuration
          module.
        </li>
        <li>Image size should be less than or equal to 100 KB.</li>
        <li>
          The file size required in the instructor document area is less than or
          equal to 300 KB.
        </li>
      </ul>
      <img src="/img/Add-Teacher.avif" className="img-fluid" alt="Add-Teacher" />
    </div>
  );
}
