import React from 'react'
import { Helmet } from 'react-helmet';

export default function Salarypaid() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Salary Paid" />
        <meta property="og:description" content="A salary paid report is a document or record that offers a summary of the salaries or wages paid to employees for a certain time period, usually on a monthly basis." />
        <meta property="og:image" content="https://capobrain.com/img/Salary-Paid.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/salary-paid" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Salary Paid" />
        <meta name="twitter:description" content="A salary paid report is a document or record that offers a summary of the salaries or wages paid to employees for a certain time period, usually on a monthly basis." />
        <meta name="twitter:image" content="https://capobrain.com/img/Salary-Paid.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/salary-paid",
            "name": "Capobrain",
            "description": "A salary paid report is a document or record that offers a summary of the salaries or wages paid to employees for a certain time period, usually on a monthly basis." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/salary-paid" />
        <meta name="description" content="A salary paid report is a document or record that offers a summary of the salaries or wages paid to employees for a certain time period, usually on a monthly basis." />
      </Helmet>

    <h1 className='manual-h1'>Salary Paid</h1>
    <p>A salary paid report is a document or record that offers a summary of the salaries or wages paid to employees for a certain time period, usually on a monthly basis. This report is an important part of a company's payroll and financial management. This report will show you your monthly salary, withdrawal amount, and balance. You can look up a branch by name or by date.</p>
    <img src="/img/Salary-Paid.avif" className='img-fluid' alt="Salary-Paid" />
  </div>
  )
}
