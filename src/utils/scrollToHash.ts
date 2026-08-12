// Offset compensa o header fixo (altura + respiro), igual ao scroll-margin-top usado como fallback.
const HEADER_OFFSET = 96;
const DURATION = 900;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollToHash(hash: string) {
  const target = document.getElementById(hash.replace(/^#/, ""));
  if (!target) return;

  const startY = window.scrollY;
  const targetY = Math.max(0, target.getBoundingClientRect().top + startY - HEADER_OFFSET);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: targetY, behavior: "auto" });
    return;
  }

  const startTime = performance.now();

  function step(now: number) {
    const progress = Math.min((now - startTime) / DURATION, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo({ top: startY + (targetY - startY) * eased, behavior: "auto" });
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
