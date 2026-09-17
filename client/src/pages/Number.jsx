import { useState, useEffect, useRef } from "react";

// Reusable Counter that counts up when scrolled into view
function Counter({ end, duration = 2000, decimals = 0, suffix = "" }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        // Triggers only when user scrolls down to this element
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);

                const startTime = performance.now();

                const animate = (now) => {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Smooth ease-out effect (starts fast, slows down at the end)
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    setCount(easeOut * end);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
            }
        }, { threshold: 0.2 });

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [hasAnimated, end, duration]);

    return (
        <span ref={elementRef}>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
}

export default function Number() {
    return (
        <section className="number-wrapper">
            <div className="number-container">
                <div className="descriptions">
                    <span className="track-sub">Our Track Record</span>
                    <h1>Numbers You Can Trust</h1>
                    <p>We hold ourselves to the highest standards, ensuring peace of mind for homeowners and residents alike.</p>
                </div>

                <div className="stats">
                    <div className="stat">
                        <span className="num">
                            <Counter end={99.4} decimals={1} suffix="%" />
                        </span>
                        <span className="label">Occupancy Rate</span>
                    </div>

                    <div className="stat">
                        <span className="num">
                            <Counter end={250} decimals={0} suffix="+" />
                        </span>
                        <span className="label">Properties Sold</span>
                    </div>

                    <div className="stat">
                        <span className="num">24/7</span>
                        <span className="label">Support & Maintenance</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
