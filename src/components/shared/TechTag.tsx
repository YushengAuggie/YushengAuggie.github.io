interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-full bg-primary-light/30 px-3 py-1 text-xs font-medium text-primary-dark">
      {label}
    </span>
  );
}
