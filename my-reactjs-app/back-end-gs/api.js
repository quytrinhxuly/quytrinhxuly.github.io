// PROD
// const Configs = {
//   ACCOUNT_FILE_ID: "1cgDNgp4TYM873FR3qonR12IhWs1qH8t_R7ZEvrmixV8",
//   QUY_TRINH_XU_LY_FILE_ID: "1oNXIeLAJMbHArKi9xPfDRhp-i1wvHZitRxE55Qbz00E",
//   IMAGE_FOLDER_ID: "1MpqQmeQweKTB3AxMQDU6qmfNnt_m_sbK",
//   RESET_PASSWORD_URL: "https://quytrinhxuly.github.io/#/reset-password",
// };

// DEV
const Configs = {
  ACCOUNT_FILE_ID: "10wkXYYNX3ZbNwFNZ8DfPANeQ1OjuyJuli53wdoD1bDU",
  QUY_TRINH_XU_LY_FILE_ID: "1mPk1PuPc4Wc9fAXnRSMQHwZCrc1Ac0HLEmfN8YzQc2o",
  IMAGE_FOLDER_ID: "1C9usVIi-mzDATFE3XMLz5YC43R_cwvuf",
  RESET_PASSWORD_URL: "https://quytrinhxuly.github.io/#/reset-password",
};

function doGet(request) {
  return OkResult(true, "Server running...", request);
}

// doPost function to handle POST requests
function doPost(e) {
  const endpoint = e.parameter.endpoint;
  try {
    const payload = JSON.parse(e.postData.contents);

    if (endpoint == "auth") {
      return handleAuth(payload);
    }

    if (endpoint == "reset_password") {
      return handleResetPassword(payload);
    }

    if (endpoint == "update_password") {
      return handleUpdateNewPassword(payload);
    }

    if (endpoint == "submit_ticket") {
      const authToken = payload["authToken"];
      const verify = validateBearerToken(authToken);
      if (verify.success) {
        return handleSubmitTicket(payload);
      } else {
        return ErrorResult(verify.message);
      }
    }

    if (endpoint == "upload") {
      const authToken = payload["authToken"];
      const verify = validateBearerToken(authToken);
      if (verify.success) {
        return handleUploadFile(e);
      } else {
        return ErrorResult(verify.message);
      }
    }

    if (endpoint == "list") {
      const authToken = payload["authToken"];
      const verify = validateBearerToken(authToken);
      if (verify.success) {
        return handleGetListTicket(payload);
      } else {
        return ErrorResult(verify.message);
      }
    }

    return ErrorResult("Không tìm thấy yêu cầu cần xử lý !");
  } catch (error) {
    return ErrorResult("Xảy ra lỗi ở phía máy chủ !", error);
  }
}

// <HANDLERS>

