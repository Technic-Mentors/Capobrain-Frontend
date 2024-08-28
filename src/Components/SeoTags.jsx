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
        if (pathname === "/") {
            setName("Home")
            setTitle("Best Educational Institutes Management System - Capobrain")
            setUrl("https://capobrain.com/")
            setImg("https://capobrain.com/img/about%20capobrain.png")
            setDescription("CapoBrain is a versatile Education Management System that simplifies administrative tasks and facilitates communication between educators, staff, and parents..")
        } else if (pathname === "/about") {
            setName("About")
            setTitle("About Us - Best Educational Institutes Management Software")
            setUrl("https://capobrain.com/about")
            setImg("https://capobrain.com/img/education.png")
            setDescription("The system's financial management tools enable educational institutions to monitor expenses, income, and budgets, facilitating well-informed financial decis..")
        } else if (pathname === "/features") {
            setName("Features")
            setTitle("Features Of Best Educational Institutes Management Software")
            setUrl("https://capobiz.com/features")
            setImg("https://capobrain.com/img/about%20us.png")
            setDescription("Discover the innovative features that set Capobrain apart as a leading Education Management System (EMS). From streamlined enrollment and automated attendance..")
        } else if (pathname === "/user-manual/dashboard") {
            setName("User Manual")
            setTitle("User Manual For Capobrain institute Management Software")
            setUrl("https://capobrain.com/user-manual/dashboard")
            setImg("https://capobrain.com/img/dash.jpg")
            setDescription("Explore the User Manual for Capobrain School Management Software. Access detailed guides on features, administration, and effective use of the system.")
        } else if (pathname === "/help") {
            setName("Help")
            setTitle("Capobrain Help Info")
            setUrl("https://capobrain.com/help")
            setImg("https://capobrain.com/static/media/help-img.e98695db018ac2bee340.avif")
            setDescription("Visit Capobrain Help Center for guides and support on school management software, including troubleshooting, administration, and live reporting.")
        } else if (pathname === "/blog") {
            setName("Blog")
            setTitle("Blogs - Capobrain")
            setUrl("https://capobrain.com/blog")
            setDescription("Discover blogs on school management, live reporting, and educational tech with Capobrain School Management Software. Stay updated with the latest trends.")
        } else if (pathname === "/faqs") {
            setName("FAQ'S")
            setTitle("FAQ's - CapoBrain")
            setUrl("https://capobrain.com/faqs")
            setDescription("Get answers about Capobrain School Management System. Learn how our software streamlines school administration and enhances real-time reporting.")
        } else if (pathname === "/contact") {
            setName("Contact")
            setTitle("Get In Touch With Us - CapoBrain")
            setUrl("https://capobrain.com/contact")
            setDescription("Connect with Capobrain for a demo of our advanced Education Management System. Use our contact form for inquiries. Elevate your institution with streamlined..")
        }
    }, [pathname])
    return (
        <>
            <Helmet>
                <title>{title}</title>
                {/* open grapgh tag */}
                <meta property="og:title" content={name} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />

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
                <meta name="description" content={description} />
            </Helmet>
        </>
    )
}
