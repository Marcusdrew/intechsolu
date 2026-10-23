import { Network, Code2, ShieldCheck, BarChart3 } from "lucide-react";

const map = {
  network: Network,
  code: Code2,
  shield: ShieldCheck,
  "bar-chart": BarChart3,
} as const;

type IconKey = keyof typeof map;

export function ServiceIcon({ name, className = "" }: { name: IconKey; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} />;
}
