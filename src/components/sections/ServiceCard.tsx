import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
      >
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/5 transition-all duration-500 group-hover:bg-accent/10 group-hover:scale-150" />

        <div className="relative flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-navy text-gold">
            <ServiceIcon name={service.icon} className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <h3 className="relative mt-6 font-display text-xl font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.short}
        </p>

        <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          En savoir plus
        </div>
      </Link>
    </motion.div>
  );
}
