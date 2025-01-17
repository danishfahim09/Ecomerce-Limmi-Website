import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
        const { title, couponCode, expiryDate, isActive } = await request.json();
        console.log("Data received by API:", { title, couponCode, expiryDate })
        const newCoupon = await db.coupon.create({
            data: {
                title,
                couponCode,
                expiryDate,
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

export async function GET() {
    try {
        const coupons = await db.coupon.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json(coupons)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Coupon",
            },
            { status: 500 }
        );
    }
}