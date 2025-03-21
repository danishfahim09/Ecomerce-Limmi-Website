import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const coupon = await db.coupon.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(coupon)
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

export async function DELETE(request, { params: { id } }) {
    try {
        const existingCoupon = await db.coupon.findUnique({
            where: {
                id,
            },
        })
        if (!existingCoupon) {
            return NextResponse.json({
                data: null,
                message: "Coupon Not found "
            },
                {
                    status: 404
                }
            )
        }
        const deletedCoupon = await db.coupon.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(deletedCoupon);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Coupon",
            },
            { status: 500 }
        );
    }
}


export async function PUT(request, { params: { id } }) {
    try {
        const { title, couponCode, expiryDate, isActive } = await request.json();

        const existingUser = await db.coupon.findUnique({
            where: {
                id,
            }
        })
        if (!existingexistingUser) {
            return NextResponse.json({
                data: null,
                message: "User Not Found"
            },
                {
                    status: 404
                }
            )
        }
        const updatingUser = await db.userProfile.update({
            where: {
                id
            },
            data: {
                title,
                couponCode,
                expiryDate,
                isActive
            },
        })
        console.log(updatingCategory)
        return NextResponse.json(updatingUser)
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



