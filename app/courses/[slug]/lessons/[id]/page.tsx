"use client";

import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChallengePanel } from "@/components/editor/ChallengePanel";
import { mockCourses } from "@/lib/content/courses";
import { useI18n } from "@/lib/i18n/provider";

type LessonPageProps = {
  params: {
    slug: string;
    id: string;
  };
};

export default function LessonPage({ params }: LessonPageProps): JSX.Element {
  const { t } = useI18n();
  const course = mockCourses.find((entry) => entry.slug === params.slug);
  const lessonId = Number(params.id);

  if (!course || Number.isNaN(lessonId) || lessonId <= 0) {
    notFound();
  }

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 lg:grid-cols-2">
      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>
              {t("lesson.contentTitle")} #{lessonId}
            </CardTitle>
            <CardDescription>{course.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>{t("lesson.introLine1")}</p>
            <p>{t("lesson.introLine2")}</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <ChallengePanel />
      </section>
    </div>
  );
}
