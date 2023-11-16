import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { type NextRequest, NextResponse } from "next/server";

const TITLE = "title";
const SUB_TITLE = "subTitle";

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive.file",
];

const jwt = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: (process.env.GOOGLE_PRIVATE_KEY as string)
    .split(String.raw`\n`)
    .join("\n"),
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

  const data = {
    section01: {
      title: rows[0].get(TITLE),
      subTitle: rows[0].get(SUB_TITLE).split("\n"),
    },
    section02: {
      title: rows[1].get(TITLE),
      subTitle: rows[1].get(SUB_TITLE).split("\n"),
    },
    section03: {
      title: rows[2].get(TITLE).split("\n"),
      subTitle: rows[2].get(SUB_TITLE).split("\n"),
    },
    section04: {
      title: rows[3].get(TITLE),
      subTitle: rows[3].get(SUB_TITLE).split("\n"),
    },
    section05: {
      title: rows[4].get(TITLE),
      content01: rows[4].get(SUB_TITLE).split("\n"),
      content02: rows[5].get(SUB_TITLE).split("\n"),
      content03: rows[6].get(SUB_TITLE).split("\n"),
    },
  };
  console.log(data);
  return data;
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
