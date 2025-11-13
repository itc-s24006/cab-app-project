// "use client";

import styles from "./page.module.css";
import { getQuizList } from "@/lib/microcms";
import ThemeToggle from "@/components/ThemeToggle/page";
export default async function Home() {
  const quizList = await getQuizList();
  const quizzes = quizList.contents.map((quiz, index) => ({
    ...quiz,
    q_number: index + 1, // 問題番号
  }));

  return (
    <main className="p-8 flex flex-col items-center gap-4">
      <div className={styles.page}>
        <h1 className={styles.title}>
          CAB【暗算】
          <br />
          練習
        </h1>
        {/* <div>
          {quizzes.map((quiz) => (
            <div key={quiz.id}>
              <p>Q{quiz.q_number}:</p>
              <p>{quiz.question}</p>
            </div>
          ))}
        </div> */}
        <ThemeToggle />
        <button className={styles.button}>ボタン</button>
      </div>
    </main>
  );
}
