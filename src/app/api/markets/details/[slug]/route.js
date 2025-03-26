import db from "../../../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
    try {
        const market = await db.market.findUnique({
            where: {
                slug
            }
        });

        return NextResponse.json(market);
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to fetch market",
            },
            { status: 500 }
        );
    }
}
