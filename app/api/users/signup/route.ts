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
        const { username, email, password } = reqBody;
        console.log(reqBody);

        // check if user already exist in database
        const alreadyUser = await User.findOne({ email }) 
        if(alreadyUser){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        // Hashing the password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // creating a new user
        const newUser = new User({username, email, password: hashedPassword})
        const savedUser = await newUser.save()
        return NextResponse.json(
            {
                message:"User created Succesfully",
                success:true, 
                savedUser
            },
            {status:201})

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}