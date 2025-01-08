import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        const { title, slug, imageUrl,categoryId, description,content,isActive } = await request.json();
        const newCategory = { title, slug, imageUrl, description,categoryId,content,isActive }
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message:"Failed to create Training"
            },{status:500}
        )
    }
}


