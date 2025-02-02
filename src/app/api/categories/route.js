import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
    try {
        const { title, slug, imageUrl, description, isActive } = await request.json();

        const existingCategory = await db.category.findUnique({
            where: {
                slug,
            }
        })
        if (existingCategory) {
            return NextResponse.json({
                data: null,
                message: "Category already exist"
            },
                {
                    status: 409
                }
            ) 
        }

        const newCategory = await db.category.create({
            data: {
                title,
                slug,
                imageUrl,
                description,
                isActive
            }
        })
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to create category"
            }, { status: 500 }
        )
    }
}

export async function GET() {
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: "desc"
            }
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
