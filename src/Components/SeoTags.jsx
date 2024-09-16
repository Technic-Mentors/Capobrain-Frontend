import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

export default function SeoTags() {
    const { pathname } = useLocation()
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        switch (pathname) {
            case "/":
                setName("Home")
                setTitle("Best School/College Management Software - Capobrain")
                setUrl("https://capobrain.com/")
                setImg("https://capobrain.com/img/about%20capobrain.png")
                setDescription("CapoBrain simplifies school and college management, streamlining administration and enhancing communication between educators, staff, and parents.")
                break;
            case "/about":
                setName("About")
                setTitle("The Leading School Management System - Capobrain")
                setUrl("https://capobrain.com/about/")
                setImg("https://capobrain.com/img/education.png")
                setDescription("Learn about Capobrain, a top school management system designed to streamline school operations and enhance student success.")
                break;
            case "/features":
                setName("Features")
                setTitle("Comprehensive School Software Features - Capobrain")
                setUrl("https://capobrain.com/features/")
                setImg("https://capobrain.com/img/about%20us.png")
                setDescription("Explore comprehensive features of Capobrain's school software, designed to streamline administration, enhance learning, and improve overall school efficiency.")
                break;
            case "/user-manual/dashboard":
                setName("User Manual")
                setTitle("Our Detailed Software User Manual - Capobrain")
                setUrl("https://capobrain.com/user-manual/dashboard/")
                setImg("https://capobrain.com/img/dash.jpg")
                setDescription("Explore Capobrain's user manual for easy guidance on using our School Management Software. Get tips, instructions, and support for smooth operations.")
                break;
            case "/help":
                setName("Help")
                setTitle("Capobrain Help Center")
                setUrl("https://capobrain.com/help/")
                setImg("https://capobrain.com/static/media/help-img.e98695db018ac2bee340.avif")
                setDescription("Visit Capobrain Help Center for guides and support on school management software, including troubleshooting, administration, and live reporting.")
                break;
            case "/blog":
                setName("Blog")
                setTitle("Blogs - Capobrain")
                setUrl("https://capobrain.com/blog/")
                setDescription("Discover blogs on school management, live reporting, and educational tech with Capobrain School Management Software. Stay updated with the latest trends.")
                break;
            case "/faqs":
                setName("FAQ'S")
                setTitle("FAQ's - CapoBrain")
                setUrl("https://capobrain.com/faqs/")
                setDescription("Get answers about Capobrain School Management System. Learn how our software streamlines school administration and enhances real-time reporting.")
                break;
            case "/contact":
                setName("Contact")
                setTitle("Get In Touch With Us - CapoBrain")
                setUrl("https://capobrain.com/contact/")
                setDescription("Get in touch with Capobrain team for a demo of our advanced Education Management System. Use our contact form for inquiries.")
                break;
            default:
                setName("CapoBrain")
                setTitle("Best School/College Management Software - Capobrain")
                setUrl("https://capobrain.com/")
                setImg("https://capobrain.com/img/about%20capobrain.png")
                setDescription("CapoBrain simplifies school and college management, streamlining administration and enhancing communication between educators, staff, and parents.")
                break;
        }
    }, [pathname])
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='title' content={title} />
                <meta name="description" content={description} />
                {/* open grapgh tag */}
                <meta property="og:title" content={name} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content='website' />

                {/* twitter card  */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Capobrain" />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={img} />

                {/* Schema.org structured data */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": url,
            "name": "Capobrain",
            "description": description ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technicmentors.com/search?q={search_term_string}",
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
                <link rel="canonical" href={url} />
            </Helmet>
        </>
    )
}
