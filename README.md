edy-managerは、渋谷にある貸衣装店Empty Dressyの管理システムとして開発中のアプリケーションのクライアントサイドです。

## 📷 画面イメージ
![capture](/img/capture.png)

## 📝 機能
- 左カラム
  - ユーザーの一覧を表示
  - 購入経験のあるユーザーを絞り込み
  - 要対応フラグのあるユーザーを絞り込み
  - ID・プロフィール名・氏名で部分一致するユーザーを絞り込み
- 中央カラム
  - 特定のユーザーのメッセージの一覧を表示
  - 特定のユーザーのメッセージを既読
  - 特定のユーザーの要対応フラグを切り替え
  - 特定のユーザーのメッセージを更新（リアルタイムで画像が送信された場合にのみ使用）
  - 特定のユーザーのLINEアカウントにメッセージを送信
- 右カラム
  - 特定のユーザーのユーザー情報を表示
  - 特定のユーザーの注文情報を表示

## 💡 技術
- React
- Redux
- WebSocket

## 📁 フォルダ構成
```
├── README.md
├── img
│   └── demo.gif
├── node_modules
├── package.json
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── App
│   │       ├── MessageContainer
│   │       │   ├── Center
│   │       │   │   ├── EdyInput
│   │       │   │   │   ├── index.js
│   │       │   │   │   └── style.scss
│   │       │   │   ├── Messages
│   │       │   │   │   ├── Message
│   │       │   │   │   │   ├── index.js
│   │       │   │   │   │   └── style.scss
│   │       │   │   │   ├── index.js
│   │       │   │   │   └── style.scss
│   │       │   │   ├── Status
│   │       │   │   │   ├── index.js
│   │       │   │   │   └── style.scss
│   │       │   │   ├── index.js
│   │       │   │   └── style.scss
│   │       │   ├── Left
│   │       │   │   ├── SearchBar
│   │       │   │   │   ├── index.js
│   │       │   │   │   └── style.scss
│   │       │   │   ├── Users
│   │       │   │   │   ├── User
│   │       │   │   │   │   ├── index.js
│   │       │   │   │   │   └── style.scss
│   │       │   │   │   ├── index.js
│   │       │   │   │   └── style.scss
│   │       │   │   ├── index.js
│   │       │   │   └── style.scss
│   │       │   ├── Right
│   │       │   │   ├── Orders
│   │       │   │   │   ├── Order
│   │       │   │   │   │   ├── index.js
│   │       │   │   │   │   └── style.scss
│   │       │   │   │   ├── index.js
│   │       │   │   │   └── style.scss
│   │       │   │   ├── Profile
│   │       │   │   │   ├── index.js
│   │       │   │   │   └── style.scss
│   │       │   │   ├── index.js
│   │       │   │   └── style.scss
│   │       │   ├── index.js
│   │       │   └── style.scss
│   │       ├── NavBar
│   │       │   ├── index.js
│   │       │   └── style.scss
│   │       ├── OrderContainer
│   │       │   ├── index.js
│   │       │   └── style.scss
│   │       ├── index.js
│   │       └── style.scss
│   ├── config.js
│   ├── index.js
│   ├── redux
│   │   └── index.js
│   ├── reset.css
│   └── utils
│       └── index.js
├── static.json
└── yarn.lock
```

## 🖥サーバーサイド
https://github.com/kataoka029/edy-bot
