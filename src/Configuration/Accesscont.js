import React from "react";
import { Helmet } from 'react-helmet';

export default function Accesscont() {
  return (
    <div className="container">
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Access Control" />
        <meta property="og:description" content="Access control is a key component of data security that governs who has access to and uses which modules and resources. Access control limits access to specified modules" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Access-Control.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/access-control" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Access Control" />
        <meta name="twitter:description" content="Access control is a key component of data security that governs who has access to and uses which modules and resources. Access control limits access to specified modules" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Access-Control.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/access-control",
            "name": "Capobrain",
            "description": "Access control is a key component of data security that governs who has access to and uses which modules and resources. Access control limits access to specified modules" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/access-control" />
        <meta name="description" content="Access control is a key component of data security that governs who has access to and uses which modules and resources. Access control limits access to specified modules" />
      </Helmet>

      <h1 style={{ color: "#FAC400" }}>Access Control</h1>
      <p>Access control is a key component of data security that governs who has access to and uses which modules and resources. Access control limits access to specified modules to specific people based on their jobs. In this section, you will pick the role and then check the modules that you want to give to the selected role so that the specific individual cannot access any other modules besides their allocated one.</p>
      <img src="/img/Add-Access-Control.png" className="img-fluid" alt="Add-Access-Control" />
    </div>
  );
}
