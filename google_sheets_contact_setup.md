# Connecting Your React Form to Google Sheets

Follow these quick steps to make the tournament registration form send data directly to your personal Google Sheet.

## Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new Blank spreadsheet.
2. Name it "Tournament Registrations".
3. In the first row, add the EXACT following headers (they must match exactly, case-sensitive):
   - `submissionDate`
   - `tournamentName`
   - `tournamentDate`
   - `playerName`
   - `fideId`
   - `fideRating`
   - `dob`
   - `email`
   - `phone`
   - `district`

## Step 2: Add the Code
1. Click on **Extensions** > **Apps Script** in the top menu of your Google Sheet.
2. Delete any code there and paste this exact script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Check which form is submitting data
  if (e.parameter.formType === 'ContactForm') {
    // Handling Contact Form Submission
    var contactData = [
      e.parameter.submissionDate || new Date(),
      "--- Contact Message ---", // Filler for tournamentName
      "", // Filler for tournamentDate
      e.parameter.name,
      "", // Filler for fideId
      "", // Filler for fideRating
      "", // Filler for dob
      e.parameter.email,
      e.parameter.phone,
      "", // Filler for district
      e.parameter.message // Note: we add a new column at the end for the message!
    ];
    sheet.appendRow(contactData);
    
  } else {
    // Handling Tournament Registration Submission
    var tournamentData = [
      e.parameter.submissionDate || new Date(),
      e.parameter.tournamentName,
      e.parameter.tournamentDate,
      e.parameter.playerName,
      e.parameter.fideId,
      e.parameter.fideRating,
      e.parameter.dob,
      e.parameter.email,
      e.parameter.phone,
      e.parameter.district
    ];
    sheet.appendRow(tournamentData);
  }
  
  // Return success response to React
  return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **IMPORTANT**: In your Google Sheet, add one more column header at the end (so it's the 11th column):
   - `message`
4. Click the **Save** icon (looks like a floppy disk).

## Step 3: Publish the Update
Since you changed the code, you **must** update your deployment.
1. Click the blue **Deploy** button > **Manage deployments**.
2. Click the pencil (edit) icon on your active deployment.
3. Under **Version**, click the dropdown and choose **New version**.
4. Click **Deploy**. (The URL stays exactly the same, so no code changes needed in React!)

