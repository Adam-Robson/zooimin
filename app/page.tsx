import BackgroundImage from '@/_components/BackgroundImage';
import Link from 'next/link';
import Buttoncard from './_components/_button-card/ButtonCard';
import './home.css';

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto h-screen relative z-0">
      <BackgroundImage imageUrl={'/images/primary_spheres.svg'} />
      <div className="h-full w-full flex flex-col justify-center items-center relative">
        <div className="relative max-w-screen-5xl w-full mx-auto h-full flex justify-between items-center">
          <section className="p-20">
            <p className="text-2xl font-semibold mb-6">Welcome from Le Fog</p>
            <p className="text-lg font-light mb-4">Click on the radio to hear the latest.</p>
            <p className="text-lg font-light mb-4">Discography can be found in collections.</p>
            <p className="text-lg font-light">Thank you for taking the time to visit this page.</p>
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
