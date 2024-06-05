import React from 'react'
import { Helmet } from 'react-helmet';

export default function Witdraw() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Withdraw Students" />
        <meta property="og:description" content="If you want to withdraw any student from school, you may do so by searching the student by ID and then entering the reason for withdrawal. After you withdraw that student," />
        <meta property="og:image" content="https://capobrain.com/img/Add-Withdraw-Student.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/withdraw-students" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Withdraw Students" />
        <meta name="twitter:description" content="If you want to withdraw any student from school, you may do so by searching the student by ID and then entering the reason for withdrawal. After you withdraw that student," />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Withdraw-Student.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/withdraw-students",
            "name": "Capobrain",
            "description": "If you want to withdraw any student from school, you may do so by searching the student by ID and then entering the reason for withdrawal. After you withdraw that student," ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/withdraw-students" />
        <meta name="description" content="If you want to withdraw any student from school, you may do so by searching the student by ID and then entering the reason for withdrawal. After you withdraw that student," />
      </Helmet>

<h1 className='manual-h1'>Withdraw Students</h1>
<p>If you want to withdraw any student from school, you may do so by searching the student by ID and then entering the reason for withdrawal. After you withdraw that student, it will be removed from the student list and it will show you a list of all withdraw student with reasons.</p>
 <img src="/img/Add-Withdraw-Student.avif" className='img-fluid' alt="Add-Withdraw-Student" />  
</div>
  )
}