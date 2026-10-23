import logoAsset from "@/assets/it-logo.png.asset.json";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="Innov Tech Solutions"
      width={180}
      height={72}
      className={`h-10 w-auto md:h-11 ${variant === "light" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
