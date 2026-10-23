import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CTABannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CTABanner({
  eyebrow = "Passons à l'action",
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Discuter de votre projet",
}: CTABannerProps) {
  return (
    <section className="container-wide py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-navy px-8 py-16 text-center shadow-elegant md:px-16 md:py-24 grain"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-background md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-background/75 md:text-lg">{description}</p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="gap-2 bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to={primaryHref}>
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background">
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
