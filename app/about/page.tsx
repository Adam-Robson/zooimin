import Link from 'next/link';
import React from 'react';
import { LiaInstagram, LiaSpotify } from 'react-icons/lia';
import './about.css';


export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1 className="about-title">About</h1>
        <p className="about-description">
        Le Fog is an independent music project, founded in 2020, by Adam Robson.
        Blending electrified rock sounds with contemporary folk and electronic
            music, Le Fog explores aphoristic lyrics and raw recording techniques,
            producing a singular sound. Made in Portland, Oregon.
        </p>
        <a href="mailto:lefogsongs@gmail.com" className="about-contact">
          Get in Touch via Email
        </a>
        <div className="social-links">
          <Link
            href="https://www.instagram.com/adamrayrobson/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
            aria-label="Visit us on Instagram"
          >
           
            <LiaInstagram size={60} />
          </Link>
          <Link
            href="https://spoti.fi/3QNqMuE"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link spotify"
            aria-label="Visit us on Spotify"
          >
            <LiaSpotify size={60} />
            </Link>
        </div>
      </div>
    </section>
  );
}
