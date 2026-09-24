import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

const styles = {
  wrapper: {
    display: 'inline-block',
    whiteSpace: 'pre-wrap' as const,
  },
  srOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden' as const,
    clip: 'rect(0,0,0,0)',
    border: 0,
    visibility: 'hidden' as const,
  },
};

export interface DecryptedTextProps extends HTMLMotionProps<'span'> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover' | 'inViewHover' | 'click';
  clickMode?: 'once' | 'toggle';
}

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 14,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~<>/?',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'inViewHover',
  clickMode = 'once',
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(() => new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerRef = useRef<HTMLSpanElement>(null);
  const revealedRef = useRef<Set<number>>(new Set());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimatingRef = useRef(false);

  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
      : characters.split('');
  }, [useOriginalCharsOnly, text, characters]);

  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(i)) return originalText[i];
          const randomIndex = Math.floor(Math.random() * availableChars.length);
          return availableChars[randomIndex] || char;
        })
        .join('');
    },
    [availableChars]
  );

  const computeOrder = useCallback(
    (len: number) => {
      const order: number[] = [];
      if (len <= 0) return order;
      if (revealDirection === 'start') {
        for (let i = 0; i < len; i++) order.push(i);
        return order;
      }
      if (revealDirection === 'end') {
        for (let i = len - 1; i >= 0; i--) order.push(i);
        return order;
      }
      // center reveal
      const middle = Math.floor(len / 2);
      let offset = 0;
      while (order.length < len) {
        if (offset % 2 === 0) {
          const idx = middle + Math.floor(offset / 2);
          if (idx >= 0 && idx < len && !order.includes(idx)) order.push(idx);
        } else {
          const idx = middle - Math.ceil(offset / 2);
          if (idx >= 0 && idx < len && !order.includes(idx)) order.push(idx);
        }
        offset++;
      }
      for (let i = 0; i < len; i++) {
        if (!order.includes(i)) order.push(i);
      }
      return order.slice(0, len);
    },
    [revealDirection]
  );

  const startAnimation = useCallback(() => {
    if (isAnimatingRef.current) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const order = sequential ? computeOrder(text.length) : [];
    const emptySet = new Set<number>();
    revealedRef.current = emptySet;
    setRevealedIndices(new Set(emptySet));
    setIsDecrypted(false);
    setIsAnimating(true);
    isAnimatingRef.current = true;

    // Immediately scramble on frame 0
    setDisplayText(shuffleText(text, emptySet));

    let iteration = 0;
    let orderIndex = 0;
    // Initial scramble ticks before starting character lock-in (e.g. 2 ticks = ~70ms)
    const initialScrambleTicks = 2;

    intervalRef.current = setInterval(() => {
      iteration++;

      if (sequential) {
        if (iteration > initialScrambleTicks) {
          if (orderIndex < order.length) {
            const nextIdx = order[orderIndex];
            const updated = new Set(revealedRef.current);
            updated.add(nextIdx);
            revealedRef.current = updated;
            setRevealedIndices(new Set(updated));
            orderIndex++;
          }
        }

        // Check if all characters in order have been revealed
        if (revealedRef.current.size >= text.length || orderIndex >= order.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          isAnimatingRef.current = false;
          setIsAnimating(false);
          setIsDecrypted(true);
          setDisplayText(text);
          const fullSet = new Set<number>();
          for (let i = 0; i < text.length; i++) fullSet.add(i);
          revealedRef.current = fullSet;
          setRevealedIndices(fullSet);
          return;
        }

        // Scramble remaining unrevealed characters on every tick
        setDisplayText(shuffleText(text, revealedRef.current));
      } else {
        // Non-sequential scramble mode: scramble all for maxIterations, then reveal
        setDisplayText(shuffleText(text, revealedRef.current));
        if (iteration >= maxIterations) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          isAnimatingRef.current = false;
          setIsAnimating(false);
          setIsDecrypted(true);
          setDisplayText(text);
          const fullSet = new Set<number>();
          for (let i = 0; i < text.length; i++) fullSet.add(i);
          revealedRef.current = fullSet;
          setRevealedIndices(fullSet);
        }
      }
    }, speed);
  }, [computeOrder, maxIterations, sequential, shuffleText, speed, text]);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Sync if text changes
  useEffect(() => {
    setDisplayText(text);
    const fullSet = new Set<number>();
    for (let i = 0; i < text.length; i++) fullSet.add(i);
    revealedRef.current = fullSet;
    setRevealedIndices(fullSet);
  }, [text]);

  // View Observer
  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'inViewHover') return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1,
    });

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [animateOn, hasAnimated, startAnimation]);

  const handleMouseEnter = useCallback(() => {
    if (animateOn === 'hover' || animateOn === 'inViewHover') {
      startAnimation();
    }
  }, [animateOn, startAnimation]);

  const handleClick = useCallback(() => {
    if (animateOn === 'click' || animateOn === 'inViewHover' || animateOn === 'hover') {
      startAnimation();
    }
  }, [animateOn, startAnimation]);

  return (
    <motion.span
      className={parentClassName}
      ref={containerRef}
      style={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startAnimation();
        }
      }}
      {...props}
    >
      <span style={styles.srOnly}>{text}</span>

      <span aria-hidden="true" className="inline-flex flex-wrap items-center">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || (!isAnimating && isDecrypted);

          return (
            <span
              key={index}
              className={`inline-block transition-colors duration-100 ${
                isRevealedOrDone ? className : encryptedClassName
              }`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
