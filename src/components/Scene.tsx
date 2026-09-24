import { useState, useEffect, useRef } from "react";
import { LandscapeScene } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

interface SceneProps {
  className?: string;
}

export function Scene({ className }: SceneProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Pause/unmount WebGL canvas when scrolled offscreen or when page tab is hidden
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDocumentVisible = !document.hidden;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && isDocumentVisible);
      },
      { root: null, threshold: 0.05 }
    );

    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
      if (el) {
        const rect = el.getBoundingClientRect();
        const onScreen = rect.bottom > 0 && rect.top < window.innerHeight;
        setIsVisible(isDocumentVisible && onScreen);
      }
    };

    observer.observe(el);
    document.addEventListener("visibilitychange", handleVisibilityChange, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`shader-frame${className ? ` ${className}` : ""} will-change-transform`}
      style={{
        contain: "paint layout",
      }}
    >
      {isVisible && <LandscapeScene variant="snow" />}
    </div>
  );
}

export default Scene;
