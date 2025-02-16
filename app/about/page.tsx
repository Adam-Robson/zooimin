'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaSpotify } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
const images = [
  "/images/circle.jpg",
  "/images/roaddogs.jpg",
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="relative max-w-screen-lg mx-auto w-full flex flex-col items-center justify-around p-4 h-screen">
        <Link href="/" className="back-link">
          <FiChevronLeft />
        </Link>
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <div className="w-full max-w-xl h-80 overflow-hidden rounded-xl shadow-lg">
          <Image
            src={images[currentImage]}
            width={500}
            height={500}
            alt="Band"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
        </div>
        <p className="mt-6 text-lg text-center max-w-2xl">
          Le Fog is an independent music project blending electrified rock sounds with a kind of folk music. Formed by Adam Robson, Le Fog explores aphoristic lyrics and raw recording techniques, producing a singular sonic experiences.
        </p>
        <div className="mt-6 flex justify-between w-80">
          <a href="https://open.spotify.com/artist/" target="_blank" rel="noopener noreferrer">
            <FaSpotify className="text-3xl" />
          </a>
          <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
