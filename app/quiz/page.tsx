import styles from "./page.module.css";
import { getQuizList } from "@/lib/microcms";

export default async function QuizPage() {
  const quizList = await getQuizList();
  const quizzes = quizList.contents.map((quiz, index) => ({
    ...quiz,
    q_number: index + 1, // 問題番号
  }));

  return (
    <div>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <p>Q{quiz.q_number}:</p>
          <p>{quiz.question}</p>
        </div>
      ))}
    </div>
  );
}
