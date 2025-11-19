"use client";

import React from "react";
import styles from "./page.module.css";

type MainCardProps = {
  children?: React.ReactNode;
  title?: string;
};

export default function MainCard({ children }: MainCardProps) {
  return (
    <div className={styles.main_card}>
      <h1>【適性試験】 CAB 計算問題(暗算)</h1>

      <div className="mt-6 text-center">{children}</div>
    </div>
  );
}
