// import styles from "./page.module.css";
// import { getQuizList } from "@/lib/microcms";
// import ThemeToggle from "@/components/ThemeToggle/page";
// export default async function Home() {
//   const quizList = await getQuizList();
//   const quizzes = quizList.contents.map((quiz, index) => ({
//     ...quiz,
//     q_number: index + 1, // 問題番号
//   }));

//   return (
//     <main className="p-8 flex flex-col items-center gap-4">
//       <header>
//         <title>Cab App Project</title>
//         <h1 className={styles.title}>
//           CAB【暗算】
//           <br />
//           練習
//         </h1>
//       </header>
//       <div className={styles.page}>
//         {/* <div>
//           {quizzes.map((quiz) => (
//             <div key={quiz.id}>
//               <p>Q{quiz.q_number}:</p>
//               <p>{quiz.question}</p>
//             </div>
//           ))}
//         </div> */}
//         <ThemeToggle />
//         <button className={styles.button}>ボタン</button>
//       </div>
//     </main>
//   );
// }

// app/page.tsx (Server Component)

import styles from "./page.module.css";
import { LevelButton } from "@/components/Button/page";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handoleStart = (level: string) => {
    console.log("Selected level:", level);
    // レベルに応じたクイズページへ遷移
    router.push(`/quiz?level=${level}`);
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        CAB 計算テスト
      </h2>

      <div className="flex flex-col items-center gap-4">
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          問題のレベルを選択してください。
        </p>
        <LevelButton onStart={handoleStart} />
      </div>
      {/* 選択した問題ごとに説明文が変わる */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold border-l-4 border-blue-500 pl-2 mb-4 text-gray-900 dark:text-white">
          レベル❍のヒント・目的
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          はじめての方は説明を読んでから試験を受けてください。また、この試験には画像を利用します。画像が見えないブラウザをご利用の場合は注意してください。
        </p>
      </div>
    </>
  );
}
