import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const farmer = await db.farmer.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(farmer)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch farmer",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const existingfarmer = await db.farmer.findUnique({
            where: {
                id,
            },
        })
        if (!existingfarmer) {
            return NextResponse.json({
                data: null,
                message: "Farmer Not found "
            },
                {
                    status: 404
                }
            )
        }
        const deletedfarmer = await db.farmer.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(deletedfarmer);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch farmer",
            },
            { status: 500 }
        );
    }
}