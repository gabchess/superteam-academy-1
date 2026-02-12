"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

export type TestCase = {
  id: string;
  name: string;
  expectedSnippet: string;
};

type TestRunnerProps = {
  testCases: TestCase[];
  code: string;
  hasRun: boolean;
};

export function TestRunner({ testCases, code, hasRun }: TestRunnerProps): JSX.Element {
  const { t } = useI18n();

  return (
    <ul className="space-y-2">
      {testCases.map((testCase) => {
        const passed = code.includes(testCase.expectedSnippet);
        return (
          <li key={testCase.id} className="flex items-center justify-between rounded-md border p-3">
            <span className="text-sm">{testCase.name}</span>
            {!hasRun ? (
              <span className="text-xs text-muted-foreground">{t("common.pending")}</span>
            ) : passed ? (
              <span className="inline-flex items-center gap-1 text-xs text-green-500">
                <CheckCircle2 className="h-4 w-4" /> {t("common.pass")}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs text-red-500">
                <XCircle className="h-4 w-4" /> {t("common.fail")}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
