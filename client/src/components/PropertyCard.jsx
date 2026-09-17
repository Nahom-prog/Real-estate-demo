export default function PropertyCard({
    image,
    status,
    price,
    location,
    title,
    desc,
    beds,
    baths,
    sqft
}) {
    return (
        <div className="prop-card">
            {/* Image with badges */}
            <div className="prop-img-box">
                <img src={image} alt={title} />
                <span className="prop-tag">{status}</span>
                <span className="prop-price">{price}</span>
            </div>

            {/* Details */}
            <div className="prop-content">
                <div className="prop-location">
                    <svg className="location-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    {location}
                </div>

                <h3 className="prop-title">{title}</h3>
                <p className="prop-desc">{desc}</p>

                {/* 3 Specs */}
                <div className="prop-specs">
                    <div className="spec-item">
                        <span className="spec-label">BEDROOMS</span>
                        <span className="spec-val">{beds}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">BATHROOMS</span>
                        <span className="spec-val">{baths}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">LIVING SPACE</span>
                        <span className="spec-val">{sqft}</span>
                    </div>
                </div>

                {/* View Details Button */}
                <div className="prop-footer">
                    <button className="prop-link-btn">
                        View Home Details
                        <svg className="btn-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
