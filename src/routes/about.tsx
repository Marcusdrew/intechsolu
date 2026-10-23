import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import aboutTeam from "@/assets/about-team.jpg";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { VALUES, VISION, MISSION } from "@/data/site";
import { LEADER } from "@/data/misc";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Innov Tech Solutions" },
      { name: "description", content: "Notre histoire, notre mission et l'équipe derrière Innov Tech Solutions." },
      { property: "og:title", content: "À propos — Innov Tech Solutions" },
      { property: "og:description", content: "Notre histoire, notre mission et l'équipe derrière Innov Tech Solutions." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});



function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={<>Plus qu'un prestataire, <span className="text-gradient-gold">votre partenaire technologique</span>.</>}
        description="Société par Actions Simplifiées (SAS) fondée à Kinshasa, Innov Tech Solutions s'appuie sur plus de 20 ans d'expertise pour devenir un acteur de premier plan de l'IT, de la FinTech et des télécommunications."
      />


      {/* IMAGE + INTRO */}
      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-elegant"
          >
            <img src={aboutTeam} alt="Notre équipe" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/30 to-transparent" />
          </motion.div>
          <div>
            <SectionHeader
              eyebrow="Notre histoire"
              title="Une entreprise née de l'innovation, de la technologie et de l'engagement."
              description="Constituée en SAS au cœur de Kinshasa, Innov Tech Solutions s'est construite sur une base d'innovation et d'engagement à fournir des solutions numériques de haute qualité, en RDC comme à l'international. L'entreprise s'est spécialisée dans le déploiement de centres de données complexes, le développement de logiciels, les systèmes ERP, les solutions bancaires (FinTech), le data mining & business intelligence basés sur l'IA, la sécurité numérique et les solutions de télécommunications."
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Notre vision : doter les entreprises de solutions technologiques de pointe pour garder
              une longueur d'avance dans un monde de plus en plus concurrentiel et numérique — en mettant
              l'accent sur la transformation, la sécurité et l'évolutivité.
            </p>

          </div>
        </div>
      </section>



      {/* VALUES */}
      <section className="bg-surface py-24 md:py-28">
        <div className="container-wide">
          <SectionHeader eyebrow="Nos valeurs" title="Quatre principes qui guident chaque décision." align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="font-display text-3xl font-bold text-gradient-gold">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="container-wide py-24 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-2xl bg-gradient-navy p-8 text-background shadow-elegant md:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Notre vision</span>
            <p className="mt-5 text-lg leading-relaxed text-background/85">{VISION}</p>
          </div>
          <div>
            <SectionHeader eyebrow="Notre mission" title="Neuf engagements qui guident notre action." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {MISSION.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (i % 2) * 0.08 }}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="font-display text-sm font-bold text-gradient-gold">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-base font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORD FROM THE CEO */}
      <section className="bg-surface py-24 md:py-28">
        <div className="container-wide">
          <SectionHeader eyebrow="Mot du Directeur Général" title="Donnons vie à vos idées à travers la technologie." align="center" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-elegant md:p-12"
          >
            {LEADER.message.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4 text-base leading-relaxed text-muted-foreground last:mb-0">
                {para}
              </p>
            ))}
            <div className="mt-8 border-t border-border pt-6">
              <div className="font-display text-lg font-semibold text-foreground">{LEADER.name}</div>
              <div className="text-sm text-accent">{LEADER.role}</div>
            </div>
          </motion.div>
        </div>
      </section>


      <CTABanner
        eyebrow="Rejoignez l'aventure"
        title="Envie de travailler avec nous — ou chez nous ?"
        description="Clients, partenaires, talents : nous serons ravis d'échanger."
      />
    </>
  );
}
