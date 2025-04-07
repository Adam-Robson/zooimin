'use client';

import AudioPlayer from '@/_components/_audio-player/AudioPlayer';
import '@/_components/player-button.css';
import { AudioProvider } from '@/_contexts/AudioProvider';
import { useState } from 'react';
import { PiRadioFill } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
export default function PlayerButton() {
    const [isCardVisible, setCardVisible] = useState<boolean>(false);

  const genieVariants = {
    closed: {
      scaleY: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.86, 0, 0.07, 1],
      },
    },
    open: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.86, 0, 0.07, 1],
      },
    },
  };

    const onClose = () => setCardVisible(!isCardVisible);
    
    const title = 'LE FOG';
    
    return (
        <>
        <button
        onClick={() => setCardVisible((prev) => !prev)}
        className="player-button px-4 py-2 rounded"
      >
        <PiRadioFill className="radio" />
      </button>
      <AnimatePresence>
            {
              isCardVisible && (
                <motion.div
                  key="audio-player"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    closed: {
                      scaleY: 0,
                      opacity: 0,
                      transition: { duration:  0.8, ease: [0.86, 0, 0.07, 1] },
                    },
                    open: {
                      scaleY: 1,
                      opacity: 1,
                      transition: { duration:  0.8, ease: [0.86, 0, 0.07, 1] },
                    },
      }}
      style={{ transformOrigin: "bottom center" }}
      className="absolute bottom-14 left-1/2 -translate-x-1/2 w-72 overflow-hidden rounded-xl shadow-lg bg-white z-50"
    >
                  <div className={`player-button-container ${isCardVisible ? 'visible' : ''}`}>
                    <button className="player-button-close-button" onClick={onClose}>
                      <X size={24} />
                    </button>
                    <div className="player-button-content">
                      <h2 className="player-button-title">{title}</h2>
                      <AudioProvider>
                          <AudioPlayer />
                      </AudioProvider>
                    </div>
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
        </>
    );
}
