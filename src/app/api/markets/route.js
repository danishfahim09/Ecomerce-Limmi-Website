import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {

        const { categoryIds, description, isActive, logoUrl, slug, title, } = await request.json()

        const existingProduct = await db.market.findUnique({
            where: {
                slug,
            }
        })
        if (existingProduct) {
            return NextResponse.json({
                data: null,
                message: "Category already exist"
            },
                {
                    status: 409
                }
            )
        }


        const newProducts = await db.market.create({
            data: {
                categoryIds,
                description,
                isActive,
                logoUrl,
                slug,
                title,
            },
        });
        console.log(newProducts)
        console.log("New Coupon Created:", newProducts);
        return NextResponse.json(newProducts);
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to create Coupon",
            },
            { status: 500 }
        );
    }
}


export async function GET() {
    try {
        const market = await db.market.findMany({
            orderBy: {
                createdAt : "desc"
            }
        })
        return NextResponse.json(market)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch market",
            },
            { status: 500 }
        );
    }
}