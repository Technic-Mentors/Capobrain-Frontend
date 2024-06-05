import React from "react";
import { Helmet } from 'react-helmet';

export default function Dashboard() {
  return (
    <div className="container">
      <Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Dashboard" />
        <meta property="og:description" content="After logging in successfully, a dashboard will appear representing all the importing highlights regarding the school. We can filter this information by choosing the school branch." />
        <meta property="og:image" content="https://capobrain.com/img/dash.jpg" />
        <meta property="og:url" content="https://capobrain.com/user-manual/dashboard" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Dashboard" />
        <meta name="twitter:description" content="After logging in successfully, a dashboard will appear representing all the importing highlights regarding the school. We can filter this information by choosing the school branch." />
        <meta name="twitter:image" content="https://capobrain.com/img/dash.jpg" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/dashboard",
            "name": "Capobrain",
            "description": "After logging in successfully, a dashboard will appear representing all the importing highlights regarding the school. We can filter this information by choosing the school branch." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/dashboard" />
        <meta name="description" content="After logging in successfully, a dashboard will appear representing all the importing highlights regarding the school. We can filter this information by choosing the school branch." />
      </Helmet>

      <h1>Dashboard </h1>
      <p>
        After logging in successfully, a dashboard will appear representing all
        the importing highlights regarding the school. We can filter this
        information by choosing the school branch. The dashboard represents the
        overall stats of the student, staff and the school. We can also have a
        look at the user logged-in from the top right corner of the screen, we
        can also change the password and use it Log out. The CapoBrain Dashboard
        has all the useful and necessary information for a system user.
        Following information is listed on our online school management system
        on login:
      </p>
      <ul>
        <li>No of Students / Staff </li>
        <li>Student Account Stats </li>
        <li>Staff Account Stats</li>
        <li>Inventory Stats</li>
        <li>Profit / Loss</li>
        <li>Attendances / Birthdays</li>
      </ul>
      <img
        src="/img/dash.avif"
        className="img-fluid"
        alt="school management software"
      />
    </div>
  );
}
