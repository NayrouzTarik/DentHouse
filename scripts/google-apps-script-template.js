/**
 * Google Apps Script for Dent House Marrakech Lead Capture
 * 
 * INSTRUCTIONS TO SET UP:
 * 1. Open Google Sheets (https://sheets.new) and name the spreadsheet: "Dent House Marrakech — Website Leads"
 * 2. In the top menu, click: Extensions > Apps Script
 * 3. Delete any code in the editor and paste THIS ENTIRE FILE.
 * 4. Click the "Save" icon (Ctrl + S).
 * 5. In the top right, click "Deploy" > "New deployment".
 * 6. Click the gear icon next to "Select type" and choose "Web app".
 * 7. Configure:
 *    - Description: "Dent House Consultation Form Webhook"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (crucial so the website can submit leads without authentication!)
 * 8. Click "Deploy", approve permissions with your Google account.
 * 9. Copy the "Web app URL" (starts with https://script.google.com/macros/s/...).
 * 10. Paste this URL into your .env as:
 *     VITE_LEAD_FORM_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
 *     OR in src/data/dentHouseData.ts in GOOGLE_SHEET_LEAD_WEBHOOK_URL.
 */

function setupSheet(sheet) {
  var headers = [
    'Timestamp',
    'Date & Time (Morocco)',
    'Full Name',
    'Phone / WhatsApp',
    'Email',
    'Treatment',
    'Travel Dates',
    'Patients',
    'Message',
    'Consent',
    'Source'
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#0F172A');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    setupSheet(sheet);

    var rawData = e.postData ? e.postData.contents : '{}';
    var data = {};
    try {
      data = JSON.parse(rawData);
    } catch (parseErr) {
      data = e.parameter || {};
    }

    var row = [
      new Date(),
      data.formattedDate || new Date().toISOString(),
      data.fullName || '',
      data.phone || '',
      data.email || '',
      data.treatment || '',
      data.travelDates || '',
      data.patients || '',
      data.message || '',
      data.consent || '',
      data.source || 'website'
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success', message: 'Lead recorded' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'active',
      service: 'Dent House Marrakech Lead Webhook',
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
