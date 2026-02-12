type XPBarProps = {
  value: number;
  max: number;
};

export function XPBar({ value, max }: XPBarProps): JSX.Element {
  const safeMax = Math.max(1, max);
  const percent = Math.max(0, Math.min(100, Math.floor((value / safeMax) * 100)));

  return (
    <div className="space-y-1">
      <div className="h-2 w-full rounded-full bg-muted">
        <div className="h-2 rounded-full bg-primary" style={{ width: `${percent}%` }} />
      </div>
      <p className="text-xs text-muted-foreground">{percent}%</p>
    </div>
  );
}
