# Tổng quan

Với nhu cầu quản lý và nhập liệu thông tin phù hợp cho dự án vừa và nhỏ.
Dự án dùng front-end là reactjs triển khai trực tiếp trên host của github page, back-end là appscript và database là google sheet.

## Chức năng

- Đăng nhập theo thông tin từ sheet quản lý tài khoản
- Thay đổi mật khẩu với yêu cầu reset qua email
- Upload ảnh lên google drive
- Nhập liệu form và đưa thông tin về google sheet
- Bắn thông báo về telegram

## Cài đặt

1. Front-end
    
    - Yêu cầu: [Node.js](https://nodejs.org/) v18+ trở lên.
    - Cài đặt thư viện bằng lệnh: ```` yarn````
    - Chạy dự án: ```` yarn start````
    - Build dự án: ```` yarn build````
    - Nếu bạn muốn triển khai web lên github page hãy dùng lệnh: ````yarn release```` bản build sẽ được trỏ đến thư mục```` docs```` của github. Chỉ cần setup github page trỏ đến thư mục này.

2. Back-end
    - Yêu cầu: dự án back-end sử dụng appscript của google
    - Các bước tạo dự án appscript:
      1. Bạn có thể truy cập trực tiếp vào [Google Apps Script](https://script.google.com)
      2. Tạo mới dự án: Sau khi vào Google Apps Script, nhấn vào "Dự án trống" (Blank Project) để tạo một dự án mới
      3. Tạo các file *.gs ứng với các file trong folder "back-end" của github này
    - Thay thế các giá trị cài đặt:
      1. File api.gs 
            ````
            const Configs = {
              ACCOUNT_FILE_ID: "ID_FILE_SHEET_THONG_TIN_TAI_KHOAN",
              QUY_TRINH_XU_LY_FILE_ID: "ID_FILE_SHEET_CHUA_DU_LIEU_TU_FORM",
              IMAGE_FOLDER_ID: "ID_FOLDER_DRIVE_CHUA_ANH_UP_LOAD",
              
              // đường dẫn để gửi qua email khi yêu cầu reset pass
              RESET_PASSWORD_URL: "TEN_MIEN_CUA_BAN/#/reset-password", 

              TELEGRAM_BOT_TOKEN: "TELEGRAM_BOT_TOKEN",
              TELEGRAM_AUDIT_GROUP_ID: "NHOM_TELEGRAM_CAN_NHAN_THONG_BAO"
            }
            ````
        2. Triển khai dự án appscript
        3. Lấy link triển khai dự án appscript nhận được thay vào biến ````"APP_SCRIPT_API_HOST"```` của file ````env.js```` trong dự án front-end.

## License
MIT
**Free Software**
Author: congtuuit@gmail.com

