import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

const jwt = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: SCOPES,
});
const doc = new GoogleSpreadsheet(
  "1OWNg1l9xk_lQZpisxZEZxI8CfzC97QrbeCJmaop_Z7I",
  jwt,
);

const getGoogleSheet = async () => {
  await doc.loadInfo();
  return doc;
};

const fetchGoogleSheetRows = async () => {
  const googlesheet = await getGoogleSheet();
  const sheeByIdElement = googlesheet.sheetsById[0];
  const rows = await sheeByIdElement.getRows();
  return rows.map((row) => ({
    title: row.get("title"),
    subTitle: row.get("subTitle"),
  }));
};

export async function GET(request: Request) {
  return Response.json(await fetchGoogleSheetRows());
}

export async function POST(request: Request) {
  const res = await request.json();
  const sheet = doc.sheetsByIndex[1];
  sheet.addRow(res);
  return Response.json({});
}
