import { GoogleSpreadsheet } from 'google-spreadsheet';
import { config } from '../config';

const doc = new GoogleSpreadsheet(config.SPREADSHEET_ID);

export const fetchSpreadsheetData = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: config.CLIENT_EMAIL,
      private_key: config.PRIVATE_KEY,
    });
    await doc.loadInfo();
    
    const sheet = doc.sheetsById[config.SHEET_ID];
    const rows = await sheet.getRows();
    return rows;
  } catch (error) {
    throw new Error('Failed to fetch spreadsheet data');
  }
};