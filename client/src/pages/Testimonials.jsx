export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="testimonials-wrapper">
                {/* Section Header */}
                <div className="testimonials-header">
                    <span className="testimonials-badge">CLIENT EXPERIENCES</span>
                    <h2 className="testimonials-title">What Our Clients Say</h2>
                    <p className="testimonials-subtitle">
                        Read verified reviews from discerning homeowners, tenants, and global property investors.
                    </p>
                </div>

                {/* 3 Review Cards */}
                <div className="testimonials-grid">
                    {/* Card 1 */}
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p className="quote">
                            "Haleta Properties managed the lease of my Tribeca penthouse with complete professionalism. 
                            Zero vacancy, vetted executive tenants, and effortless communication."
                        </p>
                        <div className="client-info">
                            <h4 className="client-name">Marcus Vance</h4>
                            <span className="client-role">Penthouse Owner, New York</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p className="quote">
                            "Finding our private villa in Trousdale Estates was seamless. Their off-market network 
                            gave us exclusive access to estates that never even hit public listings."
                        </p>
                        <div className="client-info">
                            <h4 className="client-name">Elena Rostova</h4>
                            <span className="client-role">Private Homeowner, Beverly Hills</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p className="quote">
                            "Their data-driven investment advisory helped us acquire two waterfront multi-units in Miami. 
                            Their yield projections were accurate down to the decimal."
                        </p>
                        <div className="client-info">
                            <h4 className="client-name">David Chen</h4>
                            <span className="client-role">Real Estate Investor, Miami</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
