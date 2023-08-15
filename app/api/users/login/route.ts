import { connect } from "@/db/dbconfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'

// connecting to database
connect()

// function which is used to handle request from browser.
export async function POST (request : NextRequest){
    try {

        const reqBody = await request.json()
        const { email, password } = reqBody;
        console.log(reqBody);

        // check if user already exist in database
        const alreadyUser = await User.findOne({ email }) 
        if(!alreadyUser){
            return NextResponse.json({error:"User Doesn't exists"},{status:400})
        }
        const isCorrectPswd = await bcryptjs.compare(password, alreadyUser.password)
        if(isCorrectPswd){
            return NextResponse.json({error:"Incorrect Credential"},{status:400})
        }

        // creating the tokend
        const tokenData = {
            id:alreadyUser._id,
            username:alreadyUser.username,
            email :alreadyUser.email
        }
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}