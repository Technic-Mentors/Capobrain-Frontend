import React from 'react'
import { Helmet } from 'react-helmet';

export default function News() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Dashboard" />
        <meta property="og:description" content="News and notices are the two submodules that make up the announcement module. You can add any news from the school for everyone in the news submodule." />
        <meta property="og:image" content="https://capobrain.com/img/Add-News.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/news" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Dashboard" />
        <meta name="twitter:description" content="News and notices are the two submodules that make up the announcement module. You can add any news from the school for everyone in the news submodule." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-News.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/news",
            "name": "Capobrain",
            "description": "News and notices are the two submodules that make up the announcement module. You can add any news from the school for everyone in the news submodule." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/news" />
        <meta name="description" content="News and notices are the two submodules that make up the announcement module. You can add any news from the school for everyone in the news submodule." />
      </Helmet>

      <h1 className='manual-h1'>News</h1>
      <p>News and notices are the two submodules that make up the announcement module. You can add any news from the school for everyone in the news submodule. The news will be presented to everyone on their portal when you enter the title, link, date, added by, and description. Any news can be seen, changed, or removed whenever you like.  </p>
      <img src="/img/Add-News.png" className='img-fluid' alt="Add-News" />
    </div>
  )
}
