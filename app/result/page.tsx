"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { Quiz } from "@/lib/microcms";

const QUIZ_DATA_KEY = "quiz_data";
const ANSWERS_KEY = "answers_data";

// 正誤判定の結果を格納する型定義
type ResultItem = {
  question: string;
  selectedAnswer: string | undefined;
  correctAnswer: string | undefined;
  isCorrect: boolean;
  correctCount: number;
};

export default function ResultPage() {
  const [newAnswers, setNewAnswers] = useState<string[]>([]);
  const [quizResults, setQuizResults] = useState<ResultItem[]>([]); // 結果格納用
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // ローカルストレージから取得
      const quizzesJson = localStorage.getItem(QUIZ_DATA_KEY);
      const answersJson = localStorage.getItem(ANSWERS_KEY);
      // console.log("ResultPage側:" + quizzesJson);

      if (answersJson && quizzesJson) {
        const quizzesArray: Quiz[] = JSON.parse(quizzesJson);
        const answersArray: string[] = JSON.parse(answersJson);
        setNewAnswers(answersArray);

        // 正誤判定
        const result: ResultItem[] = answersArray.map(
          (selectedField, index) => {
            const quiz = quizzesArray[index];

            const correctField = quiz.answerId; // 正答フィールド名取得
            const isCorrect = selectedField === correctField; // 正誤判定
            const correctCount = isCorrect ? 1 : 0; // 正解数

            // 表示のためにフィールド名からテキストを再取得
            const selectedAnswerText = quiz[selectedField as keyof Quiz];
            const correctAnswerText = quiz[correctField as keyof Quiz];

            return {
              question: quiz.question,
              selectedAnswer: selectedAnswerText,
              correctAnswer: correctAnswerText,
              isCorrect,
              correctCount,
            };
          }
        );
        setQuizResults(result);

        // データ読みだしたらローカルストレージから削除
        // localStorage.removeItem(QUIZ_DATA_KEY);
      }
    } catch (error) {
      console.error("ローカルストレージからの読み込みに失敗しました:", error);
      alert("回答の読み込みに失敗しました。");
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>結果読み込み中...</div>;
  }

  // 問題数と正答数の集計
  const totalQuestions = newAnswers.length;
  const correctCount = quizResults.reduce(
    (acc, item) => acc + item.correctCount,
    0
  );
  const score =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // 得点によって画像を変える
  const resultImage =
    score >= 90
      ? { src: "/perfect.png", alt: "たいへんよくできました" }
      : score >= 70
      ? { src: "/nice.png", alt: "よくできました" }
      : { src: "/notbad.png", alt: "もうすこしがんばりましょう" };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">クイズ結果発表</h2>
        <div className="w-full max-w-md flex gap-7 mt-20">
          <div className="flex-1">
            問題数: {totalQuestions}
            <br /> 正答数: {correctCount}/{totalQuestions}
            <br /> 得点: {score}点
          </div>
          <div className="flex-1">
            <Image
              src={resultImage.src}
              alt={resultImage.alt}
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold border-l-4 border-blue-500 pl-2 mb-4 text-gray-900 dark:text-white">
          問題正誤表
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          ※クリックで問題詳細を表示します。
        </p>
        {quizResults.length > 0 ? (
          <ul className="mt-4 text-gray-700 dark:text-gray-300">
            {quizResults.map((quiz, index) => (
              <li key={index} className="mb-2">
                第{index + 1}問: {quiz.question}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            回答データがありません。
          </p>
        )}
      </div>
    </>
  );
}
