import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { slug } }) {
    try {
        const categories = await db.training.findUnique({
            where: {
                slug
            },

        })
        return NextResponse.json(categories)
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

 