import db from "@/lib/db";
 
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const sales = await db.sale.findMany({
            orderBy: {
                createdAt: "desc"
            },
             
        })
        return NextResponse.json(sales)
    } catch (error) {
        console.error(error );
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Orders",
            },
            { status: 500 }
        );
    }
}

