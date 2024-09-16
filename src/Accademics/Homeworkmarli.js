import React from 'react'
import { Helmet } from 'react-helmet';

export default function Homeworkmarli() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Homework Marking List" />
        <meta property="og:description" content="In homework marking list, you can easily view the marking of any subject and it will also generate the result card. When you will click on view button there will be an edit button too" />
        <meta property="og:image" content="https://capobrain.com/img/Summer-Vacation-Homework-Marking-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/home-work-marking-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Homework Marking List" />
        <meta name="twitter:description" content="In homework marking list, you can easily view the marking of any subject and it will also generate the result card. When you will click on view button there will be an edit button too" />
        <meta name="twitter:image" content="https://capobrain.com/img/Summer-Vacation-Homework-Marking-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/home-work-marking-list",
            "name": "Capobrain",
            "description": "In homework marking list, you can easily view the marking of any subject and it will also generate the result card. When you will click on view button there will be an edit button too" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/home-work-marking-list" />
        <meta name="description" content="In homework marking list, you can easily view the marking of any subject and it will also generate the result card. When you will click on view button there will be an edit button too" />
      </Helmet>

      <h2 className='manual-h1'>Homework Marking List</h2>
      <p>In homework marking list, you can easily view the marking of any subject and it will also generate the result card. When you will click on view button there will be an edit button too so which you can easily change the marks of any subject and students & parents can also view result card on their portal.</p>
      <img src="/img/Summer-Vacation-Homework-Marking-Detail.avif" className='img-fluid' alt="Summer-Vacation-Homework-Marking-List" />
    </div>
  )
}
