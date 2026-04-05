/**
 * Google Apps Script — Contact Form Backend
 *
 * Setup:
 * 1. Open the target Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1RR8Dro5BOQoe-1ZIIvMK5Ct5RRTW9_ERyeOj4UBQHEI/edit
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default Code.gs content with this entire file
 * 4. Click Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL and paste it into:
 *    src/components/ContactForm.tsx  (APPS_SCRIPT_URL constant)
 * 6. In the spreadsheet, add these column headers in row 1:
 *    A: Timestamp | B: Name | C: Email | D: Company | E: Social | F: Phone | G: Message | H: Page
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.social || '',
      data.phone || '',
      data.message || '',
      data.page || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
