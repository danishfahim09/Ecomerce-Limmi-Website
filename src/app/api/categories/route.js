import { NextResponse } from "next/server";
async function Post(request) {
    try {
        const { title, slug, imageUrl, description } = await request.json();
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