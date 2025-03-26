import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET({params:{id}}) {
    try {
        const market = await db.market.findMany({
            where: {
                slug ,
            }
        })
        return NextResponse.json(market)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch market",
            },
            { status: 500 }
        );
    }
}



export async function DELETE(request,{params:{id}}) {
    try {
        const existingMarkete = await db.market.findMany({
            where: {
                id,
            }
        })
        if (!existingMarkete) {
            return NextResponse.json({
                data: null,
                message: "Markete Not found "
            },
                {
                    status: 404
                }
            )
        }
        return NextResponse.json(existingMarkete)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Delete market",
            },
            { status: 500 }
        );
    }
}