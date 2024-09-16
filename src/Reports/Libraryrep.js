import React from 'react'
import { Helmet } from 'react-helmet';

export default function Libraryrep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Library Report" />
        <meta property="og:description" content="A library report provides a comprehensive view of book details and the quantity of books issued to students, along with return dates. It allows librarians and administrators" />
        <meta property="og:image" content="https://capobrain.com/img/Library-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/library-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Library Report" />
        <meta name="twitter:description" content="A library report provides a comprehensive view of book details and the quantity of books issued to students, along with return dates. It allows librarians and administrators" />
        <meta name="twitter:image" content="https://capobrain.com/img/Library-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/library-report",
            "name": "Capobrain",
            "description": "A library report provides a comprehensive view of book details and the quantity of books issued to students, along with return dates. It allows librarians and administrators" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/library-report" />
        <meta name="description" content="A library report provides a comprehensive view of book details and the quantity of books issued to students, along with return dates. It allows librarians and administrators" />
      </Helmet>

    <h2 className='manual-h1'>Library Report</h2>
    <p>A library report provides a comprehensive view of book details and the quantity of books issued to students, along with return dates. It allows librarians and administrators to track the status and availability of books in the library, ensuring efficient management of the collection and enabling timely follow-up with students for the return of borrowed items. This report is a valuable module for maintaining an organized and functional library system. This report will show you the book details and their status.</p>
    <img src="/img/Library-Report.avif" className='img-fluid' alt="Library-Report" />
  </div>
  )
}
