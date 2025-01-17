import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {

        const farmerData = await request.json();
        //console.log("Data received by API:", {code, contactPerson, contactPersonPhone,email, name, notes, phone, physicalAddress, terms, isActive, profileImageUrl, product, landSize, mainCrop})
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
        const farmers = await db.farmerProfile.findMany({
            orderBy: {
                createdAt : "desc"
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