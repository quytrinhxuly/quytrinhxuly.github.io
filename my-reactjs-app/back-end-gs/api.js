



function doGet(request) {
    // const email = request.parameter.email;
    // const fileId = request.parameter.fid;
    return ContentService.createTextOutput(JSON.stringify({ "data": "value", "success": true }))
      .setMimeType(ContentService.MimeType.JSON)
      .addHeader('Access-Control-Allow-Origin', '*') // Allow all origins or specify your origin
      .addHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS') // Allow specific HTTP methods
      .addHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  // doPost function to handle POST requests
  function doPost(e) {
    const endpoint = e.parameter.endpoint;
    try {
      const payload = JSON.parse(e.postData.contents);
      if (endpoint == "submit_ticket") {
        return handleSubmitTicket(payload);
      }
  
      return ContentService
        .createTextOutput(JSON.stringify({ "message": "Data Not Found", "success": false }))
        .setMimeType(ContentService.MimeType.JSON);
  
    } catch (error) {
      return ContentService
        .createTextOutput(JSON.stringify({ "message": error, "success": false }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  function handleSubmitTicket(payload) {
    const { sheets, sheetData } = payload;
    if (sheets.length == 0) {
      return ContentService
        .createTextOutput(JSON.stringify({ "message": "Data Not Found", "success": false }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  
    const fileId = "1mPk1PuPc4Wc9fAXnRSMQHwZCrc1Ac0HLEmfN8YzQc2o";
    const file = SpreadsheetApp.openById(fileId);
    for (var i = 0; i < sheets.length; i++) {
      const sheetName = sheets[i];
      const values = sheetData[sheetName];
      appendData(file, sheetName, values);
      Utilities.sleep(200);
    }
  
    return ContentService
      .createTextOutput(JSON.stringify({ "message": "Request successfully", "success": true }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  function appendData(file, sheetName, data) {
    const sheet = file.getSheetByName(sheetName);
    const lastRow = sheet.getLastRow();
    const startRow = lastRow + 1;
    const startColumn = 1;
  
    sheet.getRange(startRow, startColumn, data.length, data[0].length).setValues(data);
  }
  