import { useState } from "react";
import heroImage from "../assets/Japan AE86.jpg";

export default function Hero() {
    const [activeTab, setActiveTab] = useState("buy")
    const [location, setLocation] = useState("")
    const [PropertyType, setPropertyType] = useState("")
    const [priceRange, setPriceRange] = useState("")


    return (
        <div className="master">
            <div className="hero-int">
                <div className="left">
                    <h1 className="hero-title">Beautiful homes. <br />
                        Worry-free Management
                    </h1>
                    <p className="hero-description">We Help you buy, rent and manage Premimum properties - handling every detail with care so you can relax</p>


                    <div className="button-wrap">
                        <button>Explore Properties</button>
                        <button>Managment Services </button>
                    </div>
                </div>

                <div className="show-area">
                    <div className="box1">
                        <img className="img1" src={heroImage} alt="Japan AE86" />
                    </div>
                </div>
            </div>


            <div className="q-search">
                <div className="search-tabs">
                    <button className={activeTab === "buy" ? "tab-active" : "tab"} onClick={() => setActiveTab("buy")}>Buy</button>
                    <button className={activeTab === "rent" ? "tab-active" : "tab"} onClick={() => setActiveTab("rent")}>Rent</button>
                </div>

                <div className="search-bar">
                    <div className="search-field">
                        <label>Location</label>
                        <select value={location} onChange={(e) => setLocation(e.arget.value)}>
                            <option value="">Select city</option>
                            <option value="tokyo">Tokyo</option>
                            <option value="kyoto">Kyoto</option>
                            <option value="osaka">Osaka</option>
                        </select>
                    </div>

                    <div className="search-field">
                        <label>Property Type</label>
                        <select value={PropertyType} onChange={(e) => setPropertyType(e.target.value)}>
                            <option value="">Select type</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                            <option value="house">Modern House</option>
                        </select>
                    </div>

                    <div className="search-field">
                        <label>Price Range</label>
                        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                            <option value="">Any price</option>
                            <option value="under-500k">Under $500,000</option>
                            <option value="500k-1m">$500,000 - $1,000,000</option>
                            <option value="1m-plus">$1,000,000+</option>
                        </select>
                    </div>

                    <button className="search-submit-btn">Search</button>
                </div>
            </div>


        </div>

    )
}