function test() {
  const payload = { "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNTk4MzIwIiwiaWF0IjoxNzI1Nzg0Nzk0LCJleHAiOjE3MjU4NzExOTR9.gENe5GooOcNM3FLRzBIdPH8DAZlL1qUqR8PXfcP_20M", "fullname": "Phạm Văn Quỳnh", "sheets": ["QUY_TRINH", "XAC_MINH_KHACH_HANG", "TINH_TRANG_KINH_DOANH", "THONG_TIN_KENH_BAN_HANG"], "sheetData": { "QUY_TRINH": [["c6b2073a-098d-477d-a1fb-07792fb664ec", "Quy Trình Bán Hàng", "QUY TRÌNH ĐỀ XUẤT GIÁ ƯU ĐÃI ĐẶC BIỆT", "1598320", "Hàng Nặng", "Nguy cơ rời bỏ", "123456", "3000", "https://noibo.ghn.vn/eform/form/create?flowId=66b9ba6a97c3a7006a1cfe13", "Shop yêu cầu giá thấp hơn.", "GHTK", "d. Giá đang đi theo Toàn quốc", "h. 20KG", "https://drive.google.com/file/d/10ThBwMygtmw6lG0i6M9xC7W3nfzL55Ab/view?usp=drivesdk", "", "", "Nội Vùng 50% | Liên Vùng 50%", "Free 100% (Hoàn|Giao lại|Khai giá <5 triệu)", "10/09/2024", "50.000.000", "4.000đ", "08/09/2024 15:52:46", "1598320"]], "XAC_MINH_KHACH_HANG": [["41ab987d-a4c8-44d9-b8d1-08f483bb28a9", "c6b2073a-098d-477d-a1fb-07792fb664ec", 1, "thái nguyên", "https://drive.google.com/file/d/1RwfC-lQ5TLnma9VeejAnxMeI92MkhF0s/view?usp=drivesdk", "https://drive.google.com/file/d/1Gm_pgl0Nmt5o_xu4YrXHpZ9HxjQxDIse/view?usp=drivesdk", "Đúng", "thái nguyên", "https://drive.google.com/file/d/1OEmoP07PyHZCcJ2j1g9xwXKxCBVBxDu2/view?usp=drivesdk"], ["ef1eea5e-967f-46fb-b23d-2aa3f6d8656b", "c6b2073a-098d-477d-a1fb-07792fb664ec", 2, "thái nguyên 2", "https://drive.google.com/file/d/1MEw9Rm7ehl095DYL2FHSy0ddtq-qjFy_/view?usp=drivesdk", "https://drive.google.com/file/d/1Of_dpIZRk_e9gP_uM0-V6Rw4G1NOK8B8/view?usp=drivesdk", "Không", "định hóa", "https://drive.google.com/file/d/1gqbty5tY9qHlgPGjwRXwq226LsHqLm3S/view?usp=drivesdk"]], "TINH_TRANG_KINH_DOANH": [["d7327f89-3bdb-4817-8033-f4c9f4c9e595", "c6b2073a-098d-477d-a1fb-07792fb664ec", 1, "Sỉ", "Phụ kiện thời trang", "6,7", "Dưới 6 tháng", "Ít hơn 5 NV"], ["a8e1ebd0-bdd1-499a-aacd-459b5cd041a3", "c6b2073a-098d-477d-a1fb-07792fb664ec", 2, "Lẻ", "Mẹ & bé", "9,10", "Dưới 6 tháng", "Ít hơn 2 NV"]], "THONG_TIN_KENH_BAN_HANG": [["aecd46ca-c8db-41c6-ab47-d8f984067318", "c6b2073a-098d-477d-a1fb-07792fb664ec", 1, "Facebook", "https://quytrinhxuly.github.io/#/", "< 1,000 Theo dõi/Thích", "Có", "Không"], ["59b6dd40-61cc-41d2-8692-d95ca589a22a", "c6b2073a-098d-477d-a1fb-07792fb664ec", 2, "Tiktok", "https://quytrinhxuly.github.io/#/", "< 10,000 Theo dõi/Thích", "Không", "Có"]] } };

  handleSubmitTicket(payload);
}

// Completed
function handleSubmitTicket(payload) {
  const { sheets, sheetData } = payload;
  if (sheets.length == 0) {
    return ErrorResult("Không có dữ liệu, vui lòng kiểm tra lại !");
  }

  const fileId = Configs.QUY_TRINH_XU_LY_FILE_ID;
  const file = SpreadsheetApp.openById(fileId);
  for (var i = 0; i < sheets.length; i++) {
    const sheetName = sheets[i];
    const values = sheetData[sheetName];
    if (!Boolean(values) || values.length == 0) continue;
    appendData(file, sheetName, values);
    Utilities.sleep(200);
  }

  // send to telegram
  sendNotificationToTelegram(payload, "submit_ticket");

  return OkResult("Gửi yêu cầu thành công !");
}

