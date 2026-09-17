import Navbar from "./components/Navbar";
import Hero from "./pages/hero";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Number from "./pages/Number";
import Testimonials from "./pages/Testimonials";
import Cta from "./pages/Cta";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Features />
            <Number />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    );
}

