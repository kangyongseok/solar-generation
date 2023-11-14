import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { type NextRequest, NextResponse } from "next/server";

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

export async function GET() {
  return NextResponse.json(await fetchGoogleSheetRows());
}

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const sheet = doc.sheetsByIndex[1];
    await sheet.addRow(res); // 기다림을 표현하기 위해 await 사용
    return NextResponse.json({});
  } catch (error) {
    console.error("Error while processing the request:", error);
    // 에러 처리 로직 추가
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
