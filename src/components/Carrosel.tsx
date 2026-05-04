import { useRef, useEffect, useCallback } from 'react';

const items = [
  { image: '/IMAGE 1.png', text: 'Exemplo' },
  { image: '/IMAGE 2.png', text: 'Exemplo' },
  { image: '/IMAGE 3.png', text: 'Exemplo' },
  { image: '/IMAGE 4.png', text: 'Exemplo' },
  { image: '/IMAGE 5.png', text: 'Exemplo' },
  { image: '/IMAGE 6.png', text: 'Exemplo' },
  { image: '/IMAGE 7.png', text: 'Exemplo' },
];

// Triple array for infinite loop: [copy1, copy2, copy3]
const ITEMS = [...items, ...items, ...items];
const N = ITEMS.length; // 21
const L = items.length; // 7

export default function Carrosel() {
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
        className="absolute left-0 top-0 z-10 h-full w-12 flex items-center justify-center cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center size-9 rounded-full bg-white shadow group-hover:shadow-md transition-all">
          <svg className="size-5 text-gray-700" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>

      {/* Track viewport — mx-12 keeps cards clear of the arrow buttons */}
      <div className="overflow-hidden mx-12 py-6"
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex"
          style={{ width: `${(N * 100) / 3}%` }}
        >
          {ITEMS.map((item, i) => (
            <div key={i} style={{ width: `${100 / N}%` }} className="px-2">
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-0 top-0 z-10 h-full w-12 flex items-center justify-center cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center size-9 rounded-full bg-white shadow group-hover:shadow-md transition-all">
          <svg className="size-5 text-gray-700" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
          </svg>
          <span className="sr-only">Próximo</span>
        </span>
      </button>

    </div>
  );
}
