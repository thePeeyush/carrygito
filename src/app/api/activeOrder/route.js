import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await fetchData();
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}