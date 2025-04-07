import Image from "next/image";
import PlayerButton from "@/_components/player-button";
import "./globals.css";

export default function HomePage() {
  return (
      <div className="root">
        <Image 
          src="/images/logo/typewriter.svg" 
          alt="main image lefog logo" 
          aria-label="Main image le fog logo" 
          width={700} 
          height={700}
        />
        <PlayerButton /> 
      </div>
  );
}
