import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import { getPost, BLOG_POSTS } from "@/data/misc";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const p = getPost(params.slug);
    const title = p ? `${p.title} — Innov Tech Solutions` : "Article";
    return {
      meta: [
        { title },
        { name: "description", content: p?.excerpt ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.excerpt ?? "" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-wide py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Article introuvable</h1>
      <Button asChild className="mt-6"><Link to="/blog">Retour au blog</Link></Button>
    </div>
  ),
  errorComponent: () => (
    <div className="container-wide py-32 text-center">
      <h1 className="font-display text-3xl font-bold">Une erreur est survenue</h1>
    </div>
  ),
  component: PostDetail,
});

function PostDetail() {
  const { slug } = Route.useParams();
  const post = getPost(slug)!;
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <article className="container-wide max-w-3xl py-16 md:py-20">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
          <ArrowLeft className="h-4 w-4" /> Tous les articles
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingTime}</span>
        </div>

        <div className="prose-content mt-10 space-y-6">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="text-base leading-relaxed text-foreground/85">{block}</p>
            );
          })}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-surface py-20">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">À lire aussi</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent/40"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner title="Une question sur ce sujet ?" description="Nos équipes sont disponibles pour échanger sur votre contexte." />
    </>
  );
}
