import type { Achievement } from "@/lib/gamification/achievements";

type AchievementGridProps = {
  items: Achievement[];
};

export function AchievementGrid({ items }: AchievementGridProps): JSX.Element {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <article key={item.id} className="rounded-md border p-3">
          <p className="text-sm font-medium">{item.title}</p>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
