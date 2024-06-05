import React from "react";
import { Helmet } from 'react-helmet';

export default function Visitors() {
  return (
    <div className="container">
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Visitors Meeting" />
        <meta property="og:description" content="In the visitors meeting module, there are two options: meeting with staff or meeting with students. First and foremost, you can see that we need staff or students to add the meeting," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Visitors-Meeting.jpg" />
        <meta property="og:url" content="https://capobrain.com/user-manual/visitors-meeting" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Visitors Meeting" />
        <meta name="twitter:description" content="In the visitors meeting module, there are two options: meeting with staff or meeting with students. First and foremost, you can see that we need staff or students to add the meeting," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Visitors-Meeting.jpg" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/visitors-meeting",
            "name": "Capobrain",
            "description": "In the visitors meeting module, there are two options: meeting with staff or meeting with students. First and foremost, you can see that we need staff or students to add the meeting," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/visitors-meeting" />
        <meta name="description" content="In the visitors meeting module, there are two options: meeting with staff or meeting with students. First and foremost, you can see that we need staff or students to add the meeting," />
      </Helmet>

      <h1 className='manual-h1'>Visitors Meeting</h1>
      <p>
        In the visitors meeting module, there are two options: meeting with
        staff or meeting with students. First and foremost, you can see that we
        need staff or students to add the meeting, so you must first add staff
        from the Teaching Staff module and students from the New Admission
        module because to add the meeting detail, you must search the staff or
        student through ID, and that ID you will receive when you add teacher or
        student it will show you the ID that you will use in visitors meeting to
        search the student. You must fill out the meeting information. First,
        add the meeting purpose via the configure front office submodule, and
        then fill out all of the mandatory fields for visitors meetings. Red
        star sign with field’s names are mandatory fields that must be filled
        out and non-mandatory fields are option. If you do not fill out any
        mandatory entries, you will receive an alert. For example, in the
        visitors meeting module, the student name and meeting purpose fields are
        mandatory. You must go through the same procedure when meeting with
        staff.
      </p>

      <ul>
        <li>Add a Teacher or Student First</li>
        <li>
          Configure the meeting purpose from the configure front office
          submodule
        </li>
        <li>Fill up all mandatory fields</li>
        <li>Non-mandatory fields are optional and can be skipped</li>
      </ul>

      <img src="/img/Add-Visitors-Meeting.avif" className="img-fluid" alt="Add-Visitors-Meeting" />
    </div>
  );
}
