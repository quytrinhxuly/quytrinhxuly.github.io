class TelegramService {
  constructor(chatId, botToken) {
    this.chatId = chatId;
    this.botToken = botToken;
  }

  sendMessage(message) {
    const payload = {
      method: "sendMessage",
      chat_id: this.chatId, // Thay YOUR_CHAT_ID bằng ID của nhóm Telegram của bạn
      text: message,
    };
    const options = {
      method: "post",
      payload: payload,
    };
    UrlFetchApp.fetch(
      `https://api.telegram.org/bot${this.botToken}/sendMessage`,
      options
    );
  }

  sendMessageWithInlineKeyboard(message, buttons) {
    const keyboard = {
      inline_keyboard: [buttons],
    };
    const payload = {
      method: "sendMessage",
      chat_id: this.chatId, // Thay YOUR_CHAT_ID bằng ID của nhóm Telegram của bạn
      text: message,
      reply_markup: JSON.stringify(keyboard),
    };
    const options = {
      method: "post",
      payload: payload,
    };
    UrlFetchApp.fetch(
      `https://api.telegram.org/bot${this.botToken}/sendMessage`,
      options
    );
  }
}
