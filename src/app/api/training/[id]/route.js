import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const categories = await db.training.findUnique({
            where: {
                id
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

export async function DELETE(request, { params: { id } }) {
    try {
        const existingCategory = await db.training.findUnique({
            where: {
                id,
            },
        })
        if (!existingCategory) {
            return NextResponse.json({
                data: null,
                message: "training Not found "
            },
                {
                    status: 404
                }
            )
        }
        const deletedCategory = await db.training.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(deletedCategory);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch training",
            },
            { status: 500 }
        );
    }
}