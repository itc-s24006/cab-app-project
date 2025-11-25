"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { Quiz } from "@/lib/microcms";
import { BackButton } from "@/components/Button/page";
import styles from "./page.module.css";

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
  // 展開状態
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      // ローカルストレージから取得
      const quizzesJson = localStorage.getItem(QUIZ_DATA_KEY);
      const answersJson = localStorage.getItem(ANSWERS_KEY);

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

  // 展開トグル
  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <div className={styles.header}>
        <h2 className="text-3xl font-extrabold mb-6 text-center">
          クイズ結果発表
        </h2>

        {/* 統計エリア */}
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>問題数</div>
            <div className={styles.statValue}>{totalQuestions}</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statTitle}>正答数</div>
            <div className={styles.statValue}>
              {correctCount}/{totalQuestions}
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statTitle}>得点</div>
            <div className={styles.statValue}>{score} 点</div>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src={resultImage.src}
              alt={resultImage.alt}
              width={160}
              height={160}
            />
          </div>
        </div>
      </div>

      <BackButton className={styles.backButton} />

      <div className={styles.resultsCard}>
        <h3 className={styles.resultsHeader}>問題正誤表</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          ※クリックで問題詳細を表示します。
        </p>

        {quizResults.length > 0 ? (
          <ul className={styles.questionList}>
            {quizResults.map((quiz, index) => {
              const isOpen = !!expanded[index];
              return (
                <li key={index} className={styles.questionItem}>
                  <button
                    type="button"
                    onClick={() => toggleExpand(index)}
                    className={styles.toggleButton}
                  >
                    <span className={styles.questionText}>
                      第{index + 1}問: {quiz.question}
                    </span>
                    <span
                      className={`${styles.resultBadge} ${
                        quiz.isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {quiz.isCorrect ? "✅ 正解" : "❌ 不正解"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.detailPanel}>
                      <p className="mb-3 text-lg">
                        <span className={styles.questionLabel}>問題文：</span>{" "}
                        {quiz.question}
                      </p>
                      <p className="mb-2 text-lg">
                        <span className={styles.questionLabel}>
                          あなたの回答：
                        </span>
                        <span
                          className={
                            quiz.isCorrect
                              ? styles.answerTextCorrect
                              : styles.answerTextWrong
                          }
                        >
                          {quiz.selectedAnswer ?? "未選択"}
                        </span>
                      </p>
                      <p className="text-lg">
                        <span className={styles.questionLabel}>正答：</span>
                        <span className="ml-2">{quiz.correctAnswer}</span>
                      </p>
                    </div>
                  )}
                </li>
              );
            })}
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
