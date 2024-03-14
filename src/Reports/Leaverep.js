import React from 'react'
import { Helmet } from 'react-helmet';

export default function Leaverep() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Leave Report" />
        <meta property="og:description" content="A leave report is a document or record that records and summarizes an employee's use of leave or vacation time. It is a useful report for administrators to keep track of time off for various reasons," />
        <meta property="og:image" content="https://capobrain.com/img/Leave-Report.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/leave-report" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Leave Report" />
        <meta name="twitter:description" content="A leave report is a document or record that records and summarizes an employee's use of leave or vacation time. It is a useful report for administrators to keep track of time off for various reasons," />
        <meta name="twitter:image" content="https://capobrain.com/img/Leave-Report.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/leave-report",
            "name": "Capobrain",
            "description": "A leave report is a document or record that records and summarizes an employee's use of leave or vacation time. It is a useful report for administrators to keep track of time off for various reasons," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/leave-report" />
        <meta name="description" content="A leave report is a document or record that records and summarizes an employee's use of leave or vacation time. It is a useful report for administrators to keep track of time off for various reasons," />
      </Helmet>

    <h1 className='manual-h1'>Leave Report</h1>
    <p>A leave report is a document or record that records and summarizes an employee's use of leave or vacation time. It is a useful report for administrators to keep track of time off for various reasons, such as vacations, sick days, personal leave, or other sorts of leave provided by the company. It will display the leave records of both students and employees, including the appropriate date, reason, and status (approved or rejected). Student records will be displayed in student columns, while staff records will be displayed in staff columns.</p>
    <img src="/img/Leave-Report.png" className='img-fluid' alt="Leave-Report" />
  </div>
  )
}
