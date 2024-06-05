import React from 'react'
import { Helmet } from 'react-helmet';

export default function Message() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Messages" />
        <meta property="og:description" content="You can send messages to everyone in this module, including students, teachers, and parents. Therefore, in the message module, you will first select the message subject, message, and date." />
        <meta property="og:image" content="https://capobrain.com/img/Add-Message.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/message" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Messages" />
        <meta name="twitter:description" content="You can send messages to everyone in this module, including students, teachers, and parents. Therefore, in the message module, you will first select the message subject, message, and date." />
        <meta name="twitter:image" content="https://capobrain.com/img/Add-Message.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/message",
            "name": "Capobrain",
            "description": "You can send messages to everyone in this module, including students, teachers, and parents. Therefore, in the message module, you will first select the message subject, message, and date." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/message" />
        <meta name="description" content="You can send messages to everyone in this module, including students, teachers, and parents. Therefore, in the message module, you will first select the message subject, message, and date." />
      </Helmet>

      <h1 className='manual-h1'>Messages</h1>
      <p>You can send messages to everyone in this module, including students, teachers, and parents. Therefore, in the message module, you will first select the message subject, message, and date. Then, you have the option of selecting the recipient of the message. If you select everyone, then the message will be sent to everyone who uses this system. If, however, you only want to send it to a specific individual, such as a teacher or student of a particular class, then you can also select that option. It will provide a list so you can quickly see which message was delivered when and to whom.</p>
      <img src="/img/Add-Message.avif" className='img-fluid' alt="Add-Message" />
    </div>
  )
}
