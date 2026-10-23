import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Clock, User } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Input } from "@/components/ui/input";
import { BLOG_POSTS, type BlogPost } from "@/data/misc";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & actualités — Innov Tech Solutions" },
      { name: "description", content: "Analyses, retours d'expérience et actualités IT par les équipes Innov Tech Solutions." },
      { property: "og:title", content: "Blog & actualités — Innov Tech Solutions" },
      { property: "og:description", content: "Analyses et retours d'expérience IT." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const CATEGORIES = ["Tous", "Cybersécurité", "Cloud", "ERP", "Stratégie IT", "Innovation"] as const;

function BlogPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Tous");

  const posts = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchCat = cat === "Tous" || p.category === cat;
      const q = query.toLowerCase();
      const matchQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, cat]);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Blog & actualités"
        title={<>Analyses, <span className="text-gradient-gold">retours d'expérience</span>, points de vue.</>}
        description="Nos équipes partagent ce qu'elles observent sur le terrain — sans langue de bois."
      />

      <section className="container-wide py-16 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  c === cat
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <Input
            placeholder="Rechercher un article…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="md:w-72"
          />
        </div>

        {posts.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">Aucun article ne correspond à votre recherche.</p>
        ) : (
          <>
            {featured && <FeaturedCard post={featured} />}
            {rest.length > 0 && (
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((p, i) => <BlogCard key={p.slug} post={p} index={i} />)}
              </div>
            )}
          </>
        )}
      </section>

      <CTABanner title="Une question, un sujet à traiter ?" description="Suggérez-nous un thème — nous adorons écrire sur ce qui vous tient à cœur." />
    </>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="group grid gap-8 overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40 hover:shadow-elegant md:grid-cols-[1.2fr_1fr] md:p-8"
      >
        <div className="order-2 flex flex-col justify-center md:order-1">
          <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            À la une · {post.category}
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-foreground md:text-3xl">
            {post.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readingTime}</span>
            <span>{post.date}</span>
          </div>
        </div>
        <div className="order-1 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-navy md:order-2" />
      </Link>
    </motion.div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
      >
        <div className="aspect-[16/10] bg-gradient-navy" />
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">{post.category}</span>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">{post.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readingTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
