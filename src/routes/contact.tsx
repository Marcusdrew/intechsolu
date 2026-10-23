import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Innov Tech Solutions" },
      { name: "description", content: "Parlons de votre projet IT. Réponse garantie sous 24h ouvrées." },
      { property: "og:title", content: "Contact — Innov Tech Solutions" },
      { property: "og:description", content: "Parlons de votre projet IT. Réponse garantie sous 24h ouvrées." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Nom trop court"),
  company: z.string().min(1, "Société requise"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Sujet requis"),
  message: z.string().min(10, "Message trop court (10 caractères minimum)"),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      toast.error("Merci de corriger les champs en erreur.");
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Message envoyé. Nous revenons vers vous sous 24h.");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Parlons de votre <span className="text-gradient-gold">projet</span>.</>}
        description="Un échange de 30 minutes suffit pour identifier les premiers leviers. Sans engagement, sans jargon."
      />

      <section className="container-wide py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-elegant md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle2 className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Message bien reçu</h3>
                <p className="max-w-md text-muted-foreground">
                  Merci pour votre message. Un membre de notre équipe vous recontacte sous 24h ouvrées.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Envoyer un autre message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nom complet *" name="name" error={errors.name} />
                  <Field label="Société *" name="company" error={errors.company} />
                  <Field label="Email *" name="email" type="email" error={errors.email} />
                  <Field label="Téléphone" name="phone" type="tel" error={errors.phone} />
                </div>
                <Field label="Sujet *" name="subject" error={errors.subject} />
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Décrivez brièvement votre contexte et votre besoin…"
                    className="mt-2"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  Envoyer le message <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* INFO */}
          <div className="space-y-4">
            <InfoCard icon={Mail} title="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <InfoCard icon={Phone} title="Téléphone" value={SITE.phone} href={`tel:${SITE.phone}`} />
            <InfoCard icon={MapPin} title="Adresse" value={SITE.address} />
            <InfoCard icon={Clock} title="Horaires" value={SITE.hours} />

            <div className="rounded-2xl bg-gradient-navy p-6 text-background shadow-elegant">
              <h3 className="font-display text-lg font-semibold">Engagement de réponse</h3>
              <p className="mt-2 text-sm text-background/75">
                Chaque demande reçoit une première réponse humaine sous 24h ouvrées —
                qu'il s'agisse d'un devis, d'un audit ou simplement d'une question.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} className="mt-2" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, href }: { icon: typeof Mail; title: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-accent/40">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-navy text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1 font-display font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}
