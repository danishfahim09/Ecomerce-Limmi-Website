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


export async function PUT(request, { params: { id } }) {
    try {
        const { categoryId, content, description, imageUrl, isActive, slug, title } = await request.json();

        const existingTraining = await db.training.findUnique({
            where: {
                id,
            }
        })
        if (!existingTraining) {
            return NextResponse.json({
                data: null,
                message: "Not Found"
            },
                {
                    status: 404
                }
            )
        }
        const updatingTraining = await db.training.update({
            where: {
                id
            },
            data: {
                categoryId,
                content,
                description,
                imageUrl,
                isActive,
                slug,
                title
            }
        })
        console.log(updatingTraining)
        return NextResponse.json(updatingTraining)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to Update Training"
            }, { status: 500 }
        )
    }
}