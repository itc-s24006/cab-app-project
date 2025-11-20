"use client";

import { useRouter } from "next/navigation";
import { LevelButton } from "@/components/Button/page";

export default function HomePage() {
  const router = useRouter();

  const handoleStart = (level: string) => {
    router.push(`/quiz?level=${level}`);
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        CAB 計算テスト
      </h2>

      <div className="flex flex-col items-center gap-4">
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          問題のレベルを選択してください。
        </p>
        <LevelButton onStart={handoleStart} />
      </div>

      {/* 選択した問題ごとに説明文が変わる */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold border-l-4 border-blue-500 pl-2 mb-4 text-gray-900 dark:text-white">
          解き方のヒント
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          数字の組み合わせや四捨五入を素早く理解し計算することを意識しましょう。
        </p>
      </div>
    </>
  );
}
