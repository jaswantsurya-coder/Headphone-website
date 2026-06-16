"use client";

import { useEffect, useRef, useState } from "react";

interface VideoSequenceProps {
  folderName?: string;
}

const videoMap: Record<string, string> = {
  "frames": "/tour-m6-40mm.mp4",
  "frames-30mm": "/live-m6-30mm.mp4",
  "frames-video": "/cinematic-showcase.mp4",
};

export default function VideoSequence({ folderName = "frames" }: VideoSequenceProps) {
  const targetSrc = videoMap[folderName] || videoMap["frames"];

  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);

  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");
  const [srcA, setSrcA] = useState<string>(targetSrc);
  const [srcB, setSrcB] = useState<string>("");

  const [prevTargetSrc, setPrevTargetSrc] = useState(targetSrc);
  if (targetSrc !== prevTargetSrc) {
    setPrevTargetSrc(targetSrc);
    if (activeVideo === "A") {
      setSrcB(targetSrc);
      setActiveVideo("B");
    } else {
      setSrcA(targetSrc);
      setActiveVideo("A");
    }
  }

  // Ensure video element starts playing when source is loaded and active
  useEffect(() => {
    const playVideo = async (videoEl: HTMLVideoElement | null) => {
      if (!videoEl) return;
      try {
        videoEl.muted = true;
        await videoEl.play();
      } catch (err) {
        console.warn("Failed to autoplay video. Retrying on load...", err);
      }
    };

    if (activeVideo === "A" && videoRefA.current) {
      playVideo(videoRefA.current);
      // Fade out and pause B after transition
      const timer = setTimeout(() => {
        if (videoRefB.current) {
          videoRefB.current.pause();
        }
      }, 700);
      return () => clearTimeout(timer);
    } else if (activeVideo === "B" && videoRefB.current) {
      playVideo(videoRefB.current);
      // Fade out and pause A after transition
      const timer = setTimeout(() => {
        if (videoRefA.current) {
          videoRefA.current.pause();
        }
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeVideo, srcA, srcB]);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Video A */}
      {srcA && (
        <video
          ref={videoRefA}
          src={srcA}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            activeVideo === "A" ? "opacity-80 z-10" : "opacity-0 z-0"
          }`}
          style={{
            transform: "translate3d(0,0,0)",
            willChange: "transform, opacity",
            filter: "brightness(0.82) contrast(1.08) saturate(1.05)",
          }}
        />
      )}

      {/* Video B */}
      {srcB && (
        <video
          ref={videoRefB}
          src={srcB}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            activeVideo === "B" ? "opacity-80 z-10" : "opacity-0 z-0"
          }`}
          style={{
            transform: "translate3d(0,0,0)",
            willChange: "transform, opacity",
            filter: "brightness(0.82) contrast(1.08) saturate(1.05)",
          }}
        />
      )}

      {/* Ambient bottom gradient shade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
      
      {/* Subtle radial ambient glow behind headphones */}
      <div className="absolute pointer-events-none w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(255,75,0,0.06)_0%,transparent_70%)] blur-[120px] mix-blend-screen opacity-70 z-0" />
    </div>
  );
}
