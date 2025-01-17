import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
        const { title, link, imageUrl, isActive } = await request.json();
        console.log("Data received by API:", { title, link, imageUrl, isActive })
        const newCoupon = await db.banner.create({
            data: {
                title,
                link,
                imageUrl,
                isActive
            },
        });
        console.log(newCoupon)
        console.log("New Banner Created:", newCoupon);
        return NextResponse.json(newCoupon);
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to create Banner",
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const banners = await db.banner.findMany({
            orderBy: {
                createdAt : "desc"
            }
        })
        return NextResponse.json(banners)
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