import { useState, useRef } from "react";
import { prev as defaultPrev, next as defaultNext } from "../assets/svgs";

//here the T is type of typescript that ts automatically refers the type that will decide later 
interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  visibleCount?: number;
  prevIcon?: string;
  nextIcon?: string;
  arrowClassName?: string;
}

function SliderMenu<T>({
  items,
  renderItem,
  visibleCount = 3,
  prevIcon = defaultPrev,
  nextIcon = defaultNext,
  arrowClassName = "absolute z-10",
}: SliderProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const startX = useRef<number | null>(null);
  const endX = useRef<number | null>(null);

  const maxIndex = items.length - visibleCount;
  const SWIPE_THRESHOLD = 50;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="relative flex items-center justify-center">
      {/* Prev */}
      <button onClick={handlePrev} className={`${arrowClassName} left-0`}>
        <img
          src={prevIcon}
          alt="prev"
          className="bg-secondary rounded-[10px] p-[12px]"
        />
      </button>

      {/* Items */}
      <div
        className="flex gap-[16px] overflow-hidden touch-pan-y"
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
        onTouchMove={(e) => (endX.current = e.touches[0].clientX)}
        onTouchEnd={() => {
          if (startX.current === null || endX.current === null) return;
          const distance = startX.current - endX.current;
          if (distance > SWIPE_THRESHOLD) handleNext();
          if (distance < -SWIPE_THRESHOLD) handlePrev();
          startX.current = null;
          endX.current = null;
        }}
      >
        {visibleItems.map(renderItem)}
      </div>

      {/* Next */}
      <button onClick={handleNext} className={`${arrowClassName} right-0 `}>
        <img
          src={nextIcon}
          alt="next"
          className="bg-secondary rounded-[10px] p-[12px]"
        />
      </button>
    </div>
  );
}

export default SliderMenu;
