import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Demolition',
  afterLabel = 'After Renovation',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) handleMove(e.touches[0].clientX);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl select-none cursor-ew-resize border border-slate-700 shadow-xl group"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-slate-900/90 text-amber-400 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold border border-amber-500/30 z-10 shadow-lg">
          {afterLabel}
        </div>

        {/* BEFORE IMAGE (Clipped Foreground) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-slate-900/90 text-slate-200 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold border border-slate-700 z-10 shadow-lg">
            {beforeLabel}
          </div>
        </div>

        {/* SLIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-2xl border-2 border-white text-xs hover:scale-110 transition-transform">
            ↔
          </div>
        </div>
      </div>

      {/* QUICK TOGGLE BUTTONS */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
        <button
          type="button"
          onClick={() => setSliderPosition(100)}
          className="hover:text-amber-600 transition-colors cursor-pointer"
        >
          Show 100% Before
        </button>
        <span className="text-slate-400 font-normal">Drag slider to compare transformation</span>
        <button
          type="button"
          onClick={() => setSliderPosition(0)}
          className="hover:text-amber-600 transition-colors cursor-pointer"
        >
          Show 100% After
        </button>
      </div>
    </div>
  );
};
