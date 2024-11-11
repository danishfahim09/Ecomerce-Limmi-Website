import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const { title, couponCode, expiryDate } = await request.json();
        const newCategory = {title, couponCode, expiryDate }
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message:"Failed to create Coupon"
            },{status:500}
        )
    }
}


