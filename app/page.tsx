import BackgroundImage from '@/_components/BackgroundImage';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="homepage">
      <BackgroundImage imageUrl={'/primary_spheres.svg'} />
      <div className="navlinks grid grid-cols-1 grid-rows-3">
        <Link href="/collections" className="navlink">collections</Link>
        <Link href="/about" className="navlink">about</Link>
        <Link href="/contact" className="navlink">contact</Link>
      </div>
    </div>
  );
}
