import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-background/85 grain">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="container-wide relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-background/65">
            {SITE.description}
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" aria-label="LinkedIn" className="rounded-md border border-background/15 p-2 text-background/70 transition hover:border-gold/60 hover:text-gold">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-md border border-background/15 p-2 text-background/70 transition hover:border-gold/60 hover:text-gold">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-md border border-background/15 p-2 text-background/70 transition hover:border-gold/60 hover:text-gold">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-background">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-background/65 transition hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-background">Entreprise</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-background/65 transition hover:text-gold">À propos</Link></li>
            <li><Link to="/partenaires" className="text-background/65 transition hover:text-gold">Partenaires</Link></li>
            <li><Link to="/blog" className="text-background/65 transition hover:text-gold">Blog</Link></li>
            <li><Link to="/contact" className="text-background/65 transition hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-background">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-background/75">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-2.5 text-background/75">
              <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2.5 text-background/75">
              <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
              <a href={`tel:${SITE.phone}`} className="hover:text-gold">{SITE.phone}</a>
            </li>
            <li className="pt-1 text-xs text-background/55">{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-background/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
}
