import { connectDb } from "../../../../dbConfig/dbConnect";
import User from "../../../../models/userModel"
import {NextRequest,NextResponse} from "next/server"
import bcryptjs from "bcryptjs"
export async function POST(request:NextRequest) {
    try {
        const reqBody=await request.json()
        const{username,email,password}=reqBody
        const userExists=await User.findOne({email})
        if(userExists){
            return NextResponse.json({
                error:"User already Exists",status:400
            })
        }
        const salt=await bcryptjs.genSalt(10)
        const hashPassword=await bcryptjs.hash(password,salt)
        if
    } catch (error:any) {
        return NextResponse.json({error:error.message,status:500})
    }
    
}


connectDb()