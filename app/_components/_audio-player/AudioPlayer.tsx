import { useAudioContext } from "@/_contexts/AudioProvider";
import Image from "next/image";
import "./audio-player.css";
import AudioControls from "./AudioControls";
import AudioPlaylist from "./AudioPlaylist";

export default function AudioPlayer() {
  const { song, playback, elapsed, duration } = useAudioContext() ?? {};
  const title = "LE FOG";
  return (
    <div className="audio-player">
      <h2 className="buttoncard-title sm:block md:hidden">{title}</h2>
      <Image
        height={180}
        width={180}
        src="/images/purple_favicon.svg"
        alt="Logo"
        className="player-logo hidden md:block mt-8 pt-1d2"
      />


      <AudioPlaylist />

      <div className="now-playing">
        {playback && (
          <>
            <div className="song-title">{song.title}</div>
            <div className="song-timing">
              {elapsed} / {duration}
            </div>
          </>
        )}
      </div>
      <AudioControls />
    </div>
  );
}
