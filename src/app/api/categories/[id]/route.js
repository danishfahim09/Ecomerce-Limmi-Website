import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const categories = await db.category.findUnique({
            where: {
                id
            },
            include: {
                products: true
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

export async function DELETE(request, { params: { id } }) {
    try {
        const existingCategory = await db.category.findUnique({
            where: {
                id,
            },
        })
        if (!existingCategory) {
            return NextResponse.json({
                data: null,
                message: "Category Not found "
            },
                {
                    status: 404
                }
            )
        }
        const deletedCategory = await db.category.delete({
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
                message: "Failed to Fetch Category",
            },
            { status: 500 }
        );
    }
}


export async function PUT(request, { params: { id } }) {
    try {
        const { title, slug, imageUrl, description, isActive } = await request.json();
    
        const existingCategory = await db.category.findUnique({
            where: {
                id,
            }
        })
        if (!existingCategory) {
            return NextResponse.json({
                data: null,
                message: "Not Found"
            },
                {
                    status: 404
                }
            ) 
        }
    
        const updatedCategory = await db.category.update({
            where:{
                id
            },
            data: {
                title,
                slug,
                imageUrl,
                description,
                isActive
            }
        })
        console.log(updatedCategory)
        return NextResponse.json(updatedCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to Update Category"
            }, { status: 500 }
        )
    }
}



