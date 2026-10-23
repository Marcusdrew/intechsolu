import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { NAV } from "@/data/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:pt-4">
      <div
        className={`container-wide flex h-14 items-center justify-between rounded-full border px-3 pl-5 transition-all duration-300 md:h-16 md:pl-6 ${
          scrolled
            ? "border-border/70 bg-background/80 shadow-elegant backdrop-blur-xl"
            : "border-white/15 bg-background/55 backdrop-blur-md"
        }`}
      >
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-muted text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">
              Parler à un expert <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="container-wide mt-2 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-elegant backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 p-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                activeProps={{ className: "bg-muted text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full rounded-full">
              <Link to="/contact">Parler à un expert</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
