import Link from 'next/link';
import Buttoncard from './_components/_button-card/ButtonCard';
import './page.css';

export default function Home() {
  return (
    <div className="home-page xs:p-8 sm:py-20 md:py-24 lg:py-32">
      <div className="home-background"></div>
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
