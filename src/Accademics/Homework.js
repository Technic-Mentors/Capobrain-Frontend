import React from 'react'
import { Helmet } from 'react-helmet';

export default function Homework() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Home Work" />
        <meta property="og:description" content="In this, school user can assign the homework of any subject to the class. You will select the branch, class, section, subject, and date, then the file and the appropriate homework detail." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Home-Work.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/home-work" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Home Work" />
        <meta name="twitter:description" content="In this, school user can assign the homework of any subject to the class. You will select the branch, class, section, subject, and date, then the file and the appropriate homework detail." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Home-Work.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/home-work",
            "name": "Capobrain",
            "description": "In this, school user can assign the homework of any subject to the class. You will select the branch, class, section, subject, and date, then the file and the appropriate homework detail." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/home-work" />
        <meta name="description" content="In this, school user can assign the homework of any subject to the class. You will select the branch, class, section, subject, and date, then the file and the appropriate homework detail." />
      </Helmet>

      <h1 className='manual-h1'>Home Work</h1>
      <p>In this, school user can assign the homework of any subject to the class. You will select the branch, class, section, subject, and date, then the file and the appropriate homework detail. It will provide a list of all the homework that you can view. You can also search by branch name, class, and date, and it will display the data according on the search filters.</p>
      <img src="/img/Add-Home-Work.png" className='img-fluid' alt="Add-Home-Work" />
    </div>
  )
}
