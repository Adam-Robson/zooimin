import Link from "next/link";
import { PiSpotifyLogoFill, PiSoundcloudLogoFill, PiCaretDoubleLeftBold } from "react-icons/pi";
import { FaBandcamp } from "react-icons/fa";
import './page-template.css';

interface PageTemplateProps {
    title: string;
    backgroundImage: string;
    children: React.ReactNode;
}

export default function PageTemplate({
    title,
    backgroundImage,
    children
}: PageTemplateProps) {
    return (
        <div className="page-template" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <header className="header">
                <div className="back-button-container">
                <Link href="/" className="back-button">
                    <PiCaretDoubleLeftBold size="32"/>
                </Link>
                </div>
                <h1 className="title">{title}</h1>
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">
                <div className="footer-container">
                    <Link href="https://spoti.fi/3QNqMuE" target="_blank" rel="noopener noreferrer">
                        <PiSpotifyLogoFill size={44} />
                    </Link>
                    <Link href="https://soundcloud.com/lefogsongs" target="_blank" rel="noopener noreferrer">
                        <PiSoundcloudLogoFill size={44} />
                    </Link>
                    <Link href="https://lefogsong.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                        <FaBandcamp size={44} />
                    </Link>

                </div>
            </footer>



        </div>




    )
}
