import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { PROCESS } from "@/data/site";
import { motion } from "motion/react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Innov Tech Solutions" },
      { name: "description", content: "Réseaux & datacenters, développement logiciel, cybersécurité, ERP & BI — quatre métiers, une exigence." },
      { property: "og:title", content: "Services — Innov Tech Solutions" },
      { property: "og:description", content: "Quatre métiers, une exigence : que ça marche." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={<>Quatre métiers. <span className="text-gradient-gold">Une seule exigence.</span></>}
        description="De l'infrastructure aux applications métier, nous couvrons toute la chaîne de valeur IT — avec la même rigueur sur chaque mission."
      >
        <Button asChild size="lg" className="gap-2 bg-gold text-gold-foreground hover:bg-gold/90">
          <Link to="/contact">Discuter de votre besoin <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </PageHero>

      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-24 md:py-28">
        <div className="container-wide">
          <SectionHeader eyebrow="Notre méthode" title="Une approche en 4 étapes, du cadrage à l'exploitation." align="center" />
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card p-8"
              >
                <div className="font-display text-xs font-semibold tracking-[0.2em] text-accent">{step.step}</div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Un projet en tête ?"
        description="Nous adorons les défis techniques bien posés. Décrivez le vôtre, nous vous répondons sous 24h."
      />
    </>
  );
}
