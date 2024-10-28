import { FeatureCard } from '../FeatureCard/FeatureCard';
import './Features.css';

const FEATURES = [
    { title: 'AI/ML', icon: '🧠', description: 'Advanced Intelligence Systems' },
    { title: 'IoT', icon: '🌐', description: 'Connected Device Networks' },
    { title: 'CYBERSEC', icon: '🛡️', description: 'Security Protocol Development' }
];

export const Features = () => (
    <div className="features-grid">
        {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
        ))}
    </div>
);