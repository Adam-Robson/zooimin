'use client';
import AudioPlayer from "@/_components/_audio-player/AudioPlayer";
import { AudioProvider } from '@/_contexts/AudioProvider';
import { useState } from 'react';
import { PiRadioFill, PiX } from 'react-icons/pi';
import './button-card.css';

export default function Buttoncard() {
  const [isCardVisible, setCardVisible] = useState<boolean>(false);
  const onClose = () => setCardVisible(false);
  const title = "LE FOG";
  return (
    <div className="buttoncard">
      <button
        onClick={() => setCardVisible(true)}
        className="toggle-player"
      >
        <PiRadioFill className="radio" />
      </button>
      {isCardVisible && (
        <div className={`buttoncard-overlay ${isCardVisible ? 'visible' : ''}`}>
          <div className="buttoncard-container">
            <button className="buttoncard-close-button" onClick={onClose}>
              <PiX size={24} />
            </button>
            <div className="buttoncard-content">
              <h2 className="buttoncard-title">{title}</h2>
              <AudioProvider>
                <AudioPlayer />
              </AudioProvider>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
