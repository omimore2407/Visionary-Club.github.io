// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
    const [email, setEmail] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Simulate loading
        setTimeout(() => setIsLoading(false), 2000);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    if (isLoading) {
        return (

            <div className="loading-screen">
                <Helmet>
                    <meta charSet="UTF-8"/>
                    <title>Visionary Club</title>
                    <link rel="icon" type="image" href="/assets/VISIONARY_CLUB.png"/>
                </Helmet>
                <div className="loading-circle"></div>
                <div className="loading-text">INITIALIZING</div>
            </div>
        );
    }

    return (
        <div className="app">
            <Helmet>
                <meta charSet="UTF-8"/>
                <title>Visionary Club</title>
                <link rel="icon" type="image" href="/assets/VISIONARY_CLUB.png"/>
            </Helmet>
            <div
                className="background-gradient"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
            ></div>

            <div className="glass-overlay"></div>

            <main className="content">
                <div className="header">
                    <div className="logo-container">
                        <div className="logo-circle"></div>
                        <h1 className="logo-text">VISIONARY CLUB</h1>
                    </div>
                    <div className="status-bar">
                        <span className="status-dot"></span>
                        SYSTEM STATUS: LAUNCHING SOON
                    </div>
                </div>

                <div className="hero-section">
                    <h2 className="glitch-text">INITIALIZE FUTURE</h2>
                    <p className="sub-text">Join the next generation of technology innovators</p>
                </div>

                <div className="features-grid">
                    {[
                        {title: 'AI/ML', icon: '🧠', description: 'Advanced Intelligence Systems'},
                        {title: 'IoT', icon: '🌐', description: 'Connected Device Networks'},
                        {title: 'CYBERSEC', icon: '🛡️', description: 'Security Protocol Development'}
                    ].map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="feature-glow"></div>
                        </div>
                    ))}
                </div>



                <div className="footer-dots">
                    <div className="pulse-dot"></div>
                    <div className="pulse-dot"></div>
                    <div className="pulse-dot"></div>
                </div>
            </main>
        </div>
    );
}

export default App;