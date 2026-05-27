"use client";

import { useRef, useState } from "react";
import PlayIcon from "@/components/shared/PlayIcon";
import PauseIcon from "@/components/shared/PauseIcon";

const VisionVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section data-opai-animate data-delay="0.1" className="lp:pb-44! pb-20 md:pb-25 lg:pb-30">
      <div className="main-container">
        <div className="group relative h-[400px] overflow-hidden rounded-2xl bg-neutral-800 md:h-[550px] lg:h-[785px]">
          <video
            ref={videoRef}
            className="size-full object-cover"
            src="/video/video.mp4"
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
          ></video>
          <button
            onClick={togglePlay}
            data-play={isPlaying}
            type="button"
            className="group/control absolute top-1/2 left-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white opacity-0 outline-2 outline-[#beab9a] backdrop-blur-xl transition-all duration-300 ease-in-out group-hover:opacity-100 hover:scale-105"
            aria-label="Toggle play"
          >
            <span className="relative flex size-full items-center justify-center">
              <span
                className={`play-icon absolute translate-y-0 opacity-100 transition-all duration-300 ${isPlaying ? "translate-y-6 opacity-0" : ""}`}
              >
                <PlayIcon />
              </span>
              <span
                className={`pause-icon absolute translate-y-6 opacity-0 transition-all duration-300 ${isPlaying ? "translate-y-0 opacity-100" : ""}`}
              >
                <PauseIcon />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisionVideo;
