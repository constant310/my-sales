import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJ3uWji4qPM1lWH4iQ7-ykvYFOkQ7bjcvhQtWsp5qIz1dAXtDcva9n6Tnf_BElfYo5FQ/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "").trim();
    const reason = String(body.reason || "").trim();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "delete-account",
        email,
        reason,
      }),
      cache: "no-store",
    });

    const data = await googleResponse.json();

    if (!data.success) {
      return NextResponse.json(
        {
          success: false,
          message: data.error || "Unable to submit deletion request.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Deletion request received.",
    });
  } catch (error) {
    console.error("DELETE ACCOUNT:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
