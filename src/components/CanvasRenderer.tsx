"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

const FRAME_COUNT = 240;

export function CanvasRenderer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();
  
  // High-stiffness, optimal-damping spring for completely flawless, 1-to-1 silky scrubbing without input lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });
  
  const [isLoaded, setIsLoaded] = useState(false);

  const frameIndex = useTransform(smoothProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/images/sequence/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setIsLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) setIsLoaded(true);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = images[Math.min(Math.max(1, index), FRAME_COUNT) - 1];
    if (!img) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    } else {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); 
    }

    // Gentle zoom to fit perfectly without making the subject abnormally large
    const ZOOM = 1.05; 
    const canvasRatio = rect.width / rect.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = rect.width * ZOOM;
    let drawHeight = rect.height * ZOOM;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = (rect.width / imgRatio) * ZOOM;
      offsetY = (rect.height - drawHeight) / 2;
      offsetX = (rect.width - drawWidth) / 2;
    } else {
      drawWidth = (rect.height * imgRatio) * ZOOM;
      offsetX = (rect.width - drawWidth) / 2;
      offsetY = (rect.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Erase the VEO/Veed watermark gracefully:
    // Drawing pure black in a "mix-blend-lighten" canvas perfectly clears it into the dark background layout
    // We apply a soft radial-like or linear gradient over the bottom right corner so it dissolves the watermark seamlessly
    const gradient = ctx.createLinearGradient(rect.width * 0.7, rect.height * 0.8, rect.width, rect.height);
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(0.3, "rgba(0,0,0,1)"); // Turn full black halfway to the corner
    gradient.addColorStop(1, "rgba(0,0,0,1)");

    ctx.fillStyle = gradient;
    ctx.fillRect(rect.width * 0.5, rect.height * 0.7, rect.width * 0.5, rect.height * 0.3);
  };

  useEffect(() => {
    if (!isLoaded) return;
    const handleResize = () => renderFrame(Math.floor(frameIndex.get()) || 1);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) {
      renderFrame(Math.round(latest));
    }
  });

  return (
    <div className="fixed inset-0 w-full h-full z-10 pointer-events-none mix-blend-lighten">
      {/* 
        Restored severe contrast crush! This aggressively crushes jpg compression boxes into blackness
        so they safely vanish through the mix-blend-lighten operation, preserving the deep photo-realistic feel.
      */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ 
          width: "100%", 
          height: "100%", 
          filter: "contrast(1.5) saturate(1.15) brightness(0.85)" 
        }}
      />
      
      {/* Adjusted Cinematic Film Grain placed inside the same isolated blending context */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.20] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-20 mix-blend-normal">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-white/20 border-t-[var(--color-accent-orange)] rounded-full animate-spin mb-4" />
            <div className="text-white/50 text-sm tracking-widest font-mono animate-pulse">
              LOADING COMPONENT...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

