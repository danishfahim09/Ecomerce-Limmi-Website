import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const { categoryId, content, description, imageUrl, isActive, slug, title } = await request.json();

        //check exist user
        const existingTrrainig = await db.training.findUnique({
            where: {
                slug,
            }
        })
        if (existingTrrainig) {
            return NextResponse.json({
                data: null,
                message: "Ttrainig with this name already exist"
            }, {
                status: 409
            })
        }
        const NewTrainning = await db.training.create({
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
        console.log(NewTrainning)
        return NextResponse.json(NewTrainning)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to create Training"
            }, { status: 500 }
        )
    }
}


export async function GET() {
    try {
        const trainings = await db.training.findMany({
            orderBy: {
                createdAt : "desc"
            },
            
        })
        return NextResponse.json(trainings)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Training",
            },
            { status: 500 }
        );
    }
}

