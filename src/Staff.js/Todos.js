import React from 'react'
import { Helmet } from 'react-helmet';

export default function Todos() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Todos" />
        <meta property="og:description" content="In staff Todo’s, if a school user wants to assign a task to any staff member so that they can add it through the staff Todo’s screen, the school user will search the staff member by staff ID" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Todo.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-todos" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Todos" />
        <meta name="twitter:description" content="In staff Todo’s, if a school user wants to assign a task to any staff member so that they can add it through the staff Todo’s screen, the school user will search the staff member by staff ID" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Todo.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-todos",
            "name": "Capobrain",
            "description": "In staff Todo’s, if a school user wants to assign a task to any staff member so that they can add it through the staff Todo’s screen, the school user will search the staff member by staff ID" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-todos" />
        <meta name="description" content="In staff Todo’s, if a school user wants to assign a task to any staff member so that they can add it through the staff Todo’s screen, the school user will search the staff member by staff ID" />
      </Helmet>

<h2 className='manual-h1'>Staff Todo’s</h2>
<p>In staff Todo’s, if a school user wants to assign a task to any staff member so that they can add it through the staff Todo’s screen, the school user will search the staff member by staff ID and then enter the description and the start or finish date of the work. You can view a list of all the non-teaching staff, and you can change anything in the form.</p>
     <img src="/img/Add-Todo.avif" className='img-fluid' alt="Add-Todo" /> 
    </div>
  )
}
