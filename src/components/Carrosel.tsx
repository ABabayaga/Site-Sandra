import { useRef, useEffect, useCallback } from 'react';

const items = [
  { image: '/IMAGE 1.png', text: 'Quadro 1' },
  { image: '/IMAGE 2.png', text: 'Quadro 2' },
  { image: '/IMAGE 3.png', text: 'Quadro 3' },
  { image: '/IMAGE 4.png', text: 'Quadro 4' },
  { image: '/IMAGE 5.png', text: 'Quadro 5' },
  { image: '/IMAGE 6.png', text: 'Quadro 6' },
  { image: '/IMAGE 7.png', text: 'Quadro 7' },
];

interface CarroselProps {
  selectedImage?: string;
  onSelect?: (image: string) => void;
}

// Triple array for infinite loop: [copy1, copy2, copy3]
const ITEMS = [...items, ...items, ...items];
const N = ITEMS.length; // 21
const L = items.length; // 7

export default function Carrosel({ selectedImage, onSelect }: CarroselProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(L); // start at middle copy
  const movingRef = useRef(false);

  const applyTransform = useCallback((index: number, withTransition: boolean) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = withTransition ? 'transform 700ms ease' : 'none';
    trackRef.current.style.transform = `translateX(-${(index / N) * 100}%)`;
  }, []);

  // Set initial position without animation
  useEffect(() => {
    applyTransform(L, false);
  }, [applyTransform]);

  const go = useCallback((dir: 1 | -1) => {
    if (movingRef.current) return;
    movingRef.current = true;
    idxRef.current += dir;
    applyTransform(idxRef.current, true);
  }, [applyTransform]);

  // After animation: silently reset if in first or third copy
  const handleTransitionEnd = useCallback(() => {
    movingRef.current = false;
    if (idxRef.current < L) {
      idxRef.current += L;
      applyTransform(idxRef.current, false);
    } else if (idxRef.current >= L * 2) {
      idxRef.current -= L;
      applyTransform(idxRef.current, false);
    }
  }, [applyTransform]);

  // Non-passive wheel listener so preventDefault works
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      go(e.deltaY > 0 ? 1 : -1);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [go]);

  return (
    <div ref={outerRef} className="relative w-full bg-white">

      {/* Prev */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-1 top-0 z-10 flex h-full w-10 items-center justify-center cursor-pointer group focus:outline-none sm:left-0 sm:w-12"
      >
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-white shadow transition-all group-hover:shadow-md sm:size-9">
          <svg className="size-5 text-gray-700" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>

      {/* Track viewport — mx-12 keeps cards clear of the arrow buttons */}
      <div className="mx-10 overflow-hidden py-4 sm:mx-12 sm:py-6"
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex"
          style={{ width: `${(N * 100) / 3}%` }}
        >
          {ITEMS.map((item, i) => {
            const isSelected = selectedImage === items[i % L].image;
            return (
              <div
                key={i}
                style={{ width: `${100 / N}%` }}
                className="px-1.5 sm:px-2"
                onClick={() => onSelect?.(items[i % L].image)}
              >
                <img
                  src={item.image}
                  alt={item.text}
                  className={`h-44 w-full rounded-2xl object-cover sm:h-56 cursor-pointer transition-all duration-200 ${
                    isSelected ? 'ring-4 ring-[#08284E] scale-[1.03]' : 'hover:opacity-80'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-1 top-0 z-10 flex h-full w-10 items-center justify-center cursor-pointer group focus:outline-none sm:right-0 sm:w-12"
      >
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-white shadow transition-all group-hover:shadow-md sm:size-9">
          <svg className="size-5 text-gray-700" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
          </svg>
          <span className="sr-only">Próximo</span>
        </span>
      </button>

    </div>
  );
}
