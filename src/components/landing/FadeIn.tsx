"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ElementType, ReactNode } from "react";

type MotionComponent = React.ComponentType<HTMLMotionProps<"div">>;

const cache = new Map<ElementType, MotionComponent>();

function getMotionComponent(as: ElementType) {
  if (!cache.has(as)) cache.set(as, motion.create(as) as MotionComponent);
  return cache.get(as)!;
}

type FadeInProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

export default function FadeIn({
  children,
  as = "div",
  className,
  style,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const Component = getMotionComponent(as);

  return (
    // eslint-disable-next-line react-hooks/static-components
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}
