import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const banner = await db.banner.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(banner)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Banner",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const existingbanner = await db.banner.findUnique({
            where: {
                id,
            },
        })
        if (!existingbanner) {
            return NextResponse.json({
                data: null,
                message: "banner Not found "
            },
                {
                    status: 404
                }
            )
        }
        const deletedbanner = await db.banner.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(deletedbanner);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch banner",
            },
            { status: 500 }
        );
    }
}