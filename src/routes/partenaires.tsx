import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { PARTNERS, REFERENCES } from "@/data/misc";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Partenaires — Innov Tech Solutions" },
      { name: "description", content: "Nos partenaires technologiques et certifications." },
      { property: "og:title", content: "Partenaires — Innov Tech Solutions" },
      { property: "og:description", content: "Un écosystème solide qui garantit la pérennité de vos solutions." },
      { property: "og:url", content: "/partenaires" },
    ],
    links: [{ rel: "canonical", href: "/partenaires" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partenaires & certifications"
        title={<>Un <span className="text-gradient-gold">écosystème</span> qui garantit la pérennité de vos solutions.</>}
        description="Nous nous appuyons sur les meilleurs acteurs technologiques mondiaux et tenons à jour les certifications qui font la différence sur le terrain."
      />

      <section className="container-wide py-20 md:py-28">
        <SectionHeader eyebrow="Nos partenaires" title="Les technologies sur lesquelles nous nous appuyons." />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i % 4) * 0.05 }}
              className="group flex h-36 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
            >
              <img
                src={p.logo}
                alt={p.name}
                loading="lazy"
                className="max-h-16 w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
              />
              <span className="text-xs font-medium text-muted-foreground">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Nos références"
            title="Des institutions et entreprises qui nous font confiance."
            description="Administrations, banques et opérateurs nous confient leurs projets les plus stratégiques."
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {REFERENCES.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 4) * 0.05 }}
                className="group flex h-36 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
              >
                <img
                  src={r.logo}
                  alt={r.name}
                  loading="lazy"
                  className="max-h-16 w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
                />
                <span className="text-xs font-medium text-muted-foreground">{r.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <CTABanner title="Travaillons ensemble." description="Un projet de partenariat ou de co-innovation ? Parlons-en." />
    </>
  );
}
