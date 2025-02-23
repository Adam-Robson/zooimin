import Link from 'next/link';
import Buttoncard from './_components/_button-card/ButtonCard';
import './page.css';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-background" style={{ backgroundImage: "url('/images/bg.svg')" }}></div>
      <div className="home-container">
        <nav className="navlinks-section" aria-label="Primary Navigation">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link href="/collections" className="navlink">collections</Link>
            </li>
              <div className="navlink-border" />
            <li>
              <Link href="/about" className="navlink">about</Link>
            </li>
          </ul>
        </nav>
        <section className="welcome-section">
          <p className="comment">This is the website for Le Fog.</p>
        </section>
      </div>
      <Buttoncard />
    </div>
  );
}
