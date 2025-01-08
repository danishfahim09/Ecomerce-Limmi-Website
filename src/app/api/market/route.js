import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
        const { title, slug, logoUrl, description, isActive } = await request.json();
        console.log("Data received by API:", { title, link, imageUrl, isActive })
        const newCoupon = await db.banner.create({
            data: {
                title,
                slug,
                logoUrl,
                description,
                isActive
            },
        });
        console.log(newCoupon)
        console.log("New Coupon Created:", newCoupon);
        return NextResponse.json(newCoupon);
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
