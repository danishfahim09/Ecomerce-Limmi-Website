import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const { title, slug, imageUrl, description, isActive } = await request.json();
        
        const newCategory = { title, slug, imageUrl, description }
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message:"Failed to create category"
            },{status:500}
        )
    }
}