// Completed
function handleUploadFile(e) {
  try {
    const folderId = Configs.IMAGE_FOLDER_ID;
    const payload = JSON.parse(e.postData.contents);
    const { fileName, mimeType, content } = payload;

    const date = new Date();
    const timeZone = Session.getScriptTimeZone();
    const formattedDate = Utilities.formatDate(date, timeZone, "yyyy_MM_dd");
    const fileNameFormatted = formattedDate + "_" + fileName;

    const blob = Utilities.newBlob(content, mimeType, fileNameFormatted);
    const file = DriveApp.getFolderById(folderId).createFile(blob);
    const responseObj = {
      filename: file.getName(),
      fileId: file.getId(),
      fileUrl: file.getUrl(),
    };

    return OkResult("Tải file lên thành công!", responseObj);
  } catch (error) {
    return ErrorResult("Tải file lên thất bại!");
  }
}

// Completed
function handleAuth(payload) {
  const { username, password } = payload;

  const dataValues = getAccouts();

  // Check if there's a valid account with the given username and password
  const isValid = dataValues.some(
    (data) => data[5] === true && data[0] == username && data[3] == password
  );

  if (!isValid) {
    return ErrorResult("Tài khoản hoặc mật khẩu không đúng!");
  }

  const loginUser = findAccountAndUpdateLastLogin(username, password);

  // 1 day
  const accessToken = createBearerToken(username, 60 * 24);
  const responseData = {
    token: accessToken,
    user: {
      name: loginUser[1],
      email: loginUser[2],
    },
  };

  sendNotificationToTelegram(username, "auth");

  return OkResult("Đăng nhập thành công!", responseData);
}

// Completed
function handleResetPassword(payload) {
  const { username, email } = payload;
  const tokenResetPassword = generateUUID();
  const { rowIndex, fullname } = findAccountIndexAndSetResetToken(
    username,
    email,
    tokenResetPassword
  );
  if (rowIndex == -1) {
    return ErrorResult("Thông tin yêu cầu không đúng!");
  }

  sendEmailResetPassword(email, tokenResetPassword);

  sendNotificationToTelegram(
    "Nhân viên :" +
    username +
    "_" +
    fullname +
    " Có tài khoản gmail là: " +
    email,
    "reset_password"
  );

  return OkResult("Đã gửi email đặt lại mật khẩu");
}

// Completed
function handleUpdateNewPassword(payload) {
  const { resetToken, password } = payload;
  try {
    const result = updatePasswordWithResetToken(resetToken, password);
    if (result.success) {
      sendNotificationToTelegram(result.message, "update_password");

      return OkResult("Cập nhật mật khẩu thành công!");
    }

    return ErrorResult("Cập nhật mật khẩu thất bại!");
  } catch (err) {
    return ErrorResult("Cập nhật mật khẩu thất bại!");
  }
}

