import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {

        //Update the verification in the user
        const farmerData = await request.json();
        //check
        const existingUser = await db.user.findUnique({
            where: {
                id: farmerData.userId,
            }
        })
        if (!existingUser) {
            //Update EmailVerified
            return NextResponse.json(
                {
                    data: null,
                    message: `No User Found`
                },
                { status: 404 }
            );
        }
        // Update emailVerified
        const updateUser = await db.user.update({
            where: {
                id: farmerData.userId,
            },
            data: {
                emailVerified: true
            }
        })
        const newFarmerProfile = await db.farmerProfile.create({
            data: {
                contactPerson: farmerData.contactPerson,
                contactPersonPhone: farmerData.contactPersonPhone,
                email: farmerData.email,
                name: farmerData.name,
                notes: farmerData.notes,
                phone: farmerData.phone,
                physicalAddress: farmerData.physicalAddress,
                terms: farmerData.terms,
                isActive: farmerData.isActive,
                profileImageUrl: farmerData.profileImageUrl,
                product: farmerData.product,
                landSize: parseFloat(farmerData.landSize),
                mainCrop: farmerData.mainCrop,
                userId: farmerData.userId,
                code: farmerData.code,
            },
        });
        console.log(newFarmerProfile)
        console.log("New Coupon Created:", newFarmerProfile);
        return NextResponse.json(newFarmerProfile);
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
        const farmers = await db.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            where: {
                role: "FARMER"
            },
            include: {
                farmerProfile: true
            }
        })
        return NextResponse.json(farmers)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch farmers",
            },
            { status: 500 }
        );
    }
}