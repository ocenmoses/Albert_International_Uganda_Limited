import type { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in";
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimation = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        {
          "opacity-0 translate-y-4": animation === "fade-up" && !isVisible,
          "opacity-0 -translate-y-4": animation === "fade-down" && !isVisible,
          "opacity-0 translate-x-4": animation === "fade-right" && !isVisible,
          "opacity-0 -translate-x-4": animation === "fade-left" && !isVisible,
          "opacity-0 scale-95": animation === "scale-in" && !isVisible,
          "opacity-0": animation === "fade-in" && !isVisible,
          "opacity-100 translate-y-0 translate-x-0 scale-100": isVisible,
        },
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
