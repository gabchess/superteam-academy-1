type StreakCalendarProps = {
  activeDays: string[];
};

export function StreakCalendar({ activeDays }: StreakCalendarProps): JSX.Element {
  const set = new Set(activeDays);
  const today = new Date();
  const items = Array.from({ length: 14 }).map((_, index) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (13 - index));
    const key = d.toISOString().slice(0, 10);
    return { key, active: set.has(key) };
  });

  return (
    <div className="grid grid-cols-7 gap-2">
      {items.map((item) => (
        <div
          key={item.key}
          className={`h-8 rounded-md border ${item.active ? "bg-primary/40 border-primary" : "bg-muted/40"}`}
          title={item.key}
        />
      ))}
    </div>
  );
}
