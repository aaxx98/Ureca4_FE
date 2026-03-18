import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number | undefined, duration = 2500): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (target == null) return;
    setCount(0);
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(target * eased);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return count;
}
