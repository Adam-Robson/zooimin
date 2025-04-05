import { playlist, useAudioContext } from "@/_contexts/AudioProvider";
import { Track } from "@/_data/_collections";
import "./audio-playlist.css";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};

  return (
    <div className="audio-playlist">
      <ul className="ul">
        {playlist.map((track: Track, index: number) => (
          <li
            key={track.id}
            className={`li ${currentIndex === index ? "active" : ""
              }`}
          >
            <button
              className="playlist-button"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.title} ({track.album})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
