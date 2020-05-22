exports.seed = function (knex) {
  return knex("messages")
    .del()
    .then(() => {
      return knex("messages").insert([
        {
          id: 1,
          user_id: 1,
          line_type: "message",
          line_reply_token: "ddb23fd711f04aada4d35ee5373ed06c",
          line_user_id: "Uf42bb47c877c9e5543ca4eda7661e142",
          line_user_type: "user",
          line_message_id: "12011686073968",
          line_message_type: "text",
          line_message_text: "hello, this is Shun!",
        },
        {
          id: 2,
          user_id: 1,
          line_type: "message",
          line_reply_token: "4d33481b9b184aa8962311c100120207",
          line_user_id: "Uf42bb47c877c9e5543ca4eda7661e142",
          line_user_type: "user",
          line_message_id: "12011694017334",
          line_message_type: "text",
          line_message_text: "こんにちは！\nしゅんだよ！",
        },
      ]);
    });
};
