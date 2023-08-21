import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "src/dbConfig/dbConnect";
import User from "src/models/userModel";
import { getDataFromToken } from "src/utils/getDataFromToken";

connectDb();
export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);
    const userData = await User.findOne({ _id: userID }).select("-password");
    return NextResponse.json({ message: "User found", data: userData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
