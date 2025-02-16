import { playlist, useAudioContext } from "@/_contexts/AudioProvider";
import { ISong } from "@/_types/audio-provider";
import "./audio-playlist.css";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};

  return (
    <div className="audio-playlist">
      <ul className="ul">
        {playlist.map((track: ISong, index: number) => (
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
