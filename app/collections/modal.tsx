'use client';

import Image from 'next/image';
import { PiXFill } from 'react-icons/pi';
import "./collections.css";

export default function CollectionModal({
  album,
  onClose,
}: {
  album: {
    title: string;
    cover: string;
    description: string;
    tracks: Array<{
      id: number;
      title: string;
      duration: string
    }>
  };
  onClose: () => void;
}) {
  return (
    <div className="fixed flex items-center justify-center z-50">
      <div className="relative">
        <div className="card-overlay">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl"
            aria-label="Close"
          >
            <PiXFill size={32} />
          </button>
          <Image
            src={album.cover}
            alt={album.title}
            width={500}
            height={500}
            className="w-full h-80 object-cover rounded-md mb-2"
          />
          <h2 className="card-title text-3xl font-bold mb-4">{album.title}</h2>
          <p className="mb-4 px-8">{album.description}</p>
          <ul className="space-y-2 w-4/5 mx-auto">
            {album.tracks.map((track) => (
              <li
                key={track.id}
                className="flex justify-between items-center rounded p-2"
              >
                <span className="subpixel-antialiased">{track.title}</span>
                <span className="subpixel-antialiased">{track.duration}</span>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
}
