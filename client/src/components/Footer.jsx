export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Section: Brand + Links */}
                <div className="footer-top">
                    {/* Brand Info */}
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">Haleta Properties</a>
                        <p className="footer-tagline">
                            Curating exceptional residential living and worry-free property management 
                            across the world's most sought-after destinations.
                        </p>
                        <div className="footer-contact">
                            <span>contact@haletaproperties.com</span>
                            <span>+1 (800) 555-0199</span>
                        </div>
                    </div>

                    {/* Column 1: Properties */}
                    <div className="footer-col">
                        <h4>Properties</h4>
                        <ul>
                            <li><a href="#">Luxury Rentals</a></li>
                            <li><a href="#">Buy & Lease</a></li>
                            <li><a href="#">Featured Penthouses</a></li>
                            <li><a href="#">Private Villas</a></li>
                            <li><a href="#">Off-Market Listings</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Property Management</a></li>
                            <li><a href="#">Tenant Concierge</a></li>
                            <li><a href="#">Asset Advisory</a></li>
                            <li><a href="#">Property Valuation</a></li>
                            <li><a href="#">Legal & Closing</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Press & Media</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Haleta Properties Inc. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Preferences</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
