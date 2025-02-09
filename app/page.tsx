import BackgroundImage from '@/_components/BackgroundImage';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto h-screen">
      <BackgroundImage imageUrl={'/images/primary_spheres.svg'} />
      <div className="max-w-60">
        <Image src="/images/gray_favicon.svg" alt="le fog logo" height={240} width={240} className="w-full p-6" />
      </div>
      <div className="flex flex-col justify-start items-end h-full w-full">
        <div className="max-w-screen-md text-center flex flex-col justify-end items-end p-4">
          <Link
            href="/collections"
            className="w-full text-center text-2xl md:text-3xl tracking-widest font-light"
          >
            collections
          </Link>
          <div className="h-2 w-40 border-b-2 border-black" />
          <Link
            href="/about"
            className="w-full text-center text-2xl md:text-3xl tracking-widest font-light"
          >

            about
          </Link>
        </div>
      </div>
    </div>
  );
}
