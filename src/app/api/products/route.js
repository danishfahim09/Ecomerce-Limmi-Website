import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    
    try {
        const {
            barCode,
            categoryId,
            description,
            farmerId,
            imageUrl,
            isActive,
            isWholeSale,
            productCode,
            productStock,
            productPrice,
            qty,
            salePrice,
            sku,
            slug,
            tags,
            title,
            unit,
            wholeSalePrice,
            wholeSaleQty
        } = await request.json()
        // cheack if this product already exist 
         const existingProduct =await db.product.findUnique({
            where: {
                slug
            }
        })
        if (existingProduct) {
            return NextResponse.json({
                data: null,
                message: "Category alredy exist"
            }, { status: 409 }
            )
        }

        const newProduct = await db.product.create({
            data: {
            barCode,
            categoryId,
            description,
            userId:farmerId,
            imageUrl,
            isActive,
            isWholeSale,
            productCode,
            productStock:parseInt(productStock),
            productPrice:parseFloat(productPrice),
            qty:parseInt(qty),
            salePrice:parseFloat(salePrice),
            sku,
            slug,
            tags,
            title,
            unit,
            wholeSalePrice:parseFloat(wholeSalePrice),
            wholeSaleQty:parseInt(wholeSaleQty)
        }
        })
        console.log("aPI aLL dATA ",newProduct)
        return NextResponse.json(newProduct)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to create Coupon"
            }, { status: 500 }
        )
    }
}

export async function GET() {
    try {
        const products = await db.product.findMany({
            orderBy: {
                createdAt : "desc"
            }
        })
        return NextResponse.json(products)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Products",
            },
            { status: 500 }
        );
    }
}

