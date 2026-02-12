"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeEditor } from "@/components/editor/CodeEditor";
import { TestRunner, type TestCase } from "@/components/editor/TestRunner";
import { calculateChallengeXP } from "@/lib/gamification/xp";
import { useI18n } from "@/lib/i18n/provider";

const testCases: TestCase[] = [
  { id: "1", name: "Derive PDA for user profile", expectedSnippet: "findProgramAddress" },
  { id: "2", name: "Use async transaction send", expectedSnippet: "await" },
  { id: "3", name: "Return explorer link", expectedSnippet: "https://explorer.solana.com" }
];

const starterCode = `import { PublicKey } from "@solana/web3.js";

export async function completeChallenge(user: PublicKey): Promise<string> {
  // TODO: implement
  return "";
}
`;

export function ChallengePanel(): JSX.Element {
  const { t } = useI18n();
  const [code, setCode] = useState(starterCode);
  const [hasRun, setHasRun] = useState(false);

  const passedCount = useMemo(() => {
    return testCases.reduce((count, testCase) => count + Number(code.includes(testCase.expectedSnippet)), 0);
  }, [code]);

  const awardedXP = hasRun ? calculateChallengeXP(passedCount, testCases.length) : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("lesson.challengeTitle")}</CardTitle>
        <CardDescription>{t("lesson.testCasesLabel")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <CodeEditor value={code} onChange={setCode} />
        <Button onClick={() => setHasRun(true)}>{t("common.runTests")}</Button>
        <TestRunner testCases={testCases} code={code} hasRun={hasRun} />
        <p className="text-sm text-muted-foreground">
          {t("lesson.xpAwarded")}: {awardedXP} XP
        </p>
      </CardContent>
    </Card>
  );
}
