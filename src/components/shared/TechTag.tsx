interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-text-secondary">
      {label}
    </span>
  );
}
