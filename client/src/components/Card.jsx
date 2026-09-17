

export default function Card({ icon, title, description, linkText }) {
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="icon-img">
                    {icon}
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
                <span className="rental-link">
                    {linkText} <span className="arrow">&rarr;</span>
                </span>
            </div>
        </div>
    );
}