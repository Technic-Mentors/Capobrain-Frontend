import React from 'react'
import { Helmet } from 'react-helmet';

export default function Chat() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Dashboard" />
        <meta property="og:description" content="Undoubtedly, this module will be utilized for communication, but it will be between school users and their parents. The proper chat room is this one." />
        <meta property="og:image" content="https://capobrain.com/img/Chats.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/chat" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Dashboard" />
        <meta name="twitter:description" content="Undoubtedly, this module will be utilized for communication, but it will be between school users and their parents. The proper chat room is this one." />
        <meta name="twitter:image" content="https://capobrain.com/img/Chats.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/chat",
            "name": "Capobrain",
            "description": "Undoubtedly, this module will be utilized for communication, but it will be between school users and their parents. The proper chat room is this one." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/chat" />
        <meta name="description" content="Undoubtedly, this module will be utilized for communication, but it will be between school users and their parents. The proper chat room is this one." />
      </Helmet>

      <h2 className='manual-h1'>Chat</h2>
      <p>Undoubtedly, this module will be utilized for communication, but it will be between school users and their parents. The proper chat room is this one. There is a chat feature on the parent portal that allows parents to send messages to the school. The school will receive the relevant message with the parent's name and answer appropriately.</p>
      <img src="/img/Chats.avif" className='img-fluid' alt="Chats" />
    </div>
  )
}
