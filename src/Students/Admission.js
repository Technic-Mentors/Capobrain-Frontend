import React from 'react'
import { Helmet } from 'react-helmet';

export default function Admission() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="New Admission" />
        <meta property="og:description" content="There is a form for student admission and there is an option to enter personal details, family details, guardian details and so on. First of all you have to add fee structure," />
        <meta property="og:image" content="https://capobrain.com/img/New-Admission.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/new-admission" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="New Admission" />
        <meta name="twitter:description" content="There is a form for student admission and there is an option to enter personal details, family details, guardian details and so on. First of all you have to add fee structure," />
        <meta name="twitter:image" content="https://capobrain.com/img/New-Admission.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/new-admission",
            "name": "Capobrain",
            "description": "There is a form for student admission and there is an option to enter personal details, family details, guardian details and so on. First of all you have to add fee structure," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/new-admission" />
        <meta name="description" content="There is a form for student admission and there is an option to enter personal details, family details, guardian details and so on. First of all you have to add fee structure," />
      </Helmet>

<h1 className='manual-h1'>New Admission</h1>
<p>There is a form for student admission and there is an option to enter personal details, family details, guardian details and so on. First of all you have to add fee structure, classes and section in the configuration module than you can input all of the student details step by step, and in the last step, you will select which class the student wants to admission in and there is also an option fee structure type like you want to add fee structure monthly or annually, and when we click the submit button, it will display you the student ID that the student will use to connect to their portal, and this will be unique for all of the students.
</p>
<ul>
  <li>
First, Fee Structure, classes, and section to the configuration module.</li>
  <li>
Format! Image Format Must Be JPG, JPEG or PNG.</li>
  <li>
Image size should be less than or equal to 100 KB.</li>
  <li>
Document Format! Image Format Must Be JPG, JPEG, PDF or PNG.</li>
  <li>
The file size required in the instructor document area is less than or equal to 300 KB.</li>
</ul>
     <img src="/img/New-Admission.avif" className='img-fluid' alt="New-Admission" />  
    </div>
  )
}
