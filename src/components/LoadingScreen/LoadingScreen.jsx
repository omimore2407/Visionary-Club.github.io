import { Helmet } from "react-helmet";
import Favicon from "react-favicon";
import './LoadingScreen.css';

export const LoadingScreen = () => (
    <div className="loading-screen">
        <Favicon url="https://github.com/Visionary-Club/Visionary-Club.github.io/blob/main/src/assets/VISIONARY_CLUB.png"/>
        <Helmet>
            <meta charSet="UTF-8"/>
            <title>Visionary Club</title>
        </Helmet>
        <div className="loading-circle"></div>
        <div className="loading-text">INITIALIZING</div>
    </div>
);