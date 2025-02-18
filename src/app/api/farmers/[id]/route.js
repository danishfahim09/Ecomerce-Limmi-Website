import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const User = await db.user.findUnique({
            where: {
                id
            },
            include: {
                farmerProfile: true
            }
        })
        return NextResponse.json(User)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch User",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const existingUser = await db.user.findUnique({
            where: {
                id,
            },
        })
        // if (!existingUser) {
        //     return NextResponse.json({
        //         data: null,
        //         message: "User Not found "
        //     },
        //         {
        //             status: 404
        //         }
        //     )
        // }
        const deletedUser = await db.user.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(deletedUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch User",
            },
            { status: 500 }
        );
    }
}