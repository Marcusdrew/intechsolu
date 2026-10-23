import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("fr-FR"));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.6, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-baseline gap-1 font-display text-5xl font-bold tracking-tight text-background md:text-6xl">
        <motion.span>{rounded}</motion.span>
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-sm uppercase tracking-wider text-background/60">{label}</div>
    </motion.div>
  );
}
