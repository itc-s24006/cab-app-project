// クイズ一覧を取得してQuizClientに渡すだけ

import { getQuizList } from "@/lib/microcms";
import QuizClient from "./QuizClient";

export default async function QuizPage() {
  const quizList = await getQuizList();

  return <QuizClient quizzes={quizList.contents} />;
}
