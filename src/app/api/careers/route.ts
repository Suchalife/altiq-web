import { NextResponse } from "next/server";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwODzYYF6noCVh459IBfXyHSFld23C1DocGbJoKuymUJBW2Yj7KppbVehi1jmjrUzRzJw/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(SCRIPT_URL, {
      method:   "POST",
      headers:  { "Content-Type": "text/plain" },
      body:     JSON.stringify({ ...body, type: "careers" }),
      redirect: "follow",
    });

    const text = await res.text();

    let result: { success: boolean };
    try {
      result = JSON.parse(text);
    } catch {
      result = { success: true };
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error("Careers API error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to submit application." },
      { status: 500 }
    );
  }
}
