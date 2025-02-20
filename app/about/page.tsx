import Link from "next/link";
import { FaInstagram, FaSpotify } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import './about.css';

export default function About() {

  return (
    <div className="about-page">
      <div className="about-container">
        <Link href="/" className="back-link">
          <FiChevronLeft />
        </Link>
        <h1 className="about-title">about</h1>
        <div className="about-container">
          <p className="about-text">
            Le Fog is an independent music project by Adam Robson.
          </p>
          <p className="about-text">Blending
            electrified rock sounds with contemporary folk music, and electronic
            music. Le Fog explores aphoristic lyrics and raw recording techniques,
            producing a singular sonic experiences. Made in Portland, Oregon.</p>
          <div className="social-icons mt-12 flex justify-between w-80">
            <a href="https://spoti.fi/3QNqMuE" target="_blank" rel="noopener noreferrer">
              <FaSpotify size={44} />
            </a>
            <a href="https://www.instagram.com/adamrayrobson/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={44} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
