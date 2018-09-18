function getCSV() {

 var myLabel = GmailApp.getUserLabelByName("Email Label"); // specify label in gmail
 var threads = myLabel.getThreads(0,1);
 var msgs = GmailApp.getMessagesForThreads(threads);
 var attachments = msgs[0][0].getAttachments();

 var csv =  attachments[0].getDataAsString();
 var data = Utilities.parseCsv(csv);

var a = data.length ;
var b = data[0].length; 

var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = SpreadsheetApp.openById('SHEET ID').getSheetByName('Sheet Name');
  sheet.clearContents();
  var range = sheet.getRange(1,1, data.length,data[0].length);
range.setValues(data);

}