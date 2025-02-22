import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const banner = await db.banner.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(banner)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Banner",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const existingbanner = await db.banner.findUnique({
            where: {
                id,
            },
        })
        if (!existingbanner) {
            return NextResponse.json({
                data: null,
                message: "banner Not found "
            },
                {
                    status: 404
                }
            )
        }
        const deletedbanner = await db.banner.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(deletedbanner);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch banner",
            },
            { status: 500 }
        );
    }
}


export async function PUT(request, { params: { id } }) {
    try {
        const { title, link, imageUrl, isActive } = await request.json();


        const existingBanner = await db.banner.findUnique({
            where: {
                id,
            }
        })
        if (!existingBanner) {
            return NextResponse.json({
                data: null,
                message: "Not Found"
            },
                {
                    status: 404
                }
            )
        }

        const updatingBanner = await db.banner.update({
            where: {
                id
            },
            data: {
                title,
                link,
                imageUrl,
                isActive
            }
        })
        console.log(updatingBanner)
        return NextResponse.json(updatingBanner)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to Update Banner"
            }, { status: 500 }
        )
    }
}