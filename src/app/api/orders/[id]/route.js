import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const order = await db.order.findUnique({
            where: {
                id
            },
            include: {
                orderItems: true
            }
        })
        return NextResponse.json(order)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch an Order",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const existingOrder = await db.order.findUnique({
            where: {
                id,
            },
        })
        if (!existingOrder) {
            return NextResponse.json({
                data: null,
                message: "Order Not found "
            },
                {
                    status: 404
                }
            )
        }
        const deletedOrder = await db.order.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(deletedOrder);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Order",
            },
            { status: 500 }
        );
    }
}


export async function PUT(request, { params: { id } }) {
    try {
        const { categoryId, content, description, imageUrl, isActive, slug, title } = await request.json();

        const existingOrder = await db.order.findUnique({
            where: {
                id,
            }
        })
        if (!existingOrder) {
            return NextResponse.json({
                data: null,
                message: "Order Not Found "
            },
                {
                    status: 404
                }
            )
        }
        const updatingOrder = await db.order.update({
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
        console.log(updatingOrder)
        return NextResponse.json(updatingOrder)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to Update Order"
            }, { status: 500 }
        )
    }
}