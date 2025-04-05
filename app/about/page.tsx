import Link from 'next/link';
import React from 'react';
import { LiaBandcamp, LiaSpotify } from 'react-icons/lia';
import './about.css';
const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1 className="about-title">About</h1>
        <p className="about-description">
        Le Fog is an independent music project founded in 2020 by Adam Robson that combines raw recording techniques, aphoristic lyrics, electrified rock, contemporary folk, and electronic music. Created in Portland, Oregon.
        </p>
        <a href="mailto:contact@lefog.xyz" className="about-contact">
          Get in Touch via Email
        </a>
        <div className="social-links">
          <Link
            href="https://bandcamp.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link bandcamp"
            aria-label="Visit us on Bandcamp"
          >
           
            <LiaBandcamp size={60} />
          </Link>
          <Link
            href="https://open.spotify.com/artist/yourprofile"
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
};

export default AboutPage;