// new
function handleGetListTicket(payload) {
  const { staffCode, page = 1, pageSize = 10 } = payload;

  const spreadsheet = SpreadsheetApp.openById(Configs.QUY_TRINH_XU_LY_FILE_ID);
  const dataValues = getDataValues(spreadsheet, "QUY_TRINH");
  const ds_quy_trinh = dataValues
    .filter((i) => i[22] == staffCode)
    .map((i) => {
      return {
        id: i[0],
        nhom_quy_trinh: i[1],
        quy_trinh: i[2],
        ma_nhan_vien: t[3],
        de_xuat_gia_ban_voi_loai_dich_vu: t[4],
        tinh_trang_khach_hang: t[5],
        ma_khach_hang: t[6],
        san_luong_thuc_te_trung_binh_3_thang_gan_nhat: t[7],
        link_phieu_cai_gia: t[8],
        mo_ta_ly_do_de_xuat: t[9],
        doi_thu: t[10],
        loai_gia_dang_di_theo_tuyen: t[11],
        loai_gia_dang_di_theo_khoi_luong: t[12],
        man_hinh_san_luong_doanh_thu_don_ben_doi_thu: t[13],
        san_luong_cam_ket: t[14],
        phan_khuc_khoi_luong: i[15],
        ty_trong_don_noi_vung_lien_vung: i[16],
        chinh_sach_phu_phi: i[17],
        ngay_bat_dau_tinh_sl_cam_ket: i[18],
        doanh_thu_hang_nang_cam_ket: i[19],
        de_xuat_gia_ban_tinh_tren_1_kg_bang_gia_toi_thieu_20kg: i[20],
        ngay_tao: i[21],
      };
    });

  const quyTrinhIds = ds_quy_trinh.map((i) => i["id"]);

  const dataXacMinhKhachHang = getDataValues(
    spreadsheet,
    "XAC_MINH_KHACH_HANG"
  );
  const dsXacMinhKhachHang = dataXacMinhKhachHang
    .filter((i) => quyTrinhIds.include(i[1]))
    ?.map((i) => {
      return {
        parentId: i[1],
        stt: i[2],
        dia_chi_cua_hang: i[3],
        anh_checkin_tai_cua_hang: i[4],
        anh_san_pham_kinh_doanh: i[5],
        dia_chi_cua_hang_la_noi_lay_hang: i[6],
        dia_chi_lay_hang: i[7],
        anh_checkin_tai_noi_lay_hang: i[8],
      };
    });

  const dataTrangThaiKinhDoanh = getDataValues(
    spreadsheet,
    "TINH_TRANG_KINH_DOANH"
  );
  const ds_TrangThaiKinhDoanh = dataTrangThaiKinhDoanh
    .filter((i) => quyTrinhIds.include(i[1]))
    ?.map((i) => {
      return {
        parentId: i[1],
        stt: i[2],
        khach_ban_si_le: i[3],
        nganh_hang: i[4],
        thang_cao_diem_ban_duoc_hang: i[5],
        so_nam_ban_hang: i[6],
        so_nhan_vien_shop: i[7],
      };
    });

  const data_ThonTinKenhBanHang = getDataValues(
    spreadsheet,
    "THONG_TIN_KENH_BAN_HANG"
  );
  const ds_ThonTinKenhBanHang = data_ThonTinKenhBanHang
    .filter((i) => quyTrinhIds.include(i[1]))
    ?.map((i) => {
      return {
        parentId: i[1],
        stt: i[2],
        kenh_ban_hang_online: i[3],
        link_kenh_ban_hang: i[4],
        luot_theo_doi_hoac_thich_kenh: i[5],
        co_chay_quang_cao_khong: i[6],
        co_livestream_ban_hang_khong: i[7],
      };
    });

  const response = {
    quy_trinh: ds_quy_trinh,
    xac_minh_khach_hang: dsXacMinhKhachHang,
    trang_thai_kinh_doanh: ds_TrangThaiKinhDoanh,
    thong_tin_kenh_ban_hang: ds_ThonTinKenhBanHang,
  };

  return OkResult("ok", response);
}

function getDataValues(spreadsheet, sheetName) {
  const sheet = spreadsheet.getSheetByName(sheetName);
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  if (lastRow <= 1) {
    return [];
  }

  const dataRange = sheet.getRange(2, 1, lastRow - 1, lastColumn);
  const dataValues = dataRange.getValues();

  return dataValues;
}

// </HANDLERS>

//---------------------------------------------------------------------------------------
function OkResult(message = "", data = "") {
  return ContentService.createTextOutput(
    JSON.stringify({ success: true, message: message, data: data })
  ).setMimeType(ContentService.MimeType.JSON);
}

function ErrorResult(message = "", data = "") {
  return ContentService.createTextOutput(
    JSON.stringify({ success: false, message: message, data: data })
  ).setMimeType(ContentService.MimeType.JSON);
}

function appendData(file, sheetName, data) {
  const sheet = file.getSheetByName(sheetName);
  const lastRow = sheet.getLastRow();
  const startRow = lastRow + 1;
  const startColumn = 1;

  sheet
    .getRange(startRow, startColumn, data.length, data[0].length)
    .setValues(data);
}

