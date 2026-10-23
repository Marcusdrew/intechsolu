import { motion } from "motion/react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start";
  const titleColor = invert ? "text-background" : "text-foreground";
  const descColor = invert ? "text-background/70" : "text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed md:text-lg ${descColor}`}>{description}</p>
      )}
    </motion.div>
  );
}
