import React from 'react'
import { Helmet } from 'react-helmet';

export default function Withdraw() {
  return (
    <div className='container'>
      <Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Withdraw" />
        <meta property="og:description" content="If you want to withdraw any staff from school, you may do so by searching the staff by ID and then entering the reason for withdrawal. After you withdraw that staff, it will be removed from the staff list" />
        <meta property="og:image" content="https://capobrain.com/img/Add-Feedback.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-withdraw" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Withdraw" />
        <meta name="twitter:description" content="If you want to withdraw any staff from school, you may do so by searching the staff by ID and then entering the reason for withdrawal. After you withdraw that staff, it will be removed from the staff list" />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Feedback.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-withdraw",
            "name": "Capobrain",
            "description": "If you want to withdraw any staff from school, you may do so by searching the staff by ID and then entering the reason for withdrawal. After you withdraw that staff, it will be removed from the staff list" ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-withdraw" />
        <meta name="description" content="If you want to withdraw any staff from school, you may do so by searching the staff by ID and then entering the reason for withdrawal. After you withdraw that staff, it will be removed from the staff list" />
      </Helmet>
<h2 className='manual-h1'>Staff Withdraw</h2>
<p>If you want to withdraw any staff from school, you may do so by searching the staff by ID and then entering the reason for withdrawal. After you withdraw that staff, it will be removed from the staff list and it will show you a list of all withdraw staff with reasons.</p>
     <img src="/img/Add-Feedback.avif" className='img-fluid' alt="Add-Feedback" /> 
    </div>
  )
}