function sendEmailResetPassword(recipient, tokenResetPassword) {
  const params = {
    reset_password_url:
      Configs.RESET_PASSWORD_URL + "?token=" + tokenResetPassword,
  };

  var template = HtmlService.createHtmlOutputFromFile(
    "reset_password_template"
  ).getContent();

  // Replace placeholders with actual values
  for (var key in params) {
    var placeholder = "{{" + key + "}}";
    var value = params[key];
    template = template.replace(new RegExp(placeholder, "g"), value);
  }

  var subject = "[APP_RESET_PASSWORD] Đặt lại mật khẩu của bạn!";
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: template,
  });
}

function getAccouts() {
  const spreadsheet = SpreadsheetApp.openById(Configs.ACCOUNT_FILE_ID);
  const sheet = spreadsheet.getSheetByName("ACCOUNTS");
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  if (lastRow <= 1) {
    Logger.log("No data rows found (only header row exists).");
    return [];
  }

  const dataRange = sheet.getRange(2, 1, lastRow - 1, lastColumn);
  const dataValues = dataRange.getValues();

  return dataValues;
}

function findAccountIndexAndSetResetToken(username, email, resetToken) {
  const spreadsheet = SpreadsheetApp.openById(Configs.ACCOUNT_FILE_ID);
  const sheet = spreadsheet.getSheetByName("ACCOUNTS");

  // Get all the data in the sheet
  const data = sheet.getDataRange().getValues();

  let rowIndex = -1;
  let fullname = "";
  // Loop through the rows to find the matching username and email
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] != username || data[i][2] != email || data[i][5] != true) {
      continue;
    }

    const matchUserName = data[i][0] == username;
    const matchEmail = data[i][2] == email;
    const isActive = data[i][5] == true;

    if (matchUserName && matchEmail && isActive) {
      sheet.getRange(i + 1, 7).setValue(resetToken);
      rowIndex = i + 1;
      fullname = data[i][1];

      break;
    }
  }

  return {
    rowIndex: rowIndex,
    fullname: fullname,
  };
}

function updatePasswordWithResetToken(resetToken, password) {
  const spreadsheet = SpreadsheetApp.openById(Configs.ACCOUNT_FILE_ID);
  const sheet = spreadsheet.getSheetByName("ACCOUNTS");

  // Get all the data in the sheet
  const data = sheet.getDataRange().getValues();

  let success = false;
  let userName = "";
  // Loop through the rows to find the matching username and email
  for (let i = 0; i < data.length; i++) {
    if (data[i][6] != resetToken) {
      continue;
    }

    const matchToken = data[i][6] == resetToken;
    if (matchToken) {
      userName = data[i][0] + "_" + data[i][1];
      sheet.getRange(i + 1, 4).setValue(password);
      sheet.getRange(i + 1, 7).setValue("");
      success = true;
      break;
    }
  }

  return {
    success: success,
    message: userName,
  };
}

function findAccountAndUpdateLastLogin(username, password) {
  const spreadsheet = SpreadsheetApp.openById(Configs.ACCOUNT_FILE_ID);
  const sheet = spreadsheet.getSheetByName("ACCOUNTS");

  // Get all the data in the sheet
  const data = sheet.getDataRange().getValues();

  const now = new Date();
  // Format the date to "DD/MM/YYYY HH:MM:SS"
  const formattedDate = Utilities.formatDate(
    now,
    Session.getScriptTimeZone(),
    "dd/MM/yyyy HH:mm:ss"
  );

  // Loop through the rows to find the matching username and email
  for (let i = 0; i < data.length; i++) {
    if (
      data[i][0] != username ||
      data[i][3] != password ||
      data[i][5] != true
    ) {
      continue;
    }

    const matchUserName = data[i][0] == username;
    const matchpassword = data[i][3] == password;
    const isActive = data[i][5] == true;

    if (matchUserName && matchpassword && isActive) {
      sheet.getRange(i + 1, 5).setValue(formattedDate);
      return data[i];
    }
  }

  return null;
}

