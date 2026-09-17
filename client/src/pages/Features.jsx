

import { useRef } from "react";
import PropertyCard from "../components/PropertyCard";

export default function Features() {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        sliderRef.current.scrollBy({ left: -390, behavior: "smooth" });
    };

    const slideRight = () => {
        sliderRef.current.scrollBy({ left: 390, behavior: "smooth" });
    };

    return (
        <section className="feature-section">
            <div className="feature-wrapper">
                <div className="main-title">
                    <div className="feature-sub">curated listings</div>
                    <div className="feature-title">Featured Homes & Apartments</div>
                </div>

                <div className="view-all">
                    <button>View All &rarr;</button>
                </div>
            </div>

            {/* Slider Container with Left & Right Floating Arrows */}
            <div className="carousel-container">
                <button onClick={slideLeft} className="slider-arrow arrow-left" aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* 5 Property Cards in a smooth sliding row */}
                <div className="prop-grid" ref={sliderRef}>
                <PropertyCard
                    image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
                    status="FOR LEASE"
                    price="$38,000 / mo"
                    location="TRIBECA, MANHATTAN"
                    title="The Obsidian Penthouse"
                    desc="Spectacular duplex featuring wraparound landscaped terrace, private keyed elevator, and panoramic skyline views."
                    beds="4 Beds"
                    baths="4.5 Baths"
                    sqft="5,400 Sq Ft"
                />

                <PropertyCard
                    image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
                    status="FOR SALE"
                    price="$24,750,000"
                    location="TROUSDALE ESTATES, BEVERLY HILLS"
                    title="Belvedere Hillside Villa"
                    desc="Mid-century reimagined with seismic engineering, subterranean wellness pavilion, and private motor court."
                    beds="5 Beds"
                    baths="6.5 Baths"
                    sqft="7,820 Sq Ft"
                />

                <PropertyCard
                    image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
                    status="FOR LEASE"
                    price="$52,000 / mo"
                    location="VENETIAN ISLANDS, MIAMI"
                    title="Azure Waterfront Sanctuary"
                    desc="Direct bayfront frontage with 100ft deepwater dockage, full outdoor summer kitchen, and private spa."
                    beds="6 Beds"
                    baths="7 Baths"
                    sqft="8,950 Sq Ft"
                />

                <PropertyCard
                    image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
                    status="FOR SALE"
                    price="$18,900,000"
                    location="MALIBU, CALIFORNIA"
                    title="The Solstice Oceanfront Villa"
                    desc="Architectural masterpiece on private bluffs featuring infinity edge pool, floor-to-ceiling glass, and beach access."
                    beds="5 Beds"
                    baths="6 Baths"
                    sqft="6,200 Sq Ft"
                />

                <PropertyCard
                    image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                    status="FOR LEASE"
                    price="$29,500 / mo"
                    location="GREENWICH VILLAGE, NEW YORK"
                    title="Historic Greenwich Townhouse"
                    desc="Impeccably restored 19th-century brownstone featuring private English garden, wine cellar, and chef's kitchen."
                    beds="4 Beds"
                    baths="4 Baths"
                    sqft="4,800 Sq Ft"
                />
            </div>

            <button onClick={slideRight} className="slider-arrow arrow-right" aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>
        </div>
    </section>
    );
}