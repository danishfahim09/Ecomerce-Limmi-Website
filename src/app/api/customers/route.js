import { NextResponse } from "next/server";
import db from "../../../lib/db";


export async function GET() {
    try {
        const customers = await db.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            where: {
                role: "USER"
            },
            include: {
                profile: true
            }
        })
        return NextResponse.json(customers)
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