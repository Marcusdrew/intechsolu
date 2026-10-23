import { PARTNERS, type Logo } from "@/data/misc";

type LogoMarqueeProps = {
  items?: Logo[];
  speed?: number;
  reverse?: boolean;
};

export function LogoMarquee({ items = PARTNERS, speed = 40, reverse = false }: LogoMarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />
      <div
        className="flex w-max items-center gap-16 whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex h-20 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 shadow-sm md:h-24 md:px-8"
          >
            <img
              src={item.logo}
              alt={item.name}
              loading="lazy"
              className="h-12 w-auto max-w-[180px] object-contain transition duration-300 hover:scale-105 md:h-16"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
