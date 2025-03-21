import db from "@/lib/db";
import { CaseSensitive } from "lucide-react";
import { NextResponse } from "next/server";

export async function POST(request) {

    try {
        const {
            barCode,
            categoryId,
            description,
            farmerId,
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
            wholeSaleQty,
            productImages
        } = await request.json()
        // cheack if this product already exist 
        const existingProduct = await db.product.findUnique({
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
                userId: farmerId,
                isActive,
                isWholeSale,
                productCode,
                imageUrl: productImages[0],
                productStock: parseInt(productStock),
                productPrice: parseFloat(productPrice),
                qty: parseInt(qty),
                salePrice: parseFloat(salePrice),
                sku,
                slug,
                tags,
                title,
                unit,
                wholeSalePrice: parseFloat(wholeSalePrice),
                wholeSaleQty: parseInt(wholeSaleQty),
                productImages
            }
        })
        console.log("aPI aLL dATA ", newProduct)
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

export async function GET(request) {
    const categoryId = request.nextUrl.searchParams.get("catId");
    const sortBy = request.nextUrl.searchParams.get("sort");
    const min = request.nextUrl.searchParams.get("min");
    const max = request.nextUrl.searchParams.get("max");

    const searchTerm = request.nextUrl.searchParams.get("search");

    const page = request.nextUrl.searchParams.get("page") || 1;
    const pageSize = 3


    let where = {
        categoryId,
    };
    if (min && max) {
        where.salePrice = {
            gte: parseFloat(min),
            lte: parseFloat(max),
        }
    } else if (min) {
        where.salePprice = {
            gte: parseFloat(min),
        }
    } else if (max) {
        where.salePrice = {
            lte: parseFloat(max),
        }
    }

    let products;

    try {
        if (searchTerm) {
            products = await db.product.findMany({
                where: {
                    OR: [
                        {
                            title: {
                                contains: searchTerm,
                                mode: "insensitive",
                            },
                        }
                    ]
                }
            });
        } else if (categoryId && page) {
            products = await db.product.findMany({
                where,
                skip: (parseInt(page) - 1) * parseInt(pageSize),
                take: (parseInt(pageSize)),
                orderBy: {
                    createdAt: "desc"
                },
            });
        } else if (categoryId && sortBy) {
            products = await db.product.findMany({
                where,
                orderBy: {
                    salePrice: sortBy === "asc" ? "asc" : "desc"
                },  // ✅ Sort validation
            });
        } else if (categoryId) {
            products = await db.product.findMany({
                where,
                orderBy: {
                    createdAt: "desc"
                }
            });
        } else {
            products = await db.product.findMany({
                orderBy:
                {
                    createdAt: "desc"
                }
                // orderBy:
                // {
                //     salePrice: `${sortBy}`
                // },
            });
        }

        return NextResponse.json(products);
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


