import React from 'react'
import { Helmet } from 'react-helmet';

export default function Confisalary() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Configure Salary" />
        <meta property="og:description" content="This module is to configure salaries for employees. This system likely includes fields for allowances, which are additional monetary benefits provided to employees" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Salary.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/configure-salary" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Configure Salary" />
        <meta name="twitter:description" content="This module is to configure salaries for employees. This system likely includes fields for allowances, which are additional monetary benefits provided to employees" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Salary.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/configure-salary",
            "name": "Capobrain",
            "description": "This module is to configure salaries for employees. This system likely includes fields for allowances, which are additional monetary benefits provided to employees" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/configure-salary" />
        <meta name="description" content="This module is to configure salaries for employees. This system likely includes fields for allowances, which are additional monetary benefits provided to employees" />
      </Helmet>

      <h1 className='manual-h1'>Configure Salary</h1>
      <p>This module is to configure salaries for employees. This system likely includes fields for allowances, which are additional monetary benefits provided to employees along with their base salary. You will choose the employee and then enter all the salary detail and at the end you will choose with effect date. Next time salary cycle works according to the selected with effect date.</p>
      <img src="/img/Add-Salary.png" className='img-fluid' alt="Add-Salary" />
    </div>
  )
}
