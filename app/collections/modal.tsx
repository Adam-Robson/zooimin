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
    <div className="modal">
      <div className="card-overlay">
        <button
          onClick={onClose}
          className=""
          aria-label="Close"
        >
          <PiXFill size={32} />
        </button>
        <Image
          src={album.cover}
          alt={album.title}
          width={500}
          height={500}
          className=""
        />
        <h2 className="card-title">{album.title}</h2>
        <p className="card-description">{album.description}</p>
        <ul className="ul">
          {album.tracks.map((track) => (
            <li
              key={track.id}
              className="li"
            >
              <span className="track-title">{track.title}</span>
              <span className="card-duration">{track.duration}</span>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}
