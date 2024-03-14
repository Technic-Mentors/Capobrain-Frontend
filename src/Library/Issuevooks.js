import React from 'react'
import { Helmet } from 'react-helmet';

export default function Issuevooks() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Issue Books" />
        <meta property="og:description" content="This module is for issue book to the students. You must first search for the student using their ID, after which you may choose the book you want to issue and the data for that book will instantly load." />
        <meta property="og:image" content="https://capobrain.com/img/Issue-Library-Book.jpg" />
        <meta property="og:url" content="https://capobrain.com/user-manual/issue-books" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Issue Books" />
        <meta name="twitter:description" content="This module is for issue book to the students. You must first search for the student using their ID, after which you may choose the book you want to issue and the data for that book will instantly load." />
        <meta name="twitter:image" content="https://capobrain.com/img/Issue-Library-Book.jpg" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/issue-books",
            "name": "Capobrain",
            "description": "This module is for issue book to the students. You must first search for the student using their ID, after which you may choose the book you want to issue and the data for that book will instantly load." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/issue-books" />
        <meta name="description" content="This module is for issue book to the students. You must first search for the student using their ID, after which you may choose the book you want to issue and the data for that book will instantly load." />
      </Helmet>

      <h1 className='manual-h1'>Issue Books</h1>
      <p>This module is for issue book to the students. You must first search for the student using their ID, after which you may choose the book you want to issue and the data for that book will instantly load. More than one quantity can be added before choosing the issue or return date. You will be given a detailed list of all the issue books. It has an impact on the number of books as well. There is also the option to "return the book," where you can choose the branch, student, or book name, after which the data for the book will load and you can then enter the information.</p>
      <img src="/img/Issue-Library-Book.jpg" className='img-fluid' alt="Issue-Library-Book" />
    </div>
  )
}
