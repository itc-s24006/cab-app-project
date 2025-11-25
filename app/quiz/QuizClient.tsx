"use client";

// 1問ずつ表示する処理
// 次へボタンで次の問題へ進む
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackButton, ChoiceButton, NextButton } from "@/components/Button/page";
import type { Quiz } from "@/lib/microcms";

const QUIZ_DATA_KEY = "quiz_data";
const ANSWERS_KEY = "answers_data";

export default function QuizClient({ quizzes }: { quizzes: Quiz[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null); // 選択した回答
  const [answers, setAnswer] = useState<string[]>([]); // 回答配列
  const [currentIndex, setCurrentIndex] = useState(0);
  const quiz = quizzes[currentIndex];

  const choices = [
    { field: "c1", text: quiz.c1 },
    { field: "c2", text: quiz.c2 },
    { field: "c3", text: quiz.c3 },
    { field: "c4", text: quiz.c4 },
    { field: "c5", text: quiz.c5 },
  ];

  // const handleSelect = (field: string) => {
  //   setSelected(field);
  // };

  const handleNext = () => {
    if (!selected) {
      alert("回答を選択してください");
      return;
    }

    // 最後の回答も含めた新しい回答
    const newAnswers = [...answers, selected];
    //今の回答を配列に保存
    setAnswer(newAnswers);

    // 次の問題へ
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null); // 選択リセット
    } else {
      handleFinish(newAnswers);
      router.push("/result");
    }
  };

  const handleFinish = (finalAnswers: string[]) => {
    console.log("全回答:", finalAnswers); // 最後の回答も含めて表示

    try {
      // 全クイズデータ保存
      const quizzesJson = JSON.stringify(quizzes);
      localStorage.setItem(QUIZ_DATA_KEY, quizzesJson);

      // 回答だけ保存(容量無駄遣いだからうまくいったら消して試す)
      const answersJson = JSON.stringify(finalAnswers);
      localStorage.setItem(ANSWERS_KEY, answersJson);

      console.log("QuizClient側:" + localStorage.getItem(QUIZ_DATA_KEY));
    } catch (error) {
      console.error("ローカルストレージへの保存に失敗しました:", error);
      alert("回答の保存に失敗しました。");
    }
  };

  return (
    <div className="text-xl font-semibold text-gray-900 dark:text-white">
      <p>[第{currentIndex + 1}問]</p>
      <h2>{quiz.question}</h2>

      <div className="flex flex-col items-center gap-4 mt-10">
        {choices.map((choice, idx) => (
          <ChoiceButton
            key={idx}
            text={`${idx + 1}. ${choice.text}`}
            onClick={() => setSelected(choice.field)}
            isSelected={selected === choice.field}
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
