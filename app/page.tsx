import BackgroundImage from '@/_components/BackgroundImage';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto h-screen relative z-0">
      <BackgroundImage imageUrl={'/images/primary_spheres.svg'} />

      <div className="max-w-screen-xl mx-auto h-full w-full flex flex-col justify-center items-center relative z-10">
        <Link href="/">
          <Image
            src="/images/gray_favicon.svg"
            alt="le fog"
            width={180}
            height={180}
            className="absolute top-4 left-0"
          />
        </Link>

        <div className="w-full h-1/2 flex flex-col justify-start items-end p-12">
          <div className="w-40 h-40 flex flex-col justify-evenly items-center">
            <Link href="/collections">collections</Link>
            <div className="line" />
            <Link href="/about">about</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
