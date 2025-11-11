## 概要

CAB（エンジニア適性検査）の暗算練習ができる Web アプリです。  
暗算の難易度をレベルごとに選べます。

## 主な機能

- 暗算問題の出題と解答
- 結果の自動採点
- 問題データの CMS 管理
- 難易度ごとの出題

## 使用技術

#### Next.js (App Router) / TypeScript / TailwindCSS

スタイル設定

- globals.css
- CSS modules(Scoped CSS)

問題管理 : microCMS  
ソース管理 : Github  
デプロイ : Vercel  
その他ツール : ESLint

## ディレクトリ構成

<details>
<summary>一覧が表示されます</summary>

```
cab-app-project/
├── app/
│   ├── globals.css              # 全体共通スタイル
│   ├── layout.tsx               # グローバルCSSを読み込み
│   ├── page.tsx                 # トップページ
│   ├── page.module.css          # トップページ専用CSS
│   ├── quiz/
│   │   ├── page.tsx             # 暗算問題ページ
│   │   └── page.module.css      # quizページ専用CSS
│   └── result/
│       ├── page.tsx             # 結果ページ
│       └── page.module.css      # resultページ専用CSS
│
├── components/
│   ├── Header/
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── QuizCard/
│   │   ├── page.tsx
│   │   └── page.module.css
│   └── Button/
│       ├── page.tsx
│       └── page.module.css
│
├── lib/
│   └── microcms.ts              # CMSクライアント設定
│
├── public/
│   └── demo.png
│
├── tailwind.config.ts
└── package.json
```

</details>

## 参考

- サイト  
  [キャリアワールド CAB 適性試験対策ページ](https://career-world.net/quiz/test_cab_arithmetic.php)
- 書籍  
  [『かんたんモダンサイトが作れる』]()
