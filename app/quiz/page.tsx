// クイズ一覧を取得してQuizClientに渡すだけ

import { getQuizList } from "@/lib/microcms";
import QuizClient from "./QuizClient";

export default async function QuizPage(props: {
  searchParams: Promise<{ level?: string }>;
}) {
  const search = await props.searchParams;
  const level = search.level || "1";

  const quizList = await getQuizList({
    filters: `level[equals]${level}`,
  });

  // console.log("quizList:", quizList);
  // console.log("contents:", quizList.contents);
  return <QuizClient quizzes={quizList.contents} />;
}
