"use client";

// 1問ずつ表示する処理
// 次へボタンで次の問題へ進む
import { useState } from "react";
import { ChoiceButton, NextButton } from "@/components/Button/page";
import type { Quiz } from "@/lib/microcms";

export default function QuizClient({ quizzes }: { quizzes: Quiz[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const quiz = quizzes[currentIndex];

  const choices = [quiz.c1, quiz.c2, quiz.c3, quiz.c4, quiz.c5];

  const handleNext = () => {
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert("全問終了！");
    }
  };

  return (
    <div className="text-xl font-semibold text-gray-900 dark:text-white">
      <p>[第{currentIndex + 1}問]</p>
      <h2>{quiz.question}</h2>

      <div className="flex flex-col items-center gap-4 mt-10">
        {choices.map((choice, idx) => (
          <ChoiceButton key={idx} text={`${idx + 1}. ${choice}`} />
        ))}

        <NextButton title="次へ" onClick={handleNext} />
      </div>
    </div>
  );
}
