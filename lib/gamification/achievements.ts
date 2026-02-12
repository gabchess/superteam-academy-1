export type AchievementCategory = "progress" | "streak" | "skills" | "community" | "special";

export type Achievement = {
  id: number;
  key: string;
  title: string;
  description: string;
  category: AchievementCategory;
};

export const achievements: Achievement[] = [
  {
    id: 0,
    key: "first_lesson",
    title: "First Lesson",
    description: "Complete your first lesson.",
    category: "progress"
  },
  {
    id: 1,
    key: "streak_7",
    title: "7-Day Streak",
    description: "Stay active for seven days in a row.",
    category: "streak"
  },
  {
    id: 2,
    key: "challenge_master",
    title: "Challenge Master",
    description: "Pass all tests in a coding challenge.",
    category: "skills"
  }
];

export function unlockedAchievements(achievementIds: number[]): Achievement[] {
  const set = new Set(achievementIds);
  return achievements.filter((achievement) => set.has(achievement.id));
}
