import React from 'react'
import { Helmet } from 'react-helmet';

export default function Staff() {
  return (
    <div className='container'>
<Helmet>
        {/* open grapgh tag */}
        <meta property="og:title" content="Staff Account" />
        <meta property="og:description" content="When we add a teacher, we will generate staff accounts. In the student account, you have two options: payment deposit or payment withdraw. To add payment, you must first look for a staff member by ID." />
        <meta property="og:image" content="https://capobrain.com/img/Staff-Account-Detail.png" />
        <meta property="og:url" content="https://capobrain.com/user-manual/staff-account" />
        <meta property="og:type" content="website" />

        {/* twitter card  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BrainCapo" />
        <meta name="twitter:title" content="Staff Account" />
        <meta name="twitter:description" content="When we add a teacher, we will generate staff accounts. In the student account, you have two options: payment deposit or payment withdraw. To add payment, you must first look for a staff member by ID." />
        <meta name="twitter:image" content="https://capobrain.com/img/Staff-Account-Detail.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://capobrain.com/user-manual/staff-account",
            "name": "Capobrain",
            "description": "When we add a teacher, we will generate staff accounts. In the student account, you have two options: payment deposit or payment withdraw. To add payment, you must first look for a staff member by ID." ,
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

        <link rel="canonical" href="https://capobrain.com/user-manual/staff-account" />
        <meta name="description" content="When we add a teacher, we will generate staff accounts. In the student account, you have two options: payment deposit or payment withdraw. To add payment, you must first look for a staff member by ID." />
      </Helmet>

      <h1 className='manual-h1'>Staff Account</h1>
      <p>When we add a teacher, we will generate staff accounts. In the student account, you have two options: payment deposit or payment withdraw. To add payment, you must first look for a staff member by ID. This will load the data for the employee, such as salaries, inventory transactions, and outstanding balances. When viewing the account, you will notice the following columns: transaction invoice, Date, Salary, Inventory, Arears, Payable, Paid amount, payment methods, and transaction type. The salary bill amount will be displayed in the salary column, and the inventory bill amount will be displayed in the inventory column. The Arears columns will display the prior balance. For example, in the first transaction, the payable amount is 1000 and the paid amount is also 1000, so the balance is zero because the balance will be presented while we subtract the paid amount from the payable amount, thus the arear will be zero in the following transaction because the last balance is zero. Employees can also deposit money and withdraw money. Every transaction will be recorded. The school can see the staff account, and the personnel can see their account on their portal.</p>
      <img src="/img/Staff-Account-Detail.avif" className='img-fluid' alt="Staff-Account-Detail" />
    </div>
  )
}
