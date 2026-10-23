import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceIcon } from "@/components/sections/ServiceIcon";
import { CTABanner } from "@/components/sections/CTABanner";

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getService, SERVICES } from "@/data/services";


export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const s = getService(params.slug);
    const title = s ? `${s.title} — Innov Tech Solutions` : "Service";
    return {
      meta: [
        { title },
        { name: "description", content: s?.short ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: s?.short ?? "" },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-wide py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Service introuvable</h1>
      <Button asChild className="mt-6"><Link to="/services">Tous les services</Link></Button>
    </div>
  ),
  errorComponent: () => (
    <div className="container-wide py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Une erreur est survenue</h1>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.promise}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2 bg-gold text-gold-foreground hover:bg-gold/90">
            <Link to="/contact">Demander un devis <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background">
            <Link to="/contact">Parler à un expert</Link>
          </Button>
        </div>
      </PageHero>

      {/* IMAGE STRIP */}
      <section className="bg-navy-deep">
        <div className="relative h-72 overflow-hidden md:h-96">
          <img src={service.image} alt={service.title} width={1280} height={800} loading="lazy" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="container-wide py-24 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-navy text-gold">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Notre offre
            </h2>
            <p className="mt-4 text-muted-foreground">{service.short}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {service.offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <Check className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="bg-surface py-20">
        <div className="container-wide">
          <SectionHeader eyebrow="Technologies & partenaires" title="Les outils que nous maîtrisons sur cette expertise." />
          <div className="mt-10 flex flex-wrap gap-3">
            {service.tech.map((t) => (
              <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-surface py-24 md:py-28">
        <div className="container-wide max-w-3xl">
          <SectionHeader eyebrow="Questions fréquentes" title="On répond avant que vous ne posiez la question." />
          <Accordion type="single" collapsible className="mt-10">
            {service.faq.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="container-wide py-20">
        <SectionHeader eyebrow="Autres expertises" title="Continuez à explorer." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition hover:border-accent/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-navy text-gold">
                  <ServiceIcon name={s.icon} className="h-4 w-4" />
                </div>
                <span className="font-display font-semibold text-foreground">{s.title}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </section>

      <CTABanner title="On en discute ?" description="Décrivez votre contexte, nous revenons vers vous sous 24h avec une première lecture." />
    </>
  );
}

function serviceLabel(slug: string) {
  switch (slug) {
    case "reseaux": return "Réseaux";
    case "developpement": return "Développement";
    case "cybersecurite": return "Cybersécurité";
    case "erp-bi": return "ERP & BI";
    default: return "" as never;
  }
}
