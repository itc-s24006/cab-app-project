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

import { Button } from "flowbite-react";
import ThemeToggle from "@/components/ThemeToggle/page";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* 1. ページトップの広告とダークモードトグルエリア */}
      <div className={styles.header}>
        {/* できたらパンくず実装 */}
        {/* <span className="text-sm text-gray-500 dark:text-gray-400 mr-4">
          トップページ &gt; クイズ・適性検査 &lt; CAB 計算テスト
        </span> */}
        <ThemeToggle />
      </div>

      {/* 2. メインカード: CAB 計算テスト */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center bg-gray-200 dark:bg-gray-700 p-3 rounded text-gray-900 dark:text-white">
          【適性試験】 CAB 計算問題(暗算)
        </h1>

        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            CAB 計算テスト
          </h2>

          <div className="flex flex-col items-center gap-4">
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              問題のレベルを選択してください。
            </p>
            <Button size="xl" color="light" className="w-full max-w-sm">
              レベル1
            </Button>
            <Button size="xl" color="light" className="w-full max-w-sm">
              レベル2
            </Button>
            <Button size="xl" color="light" className="w-full max-w-sm">
              レベル3
            </Button>
            <Button size="xl" color="blue" className="w-full max-w-sm">
              適性試験を受ける
            </Button>
          </div>
        </div>
      </div>

      {/* 3. 説明セクション */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold border-l-4 border-blue-500 pl-2 mb-4 text-gray-900 dark:text-white">
          CAB試験・計算問題の説明・対策法
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          はじめての方は説明を読んでから試験を受けてください。また、この試験には画像を利用します。画像が見えないブラウザをご利用の場合は注意してください。
        </p>
      </div>
    </div>
  );
}
