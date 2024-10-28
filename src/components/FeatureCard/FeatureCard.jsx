import './FeatureCard.css';

export const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="feature-glow"></div>
    </div>
);
