import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroAsset from "@/assets/hero-tech.jpg.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import teamOnsite from "@/assets/team-onsite.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StatCounter } from "@/components/sections/StatCounter";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CTABanner } from "@/components/sections/CTABanner";
import { SERVICES } from "@/data/services";
import { STATS, VALUES, PROCESS, SITE } from "@/data/site";
import { REFERENCES } from "@/data/misc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden bg-navy-deep text-background">
        <img
          src={heroAsset.url}
          alt="Centre de données moderne"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/70 to-navy-deep" />
        <div className="absolute inset-0 grain" />

        <div className="container-wide relative flex min-h-screen flex-col justify-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
              Donnons vie aux idées et à l'innovation grâce à la{" "}
              <span className="text-gradient-gold">technologie</span>.
            </h1>


            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-background/80 md:text-xl">
              Réseaux, logiciels sur-mesure, cybersécurité, ERP & BI. Nous concevons,
              déployons et exploitons l'IT qui transforme votre activité — en RDC et à l'international.
            </p>


            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="gap-2 bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/services">
                  Découvrir nos services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background">
                <Link to="/contact">Parler à un expert</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-background/55">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em]">Découvrir</span>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="bg-background pt-20 md:pt-24">
        <div className="container-wide">
          <SectionHeader eyebrow="Nos partenaires" title="Les technologies des plus grands acteurs mondiaux." align="center" />
        </div>
        <div className="mt-12">
          <LogoMarquee />
        </div>
      </section>

      {/* REFERENCES MARQUEE */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-wide">
          <SectionHeader eyebrow="Nos références" title="Ils nous font déjà confiance." align="center" />
        </div>
        <div className="mt-12">
          <LogoMarquee items={REFERENCES} speed={48} reverse />
        </div>
      </section>


      {/* STATS */}
      <section className="relative overflow-hidden bg-gradient-navy py-20 text-background md:py-24 grain">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-wide relative grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-wide py-24 md:py-32">
        <SectionHeader
          eyebrow="Nos expertises"
          title="Quatre métiers, une exigence : que ça marche."
          description="De l'infrastructure aux applications métier, nous couvrons toute la chaîne de valeur IT — avec la même rigueur sur le premier câble comme sur la dernière ligne de code."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* TEAM ON THE GROUND */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              src={teamOnsite.url}
              alt="Nos ingénieurs en intervention chez un client"
              loading="lazy"
              className="mt-8 h-full w-full rounded-2xl object-cover shadow-elegant"
            />
            <motion.img
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              src={teamMeeting.url}
              alt="Échange terrain avec les équipes client"
              loading="lazy"
              className="h-full w-full rounded-2xl object-cover shadow-elegant"
            />
          </div>
          <SectionHeader
            eyebrow="Sur le terrain"
            title="Une équipe présente, là où ça compte."
            description="Nos ingénieurs interviennent directement chez nos clients — installation, supervision, accompagnement. La proximité n'est pas un argument marketing, c'est notre quotidien."
          />
        </div>
      </section>


      {/* PROCESS */}
      <section className="container-wide py-24 md:py-32">
        <SectionHeader
          eyebrow="Notre approche"
          title="Une méthode éprouvée, sans surprise."
          description="Chaque mission suit la même rigueur : comprendre avant de proposer, livrer par étapes, accompagner sur la durée."
          align="center"
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative bg-card p-8 transition hover:bg-surface"
            >
              <div className="font-display text-xs font-semibold tracking-[0.2em] text-accent">{step.step}</div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES / WHY US */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            eyebrow="Pourquoi nous choisir"
            title="Une équipe locale, des standards internationaux."
            description="Nous combinons la proximité d'un partenaire de terrain avec les certifications et méthodes des plus grands acteurs."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gold/15 font-display text-sm font-bold text-gold">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-wide py-24 md:py-32">
        <SectionHeader
          eyebrow="Ils nous font confiance"
          title="Ce que nos clients disent."
          align="center"
        />
        <div className="mt-14">
          <TestimonialCarousel />
        </div>
      </section>

      <CTABanner
        title="Prêt à transformer votre IT ?"
        description="Un échange de 30 minutes suffit pour identifier les premiers leviers. Sans engagement."
      />
    </>
  );
}
