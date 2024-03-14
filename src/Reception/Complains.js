import React from "react";
import { Helmet } from 'react-helmet';

export default function Complains() {
  return (
    <div className="container">
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Online Complains list" />
        <meta property="og:description" content="The online complaints list submodule can receive all complaints received over the website. There is a separate website module through which every school can develop their own website" />
        <meta property="og:image" content="https://capobrain.com/img/Complains-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/online-complains-list" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Online Complains list" />
        <meta name="twitter:description" content="The online complaints list submodule can receive all complaints received over the website. There is a separate website module through which every school can develop their own website" />
        <meta name="twitter:image" content="https://capobrain.com/img/Complains-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/online-complains-list",
            "name": "Capobrain",
            "description": "The online complaints list submodule can receive all complaints received over the website. There is a separate website module through which every school can develop their own website" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/online-complains-list" />
        <meta name="description" content="The online complaints list submodule can receive all complaints received over the website. There is a separate website module through which every school can develop their own website" />
      </Helmet>

      <h1 className='manual-h1'>Online Complains List</h1>
      <p>The online complaints list submodule can receive all complaints received over the website. There is a separate website module through which every school can develop their own website by adding content such as about, gallery, events, and so on. When you see the website, there will be an option for complaints, and anyone may add a complaint, which will be displayed on the online complain list submodule, where you can simply view the name, email, contact, or description.</p>
      <img src="/img/Complains-Detail.png" className="img-fluid" alt="Complains-Detail" />
    </div>
  );
}
