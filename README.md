# 🤖 EDY BOTとは
* LINEを通じた顧客とのコミュニケーションツール。
* Messaging APIを活用したポット対応と、ボットでは対応しきれない場合の手動への切り替えをシームレスに行うことが可能。
![](https://raw.githubusercontent.com/kataoka029/edy-bot/master/public/img/200524_edy-bot.jpg)

# 💻 開発
## 環境
* Node.js - 12.16.1
* @line/bot-sdk - 6.8.4
* heroku - 7.41.1

## API（外部利用不可）
### GET /api/messages?u={user_id}
user_idのメッセージの一覧が取得できる。
### POST /api/messages
メッセージを作成できる。
### POST /webhook
LINEからの通知がくる。



