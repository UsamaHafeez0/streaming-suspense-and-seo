"use client";
import { useState, useRef, Suspense } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <video className="" ref={videoRef}>
        <source
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <button onClick={handlePlayPause} className="pt-2">
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};

export default VideoPlayer;
