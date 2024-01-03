import { createTweets, getTweet } from "@/lib/appwrite/api";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { d, topic } = await req.json();
    const data = await createTweets(d, topic);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const data = await getTweet();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
