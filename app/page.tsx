import Link from 'next/link';
import Buttoncard from './_components/_button-card/ButtonCard';
import './home.css';

export default function Home() {
  return (
    <div className="home-page w-full mx-auto h-screen p-4 max-w-96 xs:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xs:p-8 sm:py-20 md:py-24 lg:py-32">
      <div className="home-container">
        <section className="navlinks-section">
          <Link href="/collections" className="navlink">collections</Link>
          <div className="navlink-border" />
          <Link href="/about" className="navlink">about</Link>

        </section>
        <section className="welcome-section">
          <p className="welcome">Welcome!</p>
          <p className="comment">This is the website for le fog.</p>
          <p className="subcomment">Click the radio to hear the latest.</p>

        </section>

      </div >
      <Buttoncard />
    </div >
  );
}
