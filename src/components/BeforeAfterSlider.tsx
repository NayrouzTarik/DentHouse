import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspectRatio?: string;
  className?: string;
  badge?: string;
  initialPosition?: number;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeAlt = 'Before smile treatment',
  afterAlt = 'After smile transformation',
  aspectRatio = 'aspect-[16/9]',
  className = '',
  badge,
  initialPosition = 50,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(initialPosition);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Slider Interactive Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl select-none cursor-ew-resize shadow-md touch-none group bg-slate-900`}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            setSliderPosition((prev) => Math.max(0, prev - 5));
          } else if (e.key === 'ArrowRight') {
            setSliderPosition((prev) => Math.min(100, prev + 5));
          }
        }}
      >
        {/* Layer 1: After Image (Full background) */}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Layer 2: Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Divider Vertical Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)] pointer-events-none z-10 transition-transform duration-75"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Circle Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-xl border-2 border-[#0284C7] flex items-center justify-center cursor-ew-resize group-hover:scale-110 active:scale-95 transition-transform duration-150">
            <div className="flex items-center -space-x-1 text-[#0284C7]">
              <ChevronLeft className="w-4 h-4" />
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Top Floating Badge (Optional title) */}
        {badge && (
          <div className="absolute top-3 left-3 z-20 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5 pointer-events-none">
            <Sparkles className="w-3 h-3 text-sky-400" />
            <span>{badge}</span>
          </div>
        )}

        {/* Before / After Floating Badges */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <span
            className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-opacity duration-200 ${
              sliderPosition < 15
                ? 'opacity-30'
                : 'bg-slate-950/80 backdrop-blur-md text-white shadow-sm border border-white/10'
            }`}
          >
            {beforeLabel}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
          <span
            className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-opacity duration-200 ${
              sliderPosition > 85
                ? 'opacity-30'
                : 'bg-[#0284C7]/90 backdrop-blur-md text-white shadow-sm border border-sky-400/30'
            }`}
          >
            {afterLabel}
          </span>
        </div>
      </div>

      {/* Quick Preset Buttons & Drag Instruction */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <span className="inline-block w-3 h-3 rounded-full border border-slate-300 text-center leading-none text-[8px] font-bold">
            ↔
          </span>
          <span>Slide left/right to compare</span>
        </span>

        {/* Preset View Switcher Buttons */}
        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200/80 text-[11px] font-semibold">
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              sliderPosition === 100
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Full Before
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              sliderPosition === 50
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            50/50 Split
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
              sliderPosition === 0
                ? 'bg-white text-[#0284C7] shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Full After
          </button>
        </div>
      </div>
    </div>
  );
};
