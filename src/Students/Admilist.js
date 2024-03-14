import React from "react";
import { Helmet } from 'react-helmet';

export default function Admilist() {
  return (
    <div className="container">
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student List" />
        <meta property="og:description" content="In student list, it will show all the student list you can view the documents, login details or you can also change anything in the form or you can also delete any form." />
        <meta property="og:image" content="https://capobrain.com/img/Student-List.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/students-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student List" />
        <meta name="twitter:description" content="In student list, it will show all the student list you can view the documents, login details or you can also change anything in the form or you can also delete any form." />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-List.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/students-list",
            "name": "Capobrain",
            "description": "In student list, it will show all the student list you can view the documents, login details or you can also change anything in the form or you can also delete any form." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/students-list" />
        <meta name="description" content="In student list, it will show all the student list you can view the documents, login details or you can also change anything in the form or you can also delete any form." />
      </Helmet>

      <h1 className='manual-h1'>Student List</h1>
      <p>
        In student list, it will show all the student list you can view the
        documents, login details or you can also change anything in the form or
        you can also delete any form.
      </p>
      <ul>
        <li>Format! Image Format Must Be JPG, JPEG or PNG.</li>
        <li>Image size should be less than or equal to 100 KB.</li>
        <li>Document Format! Image Format Must Be JPG, JPEG, PDF or PNG.</li>
        <li>
          The file size required in the instructor document area is less than or
          equal to 300 KB.
        </li>
      </ul>
      <img src="/img/Student-List.png" className="img-fluid" alt="Student-List" />
    </div>
  );
}
