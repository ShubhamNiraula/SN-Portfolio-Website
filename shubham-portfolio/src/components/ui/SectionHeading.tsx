import EnergyIcon from "@/components/energy/EnergyIcon";
import type { SymbolKey } from "@/components/energy/symbols";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  number?: string;
  icon?: SymbolKey;
};

export default function SectionHeading({ eyebrow, title, number, icon }: SectionHeadingProps) {
  return (
    <Reveal className="section-head">
      <span className="kicker">
        {icon && <EnergyIcon name={icon} size={22} className="head-icon" />}
        {number && <span className="num">{number}</span>}
        <span>{eyebrow}</span>
      </span>
      <h2>{title}</h2>
    </Reveal>
  );
}
