import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.WEATHER_API_BASE_URL!;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;

  try {
    const queryString = req.nextUrl.searchParams.toString();

    const response = await fetch(
      `${API_BASE_URL}/${path.join("/")}?${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WEATHER_API_KEY}`,
        },
      },
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch data" },
      { status: 500 },
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;

  try {
    const formData = await req.formData();

    const response = await fetch(`${API_BASE_URL}/${path.join("/")}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WEATHER_API_KEY}`,
      },
      body: formData,
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to process request" },
      { status: 500 },
    );
  }
}
