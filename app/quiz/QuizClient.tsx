"use client";

// 1問ずつ表示する処理
// 次へボタンで次の問題へ進む
import { useState } from "react";
import { BackButton, ChoiceButton, NextButton } from "@/components/Button/page";
import type { Quiz } from "@/lib/microcms";

export default function QuizClient({ quizzes }: { quizzes: Quiz[] }) {
  const [selected, setSelected] = useState<string | null>(null); // 選択した回答
  const [answers, setAnswer] = useState<string[]>([]); // 回答配列
  const [currentIndex, setCurrentIndex] = useState(0);
  const quiz = quizzes[currentIndex];

  const choices = [quiz.c1, quiz.c2, quiz.c3, quiz.c4, quiz.c5];

  const handleNext = () => {
    if (!selected) {
      alert("回答を選択してください");
      return;
    }

    //今の回答を配列に保存
    setAnswer((prev) => [...prev, selected]);

    // 次の問題へ
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null); // 選択リセット
    } else {
      alert("全問終了！");
      handleFinish();
    }
  };

  const handleFinish = () => {
    console.log("全回答:", [...answers, selected]); // 最後の回答も含めて表示
  };

  return (
    <div className="text-xl font-semibold text-gray-900 dark:text-white">
      <p>[第{currentIndex + 1}問]</p>
      <h2>{quiz.question}</h2>

      <div className="flex flex-col items-center gap-4 mt-10">
        {choices.map((choice, idx) => (
          <ChoiceButton
            key={idx}
            text={`${idx + 1}. ${choice}`}
            onClick={() => setSelected(choice)}
            isSelected={selected === choice}
          />
        ))}

        {/* <div className="flex justify-content-center space-around"> */}
        <div className="w-full max-w-md flex gap-7 mt-20">
          <BackButton className="flex-1" />
          <NextButton onClick={handleNext} className="flex-1" />
        </div>
      </div>
    </div>
  );
}
