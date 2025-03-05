import { NextResponse } from "next/server"
import db from "../../../lib/db";
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from "uuid";
import base64url from 'base64url'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/email-template'

export async function POST(request) {

    try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        //extract the credentials
        const { name, email, password, role } = await request.json()
        //Check If The User Alreaady Exist
        const existingUser = await db.user.findUnique({
            where: {
                email
            }
        })
        if (existingUser) {
            return NextResponse.json({
                data: null,
                message: `User With this emaill (${email}) exist`
            }, {
                status: 409
            })
        }
        // Ecript the password => bcrypt
        const hashedPassword = await bcrypt.hash(password, 10)

        const rawToken = uuidv4()
        console.log(rawToken)
        //Encode The Token using Base64 URL-safe-Fomate
        const token = base64url.encode(rawToken)

        //Create a User in the DB
        const newUser = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                verificationToken: token,
                role
            }
        })
        console.log(newUser)
        // Send The Email If User Role == FARMER
        const userId = newUser.id
        const linkText = "Verify Account"
        const description = "Thank you for creating  an  account  with US . We request you to click on the link Below in order to Complete your onboarding Process .ThankYou"
       const subject = "Account Verification - Limi Ecoumerce"
        const redirectUrl = `onboarding/${userId}?token=${token}`
        const sendEmail = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "danishfahim5857@gmail.com",
            subject: subject,
            react: EmailTemplate({ name, redirectUrl, linkText,description ,subject}),
        })
        console.log("Email Response:", sendEmail);

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
        const users = await db.user.findMany({
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