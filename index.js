const TelegramBot = require('node-telegram-bot-api');

const token = '6959848114:AAE8Qn-t1P7P9Bm6A9b9JBILuOg95fTIOOc';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.new_chat_members) {
    // Yangi a'zolar guruhga qo'shilganda
    const newMembers = msg.new_chat_members;
    newMembers.forEach(member => {
      bot.deleteMessage(chatId, msg.message_id);
    });
  } else if (msg.left_chat_member) {
    // Chiqqan a'zo guruhdan chiqqanda
    bot.deleteMessage(chatId, msg.message_id);
  }
});
