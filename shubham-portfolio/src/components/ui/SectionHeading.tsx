type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  number: string;
  total?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  number,
  total = "06"
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <span className="section-number">
        {number} / {total}
      </span>
    </div>
  );
}
