import React from 'react'
import { Helmet } from 'react-helmet';

export default function Librarybook() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Library Books" />
        <meta property="og:description" content="In this module you will add all the books of the library. You will add book name, author, Book library No, Price and quantity. You can view, edit and delete any book any time." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Book.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/dashboard" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Library Books" />
        <meta name="twitter:description" content="In this module you will add all the books of the library. You will add book name, author, Book library No, Price and quantity. You can view, edit and delete any book any time." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Book.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/dashboard",
            "name": "Capobrain",
            "description": "In this module you will add all the books of the library. You will add book name, author, Book library No, Price and quantity. You can view, edit and delete any book any time." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/library-books" />
        <meta name="description" content="In this module you will add all the books of the library. You will add book name, author, Book library No, Price and quantity. You can view, edit and delete any book any time." />
      </Helmet>

      <h1 className='manual-h1'>Library Books</h1>
      <p>In this module you will add all the books of the library. You will add book name, author, Book library No, Price and quantity. You can view, edit and delete any book any time. You can’t add same book twice. It will show you the list of all the books of the library.</p>
      <img src="/img/Add-Book.png" className='img-fluid' alt="Add-Book" />
    </div>
  )
}
