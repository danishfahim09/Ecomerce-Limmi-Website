import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params: { id } }) {
    try {
        console.log("ID Received:", id); // Debugging
        const user = await db.user.findUnique({
            where: {
                id,
            }
        })
        return NextResponse.json(user)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch user",
            },
            { status: 500 }
        );
    }
}