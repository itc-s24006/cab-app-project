"use client";

import styles from "./page.module.css";
import ThemeToggle from "@/components/ThemeToggle/page";

export default function Header() {
  return (
    <>
      {/* 1. ページトップの広告とダークモードトグルエリア */}
      <div className={styles.header}>
        {/* できたらパンくず実装 */}
        {/* <span className="text-sm text-gray-500 dark:text-gray-400 mr-4">
          トップページ &gt; クイズ・適性検査 &lt; CAB 計算テスト
        </span> */}
        <ThemeToggle />
      </div>
    </>
  );
}
