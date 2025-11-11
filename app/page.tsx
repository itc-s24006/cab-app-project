import styles from "./page.module.css";
import { getQuizList } from "@/lib/microcms";

export default async function Home() {
  const quizList = await getQuizList();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        CAB【暗算】
        <br />
        練習
      </h1>
      <div>
        {quizList.contents.map((quiz) => (
          <p key={quiz.id}>{quiz.question}</p>
        ))}
      </div>
    </div>
  );
}
