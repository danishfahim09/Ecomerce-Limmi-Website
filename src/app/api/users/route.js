import { NextResponse } from "next/server"
import db from "../../../lib/db";
import bcrypt from 'bcrypt'

export async function POST(request) {
    
    try {
        //extract the credentials
        const { name, email, password,role } = await request.json()
        //Check If The User Alreaady Exist
        const existingUser = await db.user.findUnique({
            where: {
                email
            }
        })
        if (existingUser) {
            return NextResponse.json({
                data: null,
                message: "User already exist"
            }, {
                status: 409
            })
        }
        // Ecript the password => bcrypt
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role
            }
        })
        console.log("this is new user ok ",newUser)
        return NextResponse.json({
            data: newUser,
            message: "User created successfully"
        }, {
            status: 201
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data: null,
            message: "server Error: Something went wrong"
        }, {
            status: 500
        });
    }
}
export async function GET() {
    try {
        const users  = await db.user.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json(users)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Category",
            },
            { status: 500 }
        );
    }
}