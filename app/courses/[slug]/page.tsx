"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModuleList } from "@/components/courses/ModuleList";
import { XPBar } from "@/components/gamification/XPBar";
import { mockCourses } from "@/lib/content/courses";
import { useI18n } from "@/lib/i18n/provider";

type CourseDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function CourseDetailPage({ params }: CourseDetailPageProps): JSX.Element {
  const { t } = useI18n();
  const course = mockCourses.find((entry) => entry.slug === params.slug);

  if (!course) {
    notFound();
  }

  const demoCompletedLessons = Math.floor(course.totalLessons * 0.35);

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[2fr_1fr]">
      <section className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-muted-foreground">{course.description}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("courses.detail.progress")}</CardTitle>
            <CardDescription>
              {demoCompletedLessons} / {course.totalLessons} {t("common.lessons")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <XPBar value={demoCompletedLessons} max={course.totalLessons} />
          </CardContent>
        </Card>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">{t("courses.detail.modules")}</h2>
          <ModuleList course={course} />
        </div>
      </section>

      <aside className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>{t("courses.detail.overview")}</CardTitle>
            <CardDescription>{course.topic}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {course.durationHours}h · {course.xpReward} XP
            </p>
            <Button className="w-full">{t("courses.detail.enrollmentCta")}</Button>
            <Button asChild variant="outline" className="w-full">
              <Link href={`/courses/${course.slug}/lessons/1`}>{t("common.continue")}</Link>
            </Button>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
