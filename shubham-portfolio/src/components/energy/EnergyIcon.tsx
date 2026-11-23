import { energySymbols, type SymbolKey } from "./symbols";

type Props = {
  name: SymbolKey;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

/** One line-art energy symbol. Colour comes from CSS (currentColor). */
export default function EnergyIcon({ name, size = 28, className = "", strokeWidth = 2.4 }: Props) {
  const symbol = energySymbols[name];
  return (
    <svg
      className={`energy-icon tone-${symbol.tone} icon-${name} ${className}`}
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: symbol.inner }}
    />
  );
}
