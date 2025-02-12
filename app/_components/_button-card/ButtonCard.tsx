'use client';
import AudioPlayer from "@/_components/_audio-player/AudioPlayer";
import { AudioProvider } from '@/_contexts/AudioProvider';
import { useState } from 'react';
import { PiRadioFill, PiXFill } from 'react-icons/pi';
import './button-card.css';

export default function Buttoncard() {
  const [isCardVisible, setCardVisible] = useState<boolean>(false);
  const onClose = () => setCardVisible(false);

  return (
    <div className="buttoncard">
      <button
        onClick={() => setCardVisible(true)}
        className="toggle-player"
      >
        <PiRadioFill size={60} />
      </button>
      {isCardVisible && (
        <div className={`buttoncard-overlay ${isCardVisible ? 'visible' : ''}`}>
          <div className="buttoncard-container can">
            <button className="buttoncard-close-button" onClick={onClose}>
              <PiXFill size={32} />
            </button>
            <div className="buttoncard-content">
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
