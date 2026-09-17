import Card from "../components/Card";

export default function Services() {
    const servicesData = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            title: "Luxury & Executive Rentals",
            description: "Explore a hand-picked collection of premium residences, penthouses, and serviced villas ready for effortless move-in.",
            linkText: "Browse Rentals"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
            title: "Complete Property Management",
            description: "From tenant vetting and rent collection to 24/7 maintenance and legal oversight, we care for your investment end-to-end.",
            linkText: "Explore Management"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            title: "Sales & Strategic Acquisitions",
            description: "Gain discreet access to off-market estates and prime properties, backed by expert negotiation and transparent transaction handling.",
            linkText: "View Available Estates"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
            ),
            title: "Portfolio & Asset Advisory",
            description: "Data-backed market yield forecasting, property valuation, and tailored strategies to maximize your long-term capital growth.",
            linkText: "Schedule Consultation"
        }
    ];

    return (
        <section className="service-section">
            <div className="service-container">
                <div className="page-header">
                    <div className="page-title-wrap">
                        <span className="section-badge">SERVICES & EXPERTISE</span>
                        <h2 className="section-heading">Tailored Real Estate Solutions</h2>
                    </div>
                    <div className="page-desc">
                        <p>
                            Discover how our end-to-end services simplify your property journey.
                            Whether you're renting a luxury residence, selling prime estates, or handing over management — we make it seamless.
                        </p>
                    </div>
                </div>

                <div className="card-show">
                    {servicesData.map((item, index) => (
                        <Card
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            linkText={item.linkText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}