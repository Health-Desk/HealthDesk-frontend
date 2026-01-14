import "./FeatureCard.css";

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="feature-card">
      <div className="card-icon">
        <i className={icon}></i>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>

      {/* Bottom-right arrow */}
      <i className="fa-solid fa-arrow-right card-arrow"></i>
    </div>
  );
}

export default FeatureCard;