const SettingKey = {
  TELEGRAM_BOT_TOKEN: "TELEGRAM_BOT_TOKEN",
  TELEGRAM_GROUP_ID: "TELEGRAM_GROUP_ID",
  PRIVATE_TELEGRAM_GROUP_ID: "PRIVATE_TELEGRAM_GROUP_ID",
  PRIVATE_TELEGRAM_BOT_TOKEN: "PRIVATE_TELEGRAM_BOT_TOKEN",
};

function getSettingByKey(key) {
  const spreadsheet = SpreadsheetApp.openById(Configs.ACCOUNT_FILE_ID);
  const sheet = spreadsheet.getSheetByName("SETTINGS");
  const data = sheet.getDataRange().getValues();

  // Loop through the rows to find the matching username and email
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] != key) {
      continue;
    }

    if (data[i][0] == key) {
      return data[i][1];
    }
  }

  return null;
}

/**
 * data: is request data
 * request types: submit_ticket | auth | reset_password | update_password
 */
function sendNotificationToTelegram(data, requestType) {
  try {
    if (requestType == "auth") {
      const _groupId = getSettingByKey(SettingKey.PRIVATE_TELEGRAM_GROUP_ID);
      const _botToken = getSettingByKey(SettingKey.PRIVATE_TELEGRAM_BOT_TOKEN);
      const _telegramService = new TelegramService(`${_groupId}`, _botToken);
      _telegramService.sendMessage(data + " Đã đăng nhập hệ thống.");
    }

    if (requestType == "reset_password") {
      const _groupId = getSettingByKey(SettingKey.PRIVATE_TELEGRAM_GROUP_ID);
      const _botToken = getSettingByKey(SettingKey.PRIVATE_TELEGRAM_BOT_TOKEN);
      const _telegramService = new TelegramService(`${_groupId}`, _botToken);
      _telegramService.sendMessage(data + " Yêu cầu thay đổi mật khẩu.");
    }

    if (requestType == "update_password") {
      const _groupId = getSettingByKey(SettingKey.PRIVATE_TELEGRAM_GROUP_ID);
      const _botToken = getSettingByKey(SettingKey.PRIVATE_TELEGRAM_BOT_TOKEN);
      const _telegramService = new TelegramService(`${_groupId}`, _botToken);
      _telegramService.sendMessage(data + " Đã cập nhật mật khẩu.");
    }

    if (requestType == "submit_ticket") {
      const groupId = getSettingByKey(SettingKey.TELEGRAM_GROUP_ID);
      const botToken = getSettingByKey(SettingKey.TELEGRAM_BOT_TOKEN);
      const telegramService = new TelegramService(`${groupId}`, botToken);

      const formXacMinhKhachHang = data["sheetData"]["XAC_MINH_KHACH_HANG"] ?? [];
      const messageXacMinhKhachHang = formXacMinhKhachHang
        .map((data) => {
          return `
      + STT: ${data[2]}
      + Địa chỉ cửa hàng: ${data[3]}
      + Ảnh check-in tại cửa hàng: <a href="${data[4]}">Link ảnh</a>
      + Ảnh sản phẩm kinh doanh: <a href="${data[5]}">Link ảnh</a>
      + Địa chỉ cừa hàng là nơi lấy hàng?: ${data[6]}
      + Địa chỉ lấy hàng?: ${data[7]}
      + Ảnh check-in tại nơi lấy hàng: <a href="${data[8]}">Link ảnh</a>
      `;
        })
        .join("\n");

      const formTinhTrangKinhDoanh = data["sheetData"]["TINH_TRANG_KINH_DOANH"] ?? [];
      const messageTinhTrangKinhDoanh = formTinhTrangKinhDoanh
        .map((data) => {
          return `
      + STT: ${data[2]}
      + Khách bán Sỉ/Lẻ: ${data[3]}
      + Ngành hàng: ${data[4]}
      + Tháng cao điểm bán được hàng: ${data[5]}
      + Số năm bán hàng: ${data[6]}
      + Số nhân viên shop: ${data[7]}
      `;
        })
        .join("\n");

      const formThongTinKenhBanHang = data["sheetData"]["THONG_TIN_KENH_BAN_HANG"] ?? [];
      const messageThongTinKenhBanHang = formThongTinKenhBanHang
        .map((data) => {
          return `
      + STT: ${data[2]}
      + Kênh bán hàng: ${data[3]}
      + Link kênh bán hàng: <a href="${data[4]}">Link tại đây</a>
      + Có chạy quảng cáo không?: ${data[6]}
      + Có livestream bán hàng không: ${data[7]}
      `;
        })
        .join("\n");
      //+ Lượt theo dõi hoặc thích kênh: ${data[5]}

      const sheetData = data["sheetData"]["QUY_TRINH"][0];
      let messageTemplate = "<b>" +
        sheetData[2] + "</b>\n\n" +
        "ID: " + sheetData[24] + "\n" +
        "Họ và tên: " + data["fullname"] + "\n" +
        "----------------------------------------------------------------------\n" +
        "<b>Thông tin người đề xuất</b>\n" +
        "+ Mã nhân viên: " + sheetData[3] + "\n" +
        "+ Đề xuất giá bán với loại dịch vụ: " + sheetData[4] + "\n" +
        "+ Hình thức đăng ký: " + sheetData[5] + "\n" +
        "----------------------------------------------------------------------\n" +
        "<b>Thông tin khách hàng</b>\n" +
        "+ Tình trạng khách hàng: " + sheetData[6] + "\n" +
        "+ Mã khách hàng: " + sheetData[7] + "\n" +
        "+ Sản lượng thực tế trung bình 3 tháng gần nhất: " + sheetData[8] + "\n" +
        "+ Link phiếu cài giá: " + sheetData[9] + "\n" +
        "+ Mô tả lý do đề xuất: " + sheetData[10] + "\n" +
        "----------------------------------------------------------------------\n" +
        "<b>Xác minh khách hàng</b>\n" +
        messageXacMinhKhachHang + "\n" +
        "----------------------------------------------------------------------\n" +
        "<b>Thông tin đối thủ</b>\n" +
        "+ Đối thủ: " + sheetData[11] + "\n" +
        "+ Sản lượng đang đi: " + sheetData[12] + "\n" +
        "+ Loại giá đang đi theo Tuyến: " + sheetData[13] + "\n" +
        "+ Loại giá đang đi theo Khối lượng: " + sheetData[14] + "\n" +
        "+ Màn hình sản lượng/ doanh thu đơn bên đối thủ: " + "<a href='" + sheetData[15] + "'>Link ảnh</a>" + "\n" +
        "+ Doanh thu hàng nặng đang đi bên đối thủ: " + sheetData[16] + "\n" +
        "----------------------------------------------------------------------\n" +
        "<b>Tình trạng kinh doanh</b>\n" +
        messageTinhTrangKinhDoanh + "\n" +
        "----------------------------------------------------------------------\n" +

        "<b>Thông tin TẤT CẢ các kênh bán hàng</b>\n" +
        messageThongTinKenhBanHang + "\n" +
        "----------------------------------------------------------------------\n" +
        "<b>Thông tin đề xuất</b>\n" +
        "+ Sản lượng cam kết (Đơn/Tháng): " + sheetData[17] + "\n" +
        "+ Phân khúc khối lượng: " + sheetData[18] + "\n" +
        "+ Tỷ trọng đơn Nội Vùng Liên Vùng: " + sheetData[19] + "\n" +
        "+ Chính sách phụ phí: " + sheetData[20] + "\n" +
        "+ Ngày bắt đầu tính SL cam kết: " + sheetData[21] + "\n" +
        //"+ Doanh thu hàng Nặng cam kết: " + sheetData[19] + "\n" +
        "+ Đề xuất giá bán tính trên 1KG (Bảng giá tối thiểu 20KG): " + sheetData[22] + "\n";

      telegramService.sendMessage(messageTemplate);
    }
  } catch (ex) {

  }
}
