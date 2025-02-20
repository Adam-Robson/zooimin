import Link from 'next/link';
import Buttoncard from './_components/_button-card/ButtonCard';
import './home.css';

export default function Home() {
  return (
    <div className="home-page w-full mx-auto p-4 xs:p-8 sm:py-20 md:py-24 lg:py-32 max-w-screen-lg">
      <div className="home-container">
        <nav className="navlinks-section" aria-label="Primary Navigation">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link href="/collections" className="navlink text-base xs:text-sm sm:text-lg md:text-2xl">collections</Link>
            </li>
              <div className="navlink-border" />
            <li>
              <Link href="/about" className="navlink text-base xs:text-sm sm:text-lg md:text-2xl">about</Link>
            </li>
          </ul>
        </nav>
        <section className="welcome-section">
          <h1 className="welcome text-2xl xs:text-3xl sm:text-4xl">Welcome!</h1>
          <p className="comment text-base xs:text-lg sm:text-xl">This is the website for Le Fog.</p>
          <p className="subcomment text-sm xs:text-base sm:text-lg">Click the radio to hear the latest.</p>
        </section>
      </div>
      <Buttoncard />
    </div>
  );
}
