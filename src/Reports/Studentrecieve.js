import React from 'react'
import { Helmet } from 'react-helmet';

export default function Studentrecieve() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Student Receiveables" />
        <meta property="og:description" content="Their responsibilities encompass assessing and collecting payments in a precise and timely manner, including the recovery of over dues." />
        <meta property="og:image" content="https://capobrain.com/img/Student-Recieveable.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/student-recieveables" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Student Receiveables" />
        <meta name="twitter:description" content="Their responsibilities encompass assessing and collecting payments in a precise and timely manner, including the recovery of over dues." />
        <meta name="twitter:image" content="https://capobrain.com/img/Student-Recieveable.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/student-recieveables",
            "name": "Capobrain",
            "description": "Their responsibilities encompass assessing and collecting payments in a precise and timely manner, including the recovery of over dues." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/student-recieveables" />
        <meta name="description" content="Their responsibilities encompass assessing and collecting payments in a precise and timely manner, including the recovery of over dues." />
      </Helmet>

    <h1 className='manual-h1'>Student Receiveables</h1>
    <p>The Student Accounts Receivable department plays a pivotal role in managing student fees and expenses. Their responsibilities encompass assessing and collecting payments in a precise and timely manner, including the recovery of over dues. The report offers a comprehensive overview, detailing the names of students, their receivable payments, class information, student particulars, fee breakdown, inventory charges, transportation fees, arrears, and balances. This information streamlines financial tracking and aids in maintaining accurate and efficient financial records for the institution</p>
    <img src="/img/Student-Recieveable.png" className='img-fluid' alt="Student-Recieveable" />
  </div>
  )
}
