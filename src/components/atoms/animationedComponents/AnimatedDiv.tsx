import { motion as m, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, ReactNode, CSSProperties } from "react";

// Interface defining the props for the AnimatedDiv component
interface AnimatedDivProps {
  children: ReactNode; // Children elements of the AnimatedDiv component
  className?: string; // Optional className for the div element
  style?: CSSProperties; // Optional inline CSS styles for the div element
  delay?: number; // Optional delay for the animation start (in seconds)
}

/**
 *  AnimatedDiv component is a wrapper that animates its children using Framer Motion
 */

// ... import statements

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  className,
  style,
  delay = 0.25,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Variants defining the animation states for the div element
  const variants: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  };

  const controls = useAnimation();
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      controls.start("animate");
    } else {
      mounted.current = true;
    }
  }, [controls]);

  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={controls}
      // initial="initial"
      // exit="exit"
      // variants={variants}
      transition={{ delay, duration: 0.5 }}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  );
};

export default AnimatedDiv;
