import { NextResponse } from "next/server";
import db from "@/lib/db";



export async function GET(request, { params: { id } }) {
    try {
        const product = await db.product.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(product)
    } catch (error) {
        console.error("Database Error:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Product",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const existingProduct = await db.product.findUnique({
            where: {
                id,
            },
        })
        if (!existingProduct) {
            return NextResponse.json({
                data: null,
                message: "Category Not found "
            },
                {
                    status: 404
                }
            )
        }
        const deletedProduct = await db.product.delete({
            where: {
                id,
            },
        });
        return NextResponse.json(deletedProduct);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message,
                message: "Failed to Fetch Product",
            },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params: { id } }) {
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
        } = await request.json();
    
        const existingProduct = await db.product.findUnique({
            where: {
                id,
            }
        })
        if (!existingProduct) {
            return NextResponse.json({
                data: null,
                message: "Not Found"
            },
                {
                    status: 404
                }
            ) 
        }
        const updatingProduct = await db.product.update({
            where:{
                id
            },
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
        console.log(updatingProduct)
        return NextResponse.json(updatingProduct)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to Update Product"
            }, { status: 500 }
        )
    }
}



