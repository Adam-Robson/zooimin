'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
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
    <div className="modal">
      <div className="">
        <div className="card-overlay">
          <button
            onClick={onClose}
            className="text-stone-800 p-2 hover:text-stone-500"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <Image
            src={album.cover}
            alt={album.title}
            width={500}
            height={500}
            className=""
          />
          <h2 className="card-title ">{album.title}</h2>
          <p className="">{album.description}</p>
          <ul className="">
            {album.tracks.map((track) => (
              <li
                key={track.id}
                className=""
              >
                <span className="">{track.title}</span>
                <span className="">{track.duration}</span>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
}
