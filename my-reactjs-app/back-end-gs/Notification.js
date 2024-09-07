
/**
 * data: is request data
 * request types: submit_ticket | auth | reset_password | update_password
 * Configs.TELEGRAM_BOT_TOKEN
 * Configs.TELEGRAM_AUDIT_GROUP_ID
 */
function sendNotificationToTelegram(data, requestType) {
    const telegramService = new TelegramService(Configs.TELEGRAM_AUDIT_GROUP_ID, Configs.TELEGRAM_BOT_TOKEN);
    if (requestType == "auth") {
      telegramService.sendMessage(data + " đăng nhập.");
    }
  
    if (requestType == "reset_password") {
      telegramService.sendMessage(data + " yêu cầu thay đổi mật khẩu.");
    }
  
    if (requestType == "update_password") {
      telegramService.sendMessage(data + " đã cập nhật mật khẩu.");
    }
  
    if (requestType == "submit_ticket") {
      telegramService.sendMessage(JSON.stringify(data) + " đã gửi 1 ticket.");
    }
  }
  