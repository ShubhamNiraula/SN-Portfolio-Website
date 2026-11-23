"use client";

import { MotionConfig } from "framer-motion";

/** Turns animations off for visitors who chose "reduce motion" on their device. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
