import Link from 'next/link';
import Buttoncard from './_components/_button-card/ButtonCard';
import './home.css';

export default function Home() {
  return (
    <div className="home-page">
      <div className="h-full w-full flex flex-col justify-center items-center relative">
        <div className="relative w-full h-full flex justify-between items-center">
          <section className="p-4">
            <p className="text-2xl font-semibold mb-6">Welcome!</p>
            <p className="text-xl font-thin mb-6">Click on the radio to hear the latest.</p>
          </section>
          <section className="navlinks mr-12">
            <Link href="/collections">collections</Link>
            <div className="navlink-border" />
            <Link href="/about">about</Link>

          </section>
        </div>
      </div>
      <Buttoncard />
    </div>
  );
}
