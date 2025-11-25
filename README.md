## 概要

CAB（エンジニア適性検査）の暗算練習ができる Web アプリです。  
暗算の難易度をレベルごとに選べます。

## 主な機能

- 暗算問題の出題と解答
- 結果の採点
- 問題データの CMS 管理
- 難易度ごとの出題

## 使用技術

#### Next.js (App Router) / TypeScript / TailwindCSS

スタイル設定 : globals.css, Tailwind CSS, Flowbite  
問題管理 : microCMS  
ソース管理 : Github  
デプロイ : Vercel  
その他ツール : ESLint

## ページ構成

#### トップページ

レベル選択画面

#### quiz ページ

適性検査 CAB【暗算】の模擬風回答ページ

#### result ページ

正答数や得点、問題ごとの答えが確認できるページ  
全問とき終わったら自動で遷移する

## ディレクトリ構成

<details>
<summary>一覧が表示されます</summary>

```
cab-app-project/
├── app/
│   ├── globals.css              # 全体共通スタイル
│   ├── layout.tsx               # 共通コンポーネント呼び出し
│   ├── page.tsx                 # トップページ
│   ├── page.module.css          # トップページ専用CSS
│   ├── quiz/
│   │   ├── page.tsx            # APIから問題一覧取得
│   │   └── QuizClient.tsx      # １問ずつ切り替わる問題ページ
│   └── result/
│       ├── page.tsx             # 結果ページ
│       └── page.module.css      # resultページ専用CSS
│
├── components/
│   ├── Button/
│   │   └── page.tsx
│   ├── Header/
│   │   └── page.tsx
│   ├── MainCard/
│   │   ├── page.tsx
│   │   └── page.module.css
│   └── ThemeToggle/             # ダークモード切替スイッチ(未実装)
│   │   └── page.tsx
│   └── FlowbiteProvider.tsx
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
  [Next.js ＋ヘッドレス CMS ではじめる！ かんたんモダン Web サイト制作入門](https://www.shoeisha.co.jp/book/detail/9784798183664#errata)
