import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Features } from './components/Features/Features';
import { Footer } from './components/Footer/Footer';
import {MetaTags} from "./components/MetaTags/MetaTags.jsx";
import './App.css';

function App() {
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
        setTimeout(() => setIsLoading(false), 2000);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (isLoading) {

        return (
            <>
                <MetaTags/>
                <LoadingScreen/>
            </>
        )
        ;
    }

    return (
        <div className="app">
            <MetaTags/>
            <div
                className="background-gradient"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
            />
            <div className="glass-overlay" />
            <main className="content">
                <Header />
                <HeroSection />
                <Features />
                <Footer />
            </main>
        </div>
    );
}

export default App;