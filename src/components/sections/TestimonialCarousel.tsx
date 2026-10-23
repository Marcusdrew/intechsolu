import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/misc";

export function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <div className="relative mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 md:p-12 shadow-elegant">
      <Quote className="absolute right-8 top-8 h-16 w-16 text-accent/10 md:h-24 md:w-24" />
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={idx}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4 }}
          className="relative space-y-6"
        >
          <p className="font-display text-xl leading-snug text-foreground md:text-2xl">
            « {t.quote} »
          </p>
          <footer className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-navy" />
            <div>
              <div className="font-semibold text-foreground">{t.author}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </footer>
        </motion.blockquote>
      </AnimatePresence>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-accent" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            aria-label="Précédent"
            className="rounded-md border border-border p-2 text-muted-foreground transition hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
            aria-label="Suivant"
            className="rounded-md border border-border p-2 text-muted-foreground transition hover:border-accent hover:text-accent"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
