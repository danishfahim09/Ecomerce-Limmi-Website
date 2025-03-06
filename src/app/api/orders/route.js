import db from "@/lib/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const { checkoutFormData, orderItems } = await request.json();

        const { city, country, district, email, firstName, lastName,
            paymentMethod, phone, shippingCost, streetAddress, userId, } = checkoutFormData

        const newOrder = await db.order.create({
            data: {
                userId,
                firstName,
                lastName,
                email,
                phone,
                streetAddress,
                city,
                country,
                district,
                shippingCost: parseFloat(shippingCost),
                paymentMethod,
            }
        }) 
        const newOrderItems = await db.orderItem.createMany({
            data: orderItems.map((item) => ({
                productId: item.id,
                quantity: parseInt(item.qty),
                price: parseFloat(item.salePrice),
                orderId: newOrder.id,
            })),
        });

        console.log(newOrder,newOrderItems)
        return NextResponse.json(newOrder)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to create Order"
            }, { status: 500 }
        )
    }
}


export async function GET() {
    try {
        const orrders = await db.order.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json(orrders)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Orders",
            },
            { status: 500 }
        );
    }
}

