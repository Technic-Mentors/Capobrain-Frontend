import React, { useEffect, useState } from 'react'

export default function ChooseUs() {
    const [screen, setScreen] = useState("")
    useEffect(() => {
        if (window.innerWidth > 600) {
            setScreen(4)
        } else {
            setScreen(5)
        }
    }, [])
    return (
        <div>
            <div className="container mt-4 mb-5">
                <h2 className='text-center mb-5'>Why Choose Us?</h2>
                <div className={`row g-${screen} chooseSection text-center`}>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <i className='fas fa-arrow-right'></i>
                                <h3 className='mt-3 seo-heading-h3'>Proven Track Record</h3>
                                <p>Our school and college management software has been trusted by 50+ institutions worldwide, helping them streamline operations and enhance educational outcomes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <i className='fas fa-arrow-right'></i>
                                <h3 className='mt-3 seo-heading-h3'>User Satisfaction</h3>
                                <p>100% of our users report high satisfaction with our software, citing its user-friendly interface, comprehensive features, and reliability as key reasons for their satisfaction.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <i className='fas fa-arrow-right'></i>
                                <h3 className='mt-3 seo-heading-h3'>Efficiency Boost</h3>
                                <p>On average, institutions using our software experience a 100% increase in administrative efficiency, allowing staff to focus more on student success and less on paperwork.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-lg-3">
                            <div className="card-body">
                                <i className='fas fa-arrow-right'></i>
                                <h3 className='mt-3 seo-heading-h3'>Cost Savings</h3>
                                <p>By automating routine tasks and reducing administrative overhead, our software has helped institutions save up to 100% on operational costs, making it a cost-effective solution for any budget.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-lg-3">
                            <div className="card-body">
                                <i className='fas fa-arrow-right'></i>
                                <h3 className='mt-3 seo-heading-h3'>Comprehensive Support</h3>
                                <p>We offer 24/7 support, dedicated account managers, etc. to ensure that our clients receive prompt assistance and personalized attention whenever they need it.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-lg-3">
                            <div className="card-body">
                                <i className='fas fa-arrow-right'></i>
                                <h3 className='mt-3 seo-heading-h3'>Customization</h3>
                                <p>We understand that every institution is unique, which is why our software offers customizable modules and flexible configurations to meet the specific requirements and workflows of each client.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
