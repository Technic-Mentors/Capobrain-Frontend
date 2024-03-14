import React from "react";
import { Helmet } from 'react-helmet';

export default function Onlineadmissions() {
  return (
    <div className="container">
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Online admissions" />
        <meta property="og:description" content="This module displays a list of all students who applied online in the online admission submodule. The online admission submodule can receive all admission received over the website. " />
        <meta property="og:image" content="https://capobrain.com/img/Online-Admission.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/online-admissions" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Online admissions" />
        <meta name="twitter:description" content="This module displays a list of all students who applied online in the online admission submodule. The online admission submodule can receive all admission received over the website. " />
        <meta name="twitter:image" content="https://capobrain.com/img/Online-Admission.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/online-admissions",
            "name": "Capobrain",
            "description": "This module displays a list of all students who applied online in the online admission submodule. The online admission submodule can receive all admission received over the website. " ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/online-admissions" />
        <meta name="description" content="This module displays a list of all students who applied online in the online admission submodule. The online admission submodule can receive all admission received over the website. " />
      </Helmet>

      <h1 className='manual-h1'>Online Admissions</h1>
      <p>
        This module displays a list of all students who applied online in the
        online admission submodule. The online admission submodule can receive
        all admission received over the website. There is a separate website
        module through which every school can develop their own website by
        adding content such as about, gallery, events, and so on. When you see
        the website, there will be an option for admissions, and anyone may
        apply for admission, which will be displayed on the online complain list
        submodule You can simply enter some basic information on the website,
        and when we see the list, there is an edit option; when we click on it,
        the right admission form is displayed, and the student is added to the
        student list.
      </p>
      <img src="/img/Online-Admission.png" className="img-fluid" alt="Online-Admission" />
    </div>
  );
}
